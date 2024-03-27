import axios from "axios";
const API_URL = "http://ec2-54-196-173-168.compute-1.amazonaws.com";

const login =(email:string)=>{
    const res = axios.post(API_URL +":3000/api/getToken",{email});
    return res;

}
export default login;