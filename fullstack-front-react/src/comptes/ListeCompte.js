import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ListeCompte() {
  const [comptes,setComptes]=useState([]);

  useEffect(()=>{
    loadComptes();
  });

  const loadComptes = async ()=>{
    const result =await axios.get("http://localhost:8080/comptes");
    setComptes(result.data);
  }
  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email user</th>
                        <th>Date de création</th>
                        <th>mot de passe</th>
                        <th>Photo</th>
                        <th>Actions</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        comptes.map((compte,index)=>(
                        <tr>
                            <th key={index}>{index+1}</th>
                            <td>{compte.user_id}</td>
                            <td>{compte.createdAt}</td>
                            <td>{compte.mdp}</td>
                            <td>{compte.photo}</td>
                            <td>
                                {/* <Link to={`/edituser/${user.id}`} className='btn btn-primary mx-2'>Edit</Link>
                                <Link to={`/viewuser/${user.id}`} className='btn btn-secondary mx-2'>view</Link>
                                <button onClick={()=>deleteUser(user.id)} className='btn btn-danger mx-2'>Delete</button> */}
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
