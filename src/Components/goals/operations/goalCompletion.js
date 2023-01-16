//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import { ref, update } from "firebase/database";
import { db } from "../firebase";
export const handleGoalCompletion = (goalObj) => {
  update(ref(db, `/${goalObj.uuid}`), {
    ...goalObj,
    isCompleted: true,
    completed_at: new Date().toISOString(),
  });
  confetti({
    particleCount: 150,
    startVelocity: 30,
    spread: 360,
    angle: 40,
    origin: {
      x: 0.5,
      y: 0,
    },
  });
};
