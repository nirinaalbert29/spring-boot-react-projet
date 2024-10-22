import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {
    const {id} = useParams();
    const [user,setUser]=useState({
        nom:"",
        username:"",
        email:"",
    });
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser= async () =>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }
  return (
    <div className="container card my-4 col-md-6 border rounded shadow">
        <h3 class="card-title">Détail de l'user numero : {user.id}</h3>
        <div class="card-body">
            <h6 class="card-title">Nom : {user.nom}</h6>
            <h6 class="card-title">Username : {user.username}</h6>
            <h6 class="card-title">Email : {user.email}</h6>
            <Link to={'/'} class="btn btn-outline-danger">Retour</Link>
        </div>
    </div>
  )
}
