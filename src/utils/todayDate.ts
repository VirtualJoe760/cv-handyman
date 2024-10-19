export const todayDate = (): string => {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensures two-digit month
  const day = String(date.getDate()).padStart(2, '0'); // Ensures two-digit day
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};
