import axios from "axios";

const axiosInstanceBE=axios.create({
    baseURL: 'http://localhost:3000',
    headers:{
        "Content-Type": "application/json",
    },
})



export { axiosInstanceBE };