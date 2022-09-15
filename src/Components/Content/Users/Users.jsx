import React, {useState} from "react";
import scss from "./Users.module.scss";
import Loader from "../../../Modules/Loader/Loader";


const Users = ({ users, loading, onClick }) => {
    const [active, setActive] = useState(false);

    if (loading) {
        return <Loader />;
    }

    const onClickHandler = (e) => {
        onClick(e.target.value);
        setActive(true);
        const id = Number(e.target.value);
        return id;
    };

    // add class to active ul
    const renderUsers = users.map((user) => {
        return (
        <li className={scss.UserItem} key={user.id}  >
                    <h3 className={scss.UserName}>{user.name}</h3>
                    <a className={scss.UserEmail} href={`mailto:${user.email}`}>{ user.email }</a>
                    <a className={scss.UserPhone} href={`tel:${user.phone}`}>{user.phone}</a>
                    <button value={user.id} onClick={onClickHandler} className={scss.UserButton} type="submite">Read the posts</button>
            </li>
        );
    });

    const renderPosts = users.map((user) => {
        return (
        <li className={scss.PostsItem} key={user.id}  >
                    <h3 className={scss.PostsName}>{user.name}</h3>
                    <a className={scss.PostsEmail} href={`mailto:${user.email}`}>{ user.email }</a>
                    <a className={scss.PostsPhone} href={`tel:${user.phone}`}>{user.phone}</a>
                    <button value={user.id} onClick={onClickHandler} className={scss.PostButton} type="submite">Read the posts</button>
            </li>
        );
    });

    
    return (
        <div className={scss.UsersInfo}>
            {active ? (
            <ul className={scss.PostsItems} >
                {renderPosts}
            </ul>
            ) : (
            <ul className={scss.UsersItems} >
                {renderUsers}
            </ul>
            )}
        </div>
    );
};
                    
export default Users;

