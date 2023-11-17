// create a variable called inputYards then convert to a function
const convertToMeters = (yards) => {
  return yards * 0.9144;
};
//create a a space for the user to enter
const inputYards = prompt(`Enter a yard amount for us to convert`);

//how do we store the result of the converted meters?
const convertedMeters = convertToMeters(inputYards);
console.log(convertedMeters, `meters`);
