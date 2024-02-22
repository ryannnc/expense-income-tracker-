import moment from 'moment'

export const Format = (date) => {
    return moment(date).format('MM/DD/YYYY')
}