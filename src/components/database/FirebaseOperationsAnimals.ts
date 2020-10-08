import firebase from "./firebase";

import { AnimalDAO } from "../../interfaces/Animal";

type setAnimalsType = React.Dispatch<React.SetStateAction<AnimalDAO[]>>;

interface IDoc {
  data: () => AnimalDAO;
}

export const loadAllAnimals = async (
  setAllAnimals: setAnimalsType,
  setAnimals: setAnimalsType
): Promise<void> => {
  await firebase
    .firestore()
    .collection("Animal")
    .get()
    .then((querySnapshot: any) => {
      let newAllAnimals: AnimalDAO[] = [];
      querySnapshot.docs.forEach((doc: IDoc) => {
        newAllAnimals.push(doc.data());
      });
      setAllAnimals(newAllAnimals);
      setAnimals(newAllAnimals);
    });
};
