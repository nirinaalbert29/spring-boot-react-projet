import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const {id} = useParams();
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers = async ()=> {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };
    const deleteUser=async (id)=> {
        await axios.delete(`http://localhost:8080/delete/${id}`);
        loadUsers()
    };
  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        users.map((user,index)=>(
                        <tr>
                            <th key={index}>{index+1}</th>
                            <td>{user.nom}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edituser/${user.id}`} className='btn btn-primary mx-2'>Edit</Link>
                                <Link to={`/viewuser/${user.id}`} className='btn btn-secondary mx-2'>view</Link>
                                <button onClick={()=>deleteUser(user.id)} className='btn btn-danger mx-2'>Delete</button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
