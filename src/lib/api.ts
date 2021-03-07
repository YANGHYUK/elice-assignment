import axios from "axios";
// import dotenv from 'dotenv';
// dotenv.config();

const BASENAME: string | undefined = "https://api-rest.elice.io/org";
// process.env.REACT_APP_API_KEY;

const path: any = {
  // 관리자
  courseLists: "academy/course/list/", // course lists get
};

interface Iinfo {
  method: any;
  api: "" | "courseLists";
  id: string;
  params: string;
  data: any;

  contentType: string;
}

function callApi(info: Iinfo) {
  const {
    method = "",
    api = "",
    id = "",
    params = "",
    data = {},
    contentType = "application/json",
  } = info;

  return axios({
    method,
    url: `${BASENAME}/${path[api]}/${id}`,
    data,
    params,
    headers: {
      "Content-Type": contentType,
    },
  });
}

export async function apiFetch(data: any) {
  try {
    const res = await callApi(data);
    return res;
  } catch {
    throw new Error("api fetch error");
  }
}
