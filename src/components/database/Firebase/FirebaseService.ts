import * as animals from "./FirebaseOperationsAnimals";
import * as user from "./FirebaseOperationsUser";

import { IDbService } from "../DbService";

export const DbServiceFirebase: IDbService = {
  loadAllAnimals: animals.loadAllAnimals,
  loadUser: user.loadUser,
  updateUser: user.updateUser,
  createNewUser: user.createNewUser,
};
