import { update } from "firebase/database";
import { ref } from "firebase/database";
import { app, db } from "../../firebase";

export const uploadFileToFirebaseStorage = (
  file,
  goalObj,
  setUploadProgress
) => {
  const storageRef = app.storage().ref(file.name);
  storageRef.put(file).on(
    "state_changed",
    (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setUploadProgress(percentage);
    },
    (err) => console.log(err),
    async () => {
      const url = await storageRef.getDownloadURL();
      await update(ref(db, `/${goalObj.uuid}`), {
        ...goalObj,
        goalImgUrl: url,
      });
      setUploadProgress(0);
    }
  );
};
