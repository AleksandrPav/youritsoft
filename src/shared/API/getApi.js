import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});


export const getPosts = async (userId) => {
    const {data} = await instance.get(`/posts?userId=${userId}`);
    return data;
 
};

export const getUsers = async () => {
    const { data } = await instance.get("/users");
    return data;
};

