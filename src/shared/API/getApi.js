import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});


export const getPosts = async (_page = 1) => {
    const { data } = await instance.get("/posts", {});
    return data;
};

export const getUsers = async () => {
    const { data } = await instance.get("/users", {
    });
    return data;
};

console.log(getUsers());
