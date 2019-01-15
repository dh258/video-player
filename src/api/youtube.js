import axios from 'axios';

const KEY = 'AIzaSyBqVNy6yA3-BoNWIIiQiavtGsPs9GRGOlg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});