import Moment from 'moment';

export const formatStringToDate = (date: string) => {
    Moment.locale('en');
    return Moment(date).format("MMMM dd, yyyy")
}
