import axios from "axios";

export default axios.create({
    baseURL: "https://api.github.com/api",
    headers: {
        "Content-type": "application/json"
    }
});