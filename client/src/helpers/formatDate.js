const formatDate = (date) => {
  let dates = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  // console.log(month);

  if (month === 0) {
    month = 'January';
  } else if (month === 1) {
    month = 'February';
  } else if (month === 2) {
    month = 'March';
  } else if (month === 3) {
    month = 'April';
  } else if (month === 4) {
    month = 'May';
  } else if (month === 5) {
    month = 'June';
  } else if (month === 6) {
    month = 'July';
  } else if (month === 7) {
    month = 'August';
  } else if (month === 8) {
    month = 'September';
  } else if (month === 9) {
    month = 'October';
  } else if (month === 10) {
    month = 'November';
  } else if (month === 11) {
    month = 'December';
  }

  const dateNewFormat = `${dates} ${month} ${year}`;
  return dateNewFormat;
};

export default formatDate;
