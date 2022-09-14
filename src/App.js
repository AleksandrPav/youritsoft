import React, { useEffect, useState } from 'react';

import { getUsers } from "./shared/API/getApi";

import Users from './Components/Content/Users/Users';
import FormSearch from './Components/FormSearch/FormSearch';
// import PostSearch from './Components/PostSearch/PostSearch';
import Pagination from './Components/Pagination/Pagination';


import scss from './App.module.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const users = await getUsers();
        setUsers(users);
        if (search) {
          const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          );
          setUsers(filteredUsers);
        };
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
      fetchUsers();
    fetchUsers();
  }, [search]);

//  Find user by name
  const searchUser = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
// Post search
  const onClickSearch = (e) => {
    e.preventDefault();
    setPost(e.target.value);
  };

  

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(pageNumber);
    } else {
      return;
    }
  }

  return (
    <div className={scss.body}>
      <FormSearch
        onSubmit={searchUser}
        search={search}
      />
      <Users
        users={currentUsers}
        loading={loading}
        onClick={onClickSearch}
      />
      {/* <PostSearch
      /> */}

      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        />
    </div>
  );
}

export default App;
