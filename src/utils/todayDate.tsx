export const todayDate = () => {
  let today;
  let defaultToday = new Date();
  let dd;
  let defaultDd = defaultToday.getDate();
  let defaultMm = defaultToday.getMonth() + 1;
  let mm;
  let yyyy = defaultToday.getFullYear();
  if (defaultMm < 10) mm = `0${defaultMm}`;
  if (defaultDd < 10) dd = `0${defaultDd}`;
  today = `${yyyy}-${mm}-${dd}`;
  return today;
};
