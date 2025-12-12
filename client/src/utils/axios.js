import axios from "axios"
import { API_URL } from "../constant"
export const instance =axios.create({
    baseURL:API_URL,
    timeout:10000,
})