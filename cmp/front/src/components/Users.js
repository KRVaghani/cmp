import React, {useEffect,useState} from 'react';
import axios from 'axios';


const Users = () => {

    const [id, setId] = useState('');
    const [user, setUser] = useState('');
    const [age, setAge] = useState('');

    // useEffect(()=>{
    //     getAllUsers();
    // },[]);

    // const url = "http://localhost:3800/users";
    // const getAllUsers = () =>{
    //     axios.get("http://localhost:3800/users").then((res)=>{
    //         console.log(res.data.users);
    //     })
    //     .catch(error => console.error(error));

        axios.defaults.baseURL = 'http://localhost:3800/';

        const instanceWithBaseURL = axios.create({
          baseURL: 'http://localhost:3800/',
        });
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
        //...then use it normally
        const a = instanceWithBaseURL.get('/users', config)
        console.warn(a);
        
       
    
    return (
        <div>
         
            users
        </div>
    );
};

export default Users;