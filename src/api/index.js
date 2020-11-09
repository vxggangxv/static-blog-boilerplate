// import { axs, setHeader } from './config/axiosConfig';
// import * as endPoints from 'api/config/endPoints';

// posts
// export function fetchPosts(id) {
//   return axs(endPoints.posts.get(id));
// }
// fetchPostById
// editPostById
// deletePostById
import request from 'api/config/axiosUtils';

export const test = request({ path: '/todos', config: { timeout: false } });
