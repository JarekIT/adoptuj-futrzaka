import React, { useState } from "react";
import firebase, { storage } from "../../components/database/firebase";
import { InputComponent } from "../AddShelter/InputComponent/InputComponent";

const AddAnimal = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [desc, setDesc] = useState("");
  const [typee, setTypee] = useState("cat");
  const [gender, setGender] = useState("samica");
  const [shelterId, setShelterId] = useState(0);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [lastUrl, setLastUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    try {
      const date = new Date().toISOString();

      const uploadTask = storage.ref(`images/${date}-${image.name}`).put(image);
      console.log(`${date}+${image.name}`);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(date + "-" + image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
            });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const resetInputs = () => {
    setLastUrl(url);
    setUrl(null);
    setProgress(0);
    setName("");
    setAge(0);
    setImage(null);
  };

  const handleSaveAnimalsOnClick = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    let numberOfAnimalsInDb;
    await firebase
      .firestore()
      .collection("Animal")
      .get()
      .then((animalsFromDb) => {
        numberOfAnimalsInDb = animalsFromDb.docs.length;
      });

    await firebase.firestore().collection("Animal").add({
      id: numberOfAnimalsInDb,
      name: name,
      desc: desc,
      age: age,
      image: url,
      likedBy: [],
      type: typee,
      gender: gender,
      // shelterId will be taken from logged Shelter profile
      shelterId: shelterId,
      date: new Date(),
    });

    resetInputs();
  };

  const handleChangeDesc = (event) => {
    setDesc(event.target.value);
  };

  return (
    <div>
      <h4>Wypełnij dane zwierzaka:</h4>
      <InputComponent label="Imię: " state={name} setState={setName} />
      <br />
      <br />
      <InputComponent
        label="Wiek: "
        state={age}
        setState={setAge}
        type="Number"
      />
      <br />
      <br />
      <InputComponent label="Typ: " state={typee} setState={setTypee} />
      <br />
      <br />
      <InputComponent label="Płeć: " state={gender} setState={setGender} />
      <br />
      <br />
      <InputComponent
        label="Numer schroniska: "
        shelterId={shelterId}
        setState={setShelterId}
        type="number"
      />
      <br />
      <br />
      {"Opis: "}
      <textarea value={desc} onChange={handleChangeDesc} />
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      <br />
      <br />
      <button onClick={handleUpload}>Załaduj zdjęcie</button>
      <br />
      <br />
      <progress value={progress} max="100" height="100vw" />
      <br />
      <br />
      <img src={url} alt="wczytaj zdjęcie" className="input-animal" />
      <br />
      <br />
      {url === null || name === "" || age === 0 ? (
        <button disabled>Uzupełnij wszystkie pola</button>
      ) : (
        <button onClick={(event) => handleSaveAnimalsOnClick(event)}>
          Dodaj zwierzaka
        </button>
      )}
      <br />
      {lastUrl ? (
        <>
          <hr />
          <p>Ostatnio dodany zwierzak</p>
          <img
            src={lastUrl}
            alt="ostatnio dodany zwierzak"
            className="input-animal"
          />
        </>
      ) : null}
    </div>
  );
};

export default React.memo(AddAnimal);
