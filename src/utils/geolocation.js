const toRad = (x) => x * Math.PI / 180
const earthRadius = 6371

export const distanceBetween = (pointA, pointB) => {
    const [lngA, latA] = pointA
    const [lngB, latB] = pointB

    const deltaLat = latB - latA
    const deltaLng = lngB - lngA

    const radDeltaLat = toRad(deltaLat)
    const radDeltaLng = toRad(deltaLng)

    const haversine =
        Math.sin(radDeltaLat / 2) * Math.sin(radDeltaLat / 2) +
        Math.cos(toRad(latA)) * Math.cos(toRad(latB)) *
        Math.sin(radDeltaLng / 2) * Math.sin(radDeltaLng / 2);

    const distance = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine)) * earthRadius

    return distance
}