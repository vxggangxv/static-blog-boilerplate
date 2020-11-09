import axios from 'axios';
// import { setInterceptors } from './config/interceptors';

// instance & interceptor
function create(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

// function createWithAuth(url, options) {
//   const instance = axios.create(Object.assign({ baseURL: url }, options));
//   setInterceptors(instance);
//   return instance;
// }

// console.log(process.env.REACT_APP_API_URL);
// export const auth = create(process.env.REACT_APP_API_URL);
// export const boards = createWithAuth(`${process.env.REACT_APP_API_URL}boards/`);
export const movies = create('https://api.themoviedb.org/3/', {
  params: {
    api_key: 'da32b717c9f7e41e580fb597c3049eb1',
    language: 'ko-KR',
  },
});
