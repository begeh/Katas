let talkingCalendar = function (date) {
  let arr = date.split("/");
  let year = arr[0];
  let month = arr[1];
  let day = arr[2];
  switch (month) {
    case "01":
      return "January " + day + ", " + year;
      break;
    case "02":
      return "February " + day + ", " + year;
      break;
    case "03":
      return "March " + day + ", " + year;
      break;
    case "04":
      return "April " + day + ", " + year;
      break;
    case "05":
      return "May " + day + ", " + year;
      break;
    case "06":
      return "June " + day + ", " + year;
      break;
    case "07":
      return "July " + day + ", " + year;
      break;
    case "08":
      return "August " + day + ", " + year;
      break;
    case "09":
      return "September " + day + ", " + year;
      break;
    case "10":
      return "October " + day + ", " + year;
      break;
    case "11":
      return "November " + day + ", " + year;
      break;
    case "12":
      return "December " + day + ", " + year;
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));