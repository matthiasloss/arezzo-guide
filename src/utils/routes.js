export function getRouteCoordinates(tour) {
  const coordinates = [
    tour.startCoordinates,
    ...(tour.stops || []).map((stop) => stop.coordinates),
    tour.coordinates,
  ].filter(Boolean)

  return coordinates.filter((coordinate, index) => {
    const previous = coordinates[index - 1]
    return !previous || previous[0] !== coordinate[0] || previous[1] !== coordinate[1]
  })
}

export function buildGpx(tour) {
  const points = getRouteCoordinates(tour)
  const routePoints = points
    .map(([lat, lng], index) => `    <rtept lat="${lat}" lon="${lng}"><name>${escapeXml(tour.stops?.[index]?.name || `${tour.name} ${index + 1}`)}</name></rtept>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Casentino Wander-App" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>${escapeXml(tour.name)}</name>
    <desc>${escapeXml(tour.description)}</desc>
  </metadata>
  <rte>
    <name>${escapeXml(tour.name)}</name>
${routePoints}
  </rte>
</gpx>
`
}

export function downloadGpx(tour) {
  const blob = new Blob([buildGpx(tour)], { type: 'application/gpx+xml' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${tour.id}.gpx`
  document.body.append(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

function escapeXml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}
