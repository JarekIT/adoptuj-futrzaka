import { AnimalDAO } from "../../interfaces/Animal";
import { ShelterDAO } from "../../interfaces/Shelter";
import { UserDAO } from "../../interfaces/User";

export type Dispatch = React.Dispatch<IAction>;

export interface IState {
  allAnimals: AnimalDAO[];
  animals: AnimalDAO[];
  shelters: ShelterDAO[];
  user: UserDAO;
}

export interface IAction {
  type: string;
  payload: any;
}
