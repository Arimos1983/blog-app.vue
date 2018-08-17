import moment from 'moment'

export const mixin1 = {
filters: {

    formatDate(date,outputFormat = 'YYYY-MM-DD HH:mm:ss' )
    {
        
        return moment(date).format(outputFormat);
        
    },
    diffForHumans(date)
    {
        
        return moment(date).startOf('hour').fromNow();
        
    }
}
}

