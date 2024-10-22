import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

  let navigate = useNavigate();
  const {id}=useParams();

  const [user,setUser]=useState({
    nom:"",
    username:"",
    email:""
  });

  const {nom,username,email}=user;

  const onInputChange = (e)=>{
    setUser({ ...user,[e.target.name]:e.target.value });
  };

  useEffect(()=>{
    loadUsers();
 },[]);

  const onSubmit = async (e) => {
    e.preventDefault();//controlle de lien dans navigateur 
    await axios.put(`http://localhost:8080/update/${id}`,user);
    navigate("/")
  };

  const loadUsers = async ()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }

  return (
    <div className='container my-3 col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
     <h2 className='text-center m-4'>Edit User</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Nom:</label>
          <input type={"text"} className="form-control" placeholder="Enter nom" name="nom" value={nom} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Username:</label>
          <input type={"text"} className="form-control" placeholder="Enter username" name="username" value={username} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Email:</label>
          <input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={(e)=>onInputChange(e)}/>
        </div><br/>
        <button type="submit" className="btn btn-outline-primary">Enregistrer</button>
        <Link to='/' type="submit" className="btn btn-outline-danger mx-2">Retour</Link>
      </form>
    </div>
  )
}
