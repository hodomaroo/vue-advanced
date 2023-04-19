import axios from "axios";

// 1. HTTP Request & Response Config

const config = {
  baseUrl: "https://api.hnpwa.com/v0",
};

// 2. API 함수들을 정리
// API 종류가 복잡해질 경우 별도의 파일로 추가 분리

function fetchNewsList(page = 1) {
  return axios.get(`${config.baseUrl}/news/${page}.json`);
}

function fetchUser(user) {
  return axios.get(`${config.baseUrl}/user/${user}.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}/jobs/1.json`);
}

function fetchAsksList(page = 1) {
  return axios.get(`${config.baseUrl}/ask/${page}.json`);
}

function fetchItem(id) {
  return axios.get(`${config.baseUrl}/item/${id}.json`);
}

export { fetchUser, fetchNewsList, fetchJobsList, fetchAsksList, fetchItem };
