import { ref, update } from "firebase/database";
import { db } from "../../../firebase";
export const handleGoalCompletion = (goalObj) => {
  update(ref(db, `/${goalObj.uuid}`), {
    ...goalObj,
    isCompleted: true,
    completed_at: new Date().toISOString(),
  });
};
