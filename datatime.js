"USE STRICT"

// let directTime = new Date(2012, 1, 20 , 3, 12 );


// alert(directTime);

// function getWeekDay(date) {
//     let res = date.getDay();
//     switch (res) {
//         case 0:
//            return 'ВС';

//         case 1:
//            return 'ПН';

//         case 2:
//            return 'ВТ';

//         case 3:
//             return 'СР';

//         case 4:
//             return 'ЧТ';

//         case 5:
//             return 'ПТ';
//         case 6:
//             return 'СБ';
//     }

// }


// let date = new Date(2012, 0, 3); // 3 января 2012 года
// alert(getWeekDay(date)); // нужно вывести "ВТ"
// function getLocalDay(date) {

//     let day = date.getDay();

//     if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
//       day = 7;
//     }

//     return day;
//   }

// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// alert( getLocalDay(date) );       // вторник, нужно показать 2
// function getDateAgo(date, days) {
//     let newDate = new Date(date);
//     newDate.setDate(newDate.getDate() - days);
//     return newDate.getDate();


// }


// let date = new Date(2015, 0, 2);

// alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month){
//     let val = new Date (year, month + 1);
//     // alert(date);
//     val.setDate(val.getDate()-1);
//     let result = val.getDate();
//     return result;

// }


// // alert( getLastDayOfMonth(2012, 1) );
// alert (getLastDayOfMonth(2012, 1));



// function getSecondsToday() {
//     let now = new Date();
//     let allSeconds = 0;
//     allSeconds = (now.getHours() * 3600) + ( now.getMinutes() * 60 ) + now.getSeconds();
//     return allSeconds;

// }


// alert(getSecondsToday());
function getSecondsToTomorrow(){
    let today = new Date;
    let tomorrow = new Date(today.getFullYear() , today.getMonth() , today.getDate()+ 1);
    
    let difference = tomorrow - today;
    

    return Math.round(difference / 1000);;
}


alert( getSecondsToTomorrow() );