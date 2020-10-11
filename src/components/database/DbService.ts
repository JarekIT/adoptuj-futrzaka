import { DbServiceFirebase } from "./Firebase/FirebaseService";

import { Dispatch } from "../../interfaces/Store";
import { UserDAO } from "../../interfaces/User";

export interface IDbService {
  loadAllAnimals: (dispatch: Dispatch) => Promise<void>;
  loadUser: (fireUser: firebase.User, dispatch: Dispatch) => Promise<void>;
  updateUser: (newUser: UserDAO) => Promise<void>;
  createNewUser: (fireUser: firebase.User, dispatch: Dispatch) => Promise<void>;
}

enum DbType {
  Firebase,
}

const DbOption: DbType = DbType.Firebase;

const Db: IDbService = (() => {
  switch (DbOption) {
    case DbType.Firebase:
      return DbServiceFirebase;
    default:
      return DbServiceFirebase;
  }
})();

export const DbService: IDbService = Db;
