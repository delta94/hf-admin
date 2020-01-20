export const todayDate = () => {
  let today;
  let defaultToday = new Date();
  let dd = defaultToday.getDate();
  let defaultMm = defaultToday.getMonth() + 1;
  let mm;
  let yyyy = defaultToday.getFullYear();
  if (defaultMm < 10) mm = `0${defaultMm}`;
  today = `${yyyy}-${mm}-${dd}`;
  return today;
};
