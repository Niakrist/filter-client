import axios from "axios";

const axiosOptions = {
  baseUrl: process.env.PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosClassic = axios.create(axiosOptions);
