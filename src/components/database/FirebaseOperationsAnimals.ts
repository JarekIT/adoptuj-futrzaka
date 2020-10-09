import firebase from "./firebase";

import { AnimalDAO } from "../../interfaces/Animal";
import { Dispatch } from "../../interfaces/Store";

interface IDoc {
  data: () => AnimalDAO;
}

export const loadAllAnimals = async (dispatch: Dispatch): Promise<void> => {
  await firebase
    .firestore()
    .collection("Animal")
    .get()
    .then((querySnapshot: any) => {
      let newAllAnimals: AnimalDAO[] = [];
      querySnapshot.docs.forEach((doc: IDoc) => {
        newAllAnimals.push(doc.data());
      });

      dispatch({
        type: "FETCH_DATA_ANIMALS",
        payload: newAllAnimals,
      });
    });
};
