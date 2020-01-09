let talkingCalendar = function(date) {
  let arr = date.split("/");
  let year = arr[0];
  let month = arr[1];
  let day = arr[2];
  switch (month) {
  case "01":
    return "January " + day + ", " + year;
  case "02":
    return "February " + day + ", " + year;
  case "03":
    return "March " + day + ", " + year;
  case "04":
    return "April " + day + ", " + year;
  case "05":
    return "May " + day + ", " + year;
  case "06":
    return "June " + day + ", " + year;
  case "07":
    return "July " + day + ", " + year;
  case "08":
    return "August " + day + ", " + year;
  case "09":
    return "September " + day + ", " + year;
  case "10":
    return "October " + day + ", " + year;
  case "11":
    return "November " + day + ", " + year;
  case "12":
    return "December " + day + ", " + year;
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));