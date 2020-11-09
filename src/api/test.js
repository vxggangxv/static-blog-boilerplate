import { axs } from './config/axiosConfig';
import { test } from 'api';

// fetchPosts
// fetchPostById
// editPostById
// deletePostById
export function fetchTests() {
  return axs(test.get());
}
export function fetchTestById(id) {
  return axs(test.get(id));
}
