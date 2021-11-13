export const addValueToNewArray = <T>(array: T[], value: T) => {
  const newArray = [...array, value];
  return newArray;
};

addValueToNewArray([1, 2, 3], 4);
