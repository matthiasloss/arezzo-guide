import { useEffect, useMemo, useState } from 'react'
import { CloudSun, RefreshCw, Umbrella, Wind } from 'lucide-react'

const thunderstormCodes = new Set([95, 96, 99])

export default function WeatherHikingCard({ tour }) {
  const [weather, setWeather] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const [lat, lng] = tour.startCoordinates || []
    if (!lat || !lng) return

    const controller = new AbortController()
    const url = new URL('https://api.open-meteo.com/v1/forecast')
    url.search = new URLSearchParams({
      latitude: lat,
      longitude: lng,
      current: 'temperature_2m,weather_code,wind_speed_10m',
      hourly: 'precipitation_probability,wind_gusts_10m',
      forecast_days: '1',
      timezone: 'auto',
    })

    fetch(url, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('weather')))
      .then((data) => {
        setWeather(data)
        setStatus('ready')
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setStatus('error')
      })

    return () => controller.abort()
  }, [tour])

  const rating = useMemo(() => weather ? rateWeather(weather) : null, [weather])

  return (
    <section className="mt-5 rounded-lg bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CloudSun className="text-[#d47b35]" />
          <h2 className="font-bold">Wetter-Wanderampel</h2>
        </div>
        {status === 'loading' && <RefreshCw className="animate-spin text-[#20312a]/40" size={18} />}
      </div>

      {status === 'error' && (
        <p className="text-sm leading-relaxed text-[#20312a]/70">
          Wetterdaten konnten gerade nicht geladen werden. Vor dem Start bitte Wetterbericht und Gewitterlage separat prüfen.
        </p>
      )}

      {rating && (
        <>
          <div className={`rounded-lg p-3 ${rating.className}`}>
            <p className="text-sm font-semibold">Aktuelle Einschätzung</p>
            <p className="mt-1 text-xl font-bold">{rating.label}</p>
            <p className="mt-1 text-sm">{rating.reason}</p>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-[#20312a]/70">
            <Metric icon={CloudSun} value={`${Math.round(weather.current.temperature_2m)}°C`} label="Temp." />
            <Metric icon={Umbrella} value={`${rating.precipitation}%`} label="Regen" />
            <Metric icon={Wind} value={`${Math.round(weather.current.wind_speed_10m)} km/h`} label="Wind" />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-[#20312a]/50">
            Daten: Open-Meteo. Die Ampel ersetzt keine lokale Gewitter-, Sperrungs- oder Wegzustandsprüfung.
          </p>
        </>
      )}
    </section>
  )
}

function Metric({ icon: Icon, value, label }) {
  return (
    <div className="rounded-lg bg-[#f4f1e8] p-2">
      <Icon className="mx-auto mb-1 text-[#245447]" size={16} />
      <p className="font-bold">{value}</p>
      <p>{label}</p>
    </div>
  )
}

function rateWeather(data) {
  const current = data.current
  const precipitation = Math.max(...(data.hourly?.precipitation_probability || [0]).slice(0, 8))
  const gusts = Math.max(...(data.hourly?.wind_gusts_10m || [0]).slice(0, 8))

  if (thunderstormCodes.has(current.weather_code) || precipitation >= 70 || gusts >= 50 || current.temperature_2m >= 33) {
    return {
      label: 'Lieber vorsichtig planen',
      reason: 'Regen-/Gewitterrisiko, Hitze oder Wind sprechen gegen lange Touren.',
      className: 'bg-red-50 text-red-900 border border-red-200',
      precipitation,
    }
  }

  if (precipitation >= 40 || gusts >= 35 || current.temperature_2m >= 29) {
    return {
      label: 'Machbar, aber anpassen',
      reason: 'Kurzere Route, früher Start oder Plan B sind sinnvoll.',
      className: 'bg-amber-50 text-amber-950 border border-amber-200',
      precipitation,
    }
  }

  return {
    label: 'Gute Bedingungen',
    reason: 'Aktuell spricht wetterseitig wenig gegen diese Tour.',
    className: 'bg-emerald-50 text-emerald-950 border border-emerald-200',
    precipitation,
  }
}
