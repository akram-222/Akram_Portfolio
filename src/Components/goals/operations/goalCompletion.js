export const handleGoalCompletion = () => {
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
