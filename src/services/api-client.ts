import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '358f8b7b728544ccaa65398ebeebecdf'
    }
})

