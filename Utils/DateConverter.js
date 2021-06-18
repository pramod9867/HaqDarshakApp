// export const to12HrFormat = (time) => {
//     time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

//     if (time.length > 1) { // If time format correct
//         time = time.slice(1);  // Remove full string match value
//         time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
//         time[0] = +time[0] % 12 || 12; // Adjust hours
//     }
//     return time.join('');
// }

// export const ChangeFormateDate = (oldDate) => {
//     return oldDate.toString().split("-").reverse().join("-");
// }

// export const converMDDDYYYFormat = (incomingDate) => {
//     const Months = ['January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December'];
//     const splitedDate = incomingDate.split("-");
//     console.log("Splitted Date");
//     console.log(splitedDate);

//     console.log(Months[[parseInt(splitedDate[1])]] + " " + splitedDate[1] + " " + splitedDate[0]);
//     return splitedDate[2] + " " + Months[[parseInt(splitedDate[1]) - 1]] + " " + splitedDate[0];
// }


// export const convertTo24Hour = (time) => {
//     var hours = parseInt(time.substr(0, 2));
//     if (time.indexOf('am') != -1 && hours == 12) {
//         time = time.replace('12', '0');
//     }
//     if (time.indexOf('pm') != -1 && hours < 12) {
//         time = time.replace(hours, (hours + 12));
//     }
//     return time.replace(/(am|pm)/, '');
// }

// export const convertTo24HourCapital = (time) => {
//     var hours = parseInt(time.substr(0, 2));
//     if (time.indexOf('AM') != -1 && hours == 12) {
//         time = time.replace('12', '0');
//     }
//     if (time.indexOf('PM') != -1 && hours < 12) {
//         time = time.replace(hours, (hours + 12));
//     }

//     console.log("Time Replace");
//     console.log(time.replace(/(AM|PM)/, ''));
//     return time.replace(/(AM|PM)/, '');
// }


// export const convertToNormaltime = (time) => {
//     return time.replace(/(AM|PM)/, '')
// }

// export const getTimeAsNumberOfMinutes = (time) => {
//     var timeParts = time.split(":");

//     console.log(timeParts);
//     var timeInMinutes = parseInt((timeParts[0] * 60)) + parseInt(timeParts[1]);

//     return timeInMinutes;
// }


// export const splitStartDateTime = (datetime) => {
//     const splittedArray = datetime.split(" ");
//     console.log(splittedArray);
//     const date = splittedArray[0] + " " + splittedArray[1] + " " + splittedArray[2];
//     const time = splittedArray[4] + splittedArray[5]

//     return { date, time };
// }

// export const splitEndDateTime = (datetime) => {
//     const splittedArray = datetime.split(" ");
//     console.log(splittedArray);
//     const dateNew = splittedArray[0] + " " + splittedArray[1] + " " + splittedArray[2];
//     const timeNew = splittedArray[3] + splittedArray[4]

//     return { dateNew, timeNew };
// }