import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

const BASE_URL = 'http://localhost:8000/api/v1/'

const POST = (url, params) => {
  return axios.post(`${BASE_URL}${url}`, params, config)
}
const PUT = (url, params) => {
  return axios.put(`${BASE_URL}${url}`, params, config)
}
const GET = (url, params) => {
  if (params) {
    return axios.get(`${BASE_URL}${url}?${dictToURI(params)}`, config)
  } else {
    return axios.get(`${BASE_URL}${url}`, config)
  }
}

const dictToURI = (dict) => {
  var str = [];
  for(var p in dict){
     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
  }
  return str.join("&");
}

export const API = {
  POST,
  GET,
  PUT,
}