import axios from 'axios'

const request = axios.create({
  baseURL: "http://5d1c7574f31e7f00147eb6c2.mockapi.io/api",
});

request.interceptors.response.use(response => {
    if (response.status === 200) {
      return response.data;
    } else {
      return response;
    }
  }, error => {
    return Promise.reject(error)
  }
);

export default request
