import React, {useEffect,useState} from 'react';
import axios from 'axios';

const Users = () => {

    // const [users, getUsers] = useState('');

    // useEffect(()=>{
    //     getAllUsers();
    // },[]);

    // const url = "http://localhost:3800/users";
    const getAllUsers = () =>{
        axios.get("http://localhost:3800/users").then((res)=>{
            console.log(res.data.users);
        })
        .catch(error => console.error(error));
    }
    
    return (
        <div>
           {getAllUsers}
        </div>
    );
};

export default Users;