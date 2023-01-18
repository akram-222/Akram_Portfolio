import { getStorage, ref as storageRef, deleteObject } from "firebase/storage";

export const deleteFileFromFirebaseStorage = (goalObj) => {
  let storage = getStorage();
  const goalImgRef = storageRef(storage, `${goalObj.goalImgUrl}`);
  // Delete the file
  deleteObject(goalImgRef)
    .then(() => {
      console.log("file deleted successfully");
    })
    .catch((error) => {
      console.log("file deleted successfully");
    });
};
