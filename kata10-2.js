const talkingCalendar = function(date) {
  // Your code here
  let txt = '';
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  date = date.split('/');
  txt += months[parseInt(date[1]) - 1] + ' ';
  if (date[2][0] === '0') { //leading zero in date
    txt += date[2][1];
  } else {
    txt += date[2];
  }
  if (parseInt(date[2][1]) > 0 && parseInt(date[2][1]) < 4) {
    switch (date[2][1]) {
    case '1':
      txt += 'st';
      break;
    case '2':
      txt += 'nd';
      break;
    case '3':
      txt += 'rd';
    }
  } else {
    txt += 'th';
  }
  txt += ', ' + date[0];//add year
  return txt;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));