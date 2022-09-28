import date from 'date-and-time';

export function getDate(inputDate, format="MMM DD YYYY"){
    if(inputDate instanceof Date && !isNaN(inputDate)){
        return date.format(inputDate, format);
    }

    return date.format(new Date(inputDate), format);
}