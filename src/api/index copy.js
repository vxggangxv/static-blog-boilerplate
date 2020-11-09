import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'da32b717c9f7e41e580fb597c3049eb1',
    language: 'ko-KR',
    // language: "en-US"
  },
});

export const moviesApi = {
  nowPlaying: () => instance.get('movie/now_playing'),
  upcoming: () => instance.get('movie/upcoming'),
  popular: () => instance.get('movie/popular'),
  movieDetail: id =>
    instance.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: term =>
    instance.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => instance.get('tv/top_rated'),
  popular: () => instance.get('tv/popular'),
  airingToday: () => instance.get('tv/airing_today'),
  showDetail: id =>
    instance.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: term =>
    instance.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

// const curryacx = props => {
//   return () => {
//     return {
//       get() {
//         return axios.get(props.api)
//       },
//       post(data) {
//         return axios.post({
//           url: props.api,
//           ...data
//         })
//       }
//     }
//   }
// }
// const acx = curryacx({
//   api: "http:127.test/"
// });
