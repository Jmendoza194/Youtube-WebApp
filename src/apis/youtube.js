import axios from 'axios';

const KEY = 'AIzaSyDEgmo5rDKgl6sCksj5QacDi0RLD-tpOwc';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});