import moment from 'moment';

export const formatDate = (date, format) => moment(date).format(format);
