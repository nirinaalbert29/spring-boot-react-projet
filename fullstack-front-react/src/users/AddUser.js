import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

  let navigate = useNavigate();
  const [user,setUser]=useState({
    nom:"",
    username:"",
    email:""
  });

  const {nom,username,email}=user;

  const onInputChange = (e)=>{
    setUser({ ...user,[e.target.name]:e.target.value })
  };

  const onSubmit = async (e) => {
    e.preventDefault();//controlle de lien dans navigateur 
    await axios.post("http://localhost:8080/user",user)
    navigate("/")
  };
  return (
    <div className='container my-3 col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
     <h2 className='text-center m-4'>Add new User</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Nom:</label>
          <input type="text" className="form-control" id="nom" placeholder="Enter nom" name="nom" value={nom} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Username:</label>
          <input type="text" className="form-control" id="user" placeholder="Enter username" name="username" value={username} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>onInputChange(e)}/>
        </div><br/>
        <button type="submit" className="btn btn-outline-primary">Enregistrer</button>
        <Link to='/' type="submit" className="btn btn-outline-danger mx-2">Retour</Link>
      </form>
    </div>
  )
}
