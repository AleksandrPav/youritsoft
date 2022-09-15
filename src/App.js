import React, { useEffect, useState } from 'react';

import { getUsers } from "./shared/API/getApi";

import Users from './Components/Content/Users/Users';
import FormSearch from './Components/FormSearch/FormSearch';
import Posts from './Components/Content/Posts/Posts';
import Pagination from './Components/Pagination/Pagination';
import Button from './Modules/Button/Button';


import scss from './App.module.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentId, setCurrentId] = useState(null);
  const [onClick, setOnClick] = useState(false);
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
  const onClickSearch = (id) => {
    setOnClick(true);
    setCurrentId(id);
  };
// sort by name
  const sortByName = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setUsers(sortedUsers);
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
    <div className={scss.App}>
      <FormSearch
        onSubmit={searchUser}
        search={search}
      />
      <Button
        onClick={sortByName}
      />
    
      {onClick ? (
        <div className={scss.ContentActive}>
           <Users
        users={currentUsers}
        loading={loading}
        onClick={onClickSearch}
        />
        <Posts
          currentId={currentId}
          onClick={onClick}
          />
        </div>
      ) : (
          <div className={scss.Content}>
            <Users
        users={currentUsers}
        loading={loading}
        onClick={onClickSearch}
            />
            
          </div>
        )}       
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        />
    </div>
  );
}

export default App;

