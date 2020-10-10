import { AnimalDAO } from "./Animal";
import { ShelterDAO } from "./Shelter";
import { UserDAO } from "./User";

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

export interface IStore {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
