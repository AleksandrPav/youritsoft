import React, { useEffect, useState } from "react";
import scss from "./Posts.module.scss";

import { getPosts } from "../../../shared/API/getApi";

const Posts = ({onClick, currentId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            const fetchPost = async () => {
                try {
                    const response = await getPosts(currentId);
                    setPosts(response);
                } catch (error) {
                    console.log(error);
                }
            };
        
        fetchPost();
        
     
    }, [currentId, onClick]);

 
    return (
        <div className={scss.PostsInfo}>
            <ul className={scss.PostsItems}>
                {posts.map((post) => (
                    <li className={scss.PostItem} key={post.id}>
                        <h3 className={scss.PostTitle}>{post.title}</h3>
                        <p className={scss.PostBody}>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}



export default Posts;





