import React  from "react";
import scss from "./Users.module.scss";
import Loader from "../../../Modules/Loader/Loader";

const Users = ({ users, loading, onClick }) => {
    if (loading) {
        return <Loader />;
    }

    const onClickHandler = (e) => {
        onClick(e.target.value);
    };


    return (
        <div className={scss.UsersInfo}>
        <ul className={scss.UsersItems} >
            {users.map((user) => (
                <li className={scss.UserItem} key={user.id}>
                    <h3 className={scss.UserName}>{user.name}</h3>
                    <a className={scss.UserEmail} href={`mailto:${user.email}`}>{ user.email }</a>
                    <a className={scss.UserPhone} href={`tel:${user.phone}`}>{user.phone}</a>
                    <button onClick={onClickHandler} className={scss.PostButton} type="submite">Read the posts</button>
                </li>
            ))}
        </ul>
        </div>
    );
};
    
export default Users;

