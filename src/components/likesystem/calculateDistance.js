export function getDistanceBetweenPoints(user, shelter) {
  function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  const lat1 = user.location.lat;
  const lng1 = user.location.lng;

  const lat2 = shelter.lat;
  const lng2 = shelter.lng;

  let R = 6378137;
  let dLat = degreesToRadians(lat2 - lat1);
  let dLong = degreesToRadians(lng2 - lng1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat1)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);

  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const newDistance = ((R * c) / 1000).toFixed(0);

  console.log(newDistance);
  return newDistance;
}
