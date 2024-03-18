export const generateContent = () => {
  let numbersList = "";
  for (let i = 1; i <= 100; i++) {
    numbersList += `${i}\n`;
  }

  return numbersList;
};
