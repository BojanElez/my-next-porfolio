export const calculateYearsOfExperience = (): number => {
  const startDate = new Date(2019, 0, 1); 
  const currentDate = new Date();
  
  const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); 
  
  return Math.floor(diffInYears);
};
