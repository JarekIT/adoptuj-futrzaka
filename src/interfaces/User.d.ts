import { AnimalDAO } from "./Animal";

export interface UserDAO {
  email: string | null;
  filters: {
    viewCats: boolean;
    viewDogs: boolean;
    viewMales: boolean;
    viewFemales: boolean;
    mapRange: number;
  };
  id: string | null;
  likedAnimals: AnimalDAO[];
  location: {
    lat: number | null;
    lng: number | null;
    city: string | null;
    address: any | null;
  };
  name: string | null;
  nextAnimals: AnimalDAO[];
  picture: string | null;
  viewedAnimals: number[];
}
