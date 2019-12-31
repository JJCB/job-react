import axios from 'axios';
export function ClientJob(params:any) {
  return axios.get(String(process.env.REACT_APP_API_JOB) , { params });
}

