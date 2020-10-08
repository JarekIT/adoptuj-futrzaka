import { UserDAO } from "../../interfaces/User";
import { ShelterDAO } from "../../interfaces/Shelter";

export function getDistanceBetweenPoints(
  user: UserDAO,
  shelter: ShelterDAO
): string {
  if (user.location.lat == null) {
    return "(Wpisz swoją lokalizację)";
  }

  function degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  const lat1: number = user.location.lat;
  const lng1: number = user.location.lng;

  const lat2: number = shelter.lat;
  const lng2: number = shelter.lng;

  let R = 6378137;
  let dLat: number = degreesToRadians(lat2 - lat1);
  let dLong: number = degreesToRadians(lng2 - lng1);
  let a: number =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat1)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);

  let c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const newDistance: string = ((R * c) / 1000).toFixed(0) + " km";

  return newDistance;
}
