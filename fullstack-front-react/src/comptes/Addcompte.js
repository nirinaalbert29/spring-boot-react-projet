import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddCompte() {
    let navigate = useNavigate();
    const [compte, setCompte] = useState({
        createdAt: new Date().toISOString(),
        mdp: "",
        photo: "",
        userId: null,
    });

    const { createdAt, mdp, photo, userId } = compte;

    const onInputChange = (e) => {
        setCompte({ ...compte, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:8080/user/email/${userId}`);
            const userDb = res.data;
            const user_id_db = userDb.id;

            console.log("User id :",user_id_db);

            // Mettre à jour userId dans le state avant l'envoi de la requête POST
            setCompte((prevCompte) => ({ ...prevCompte, userId: user_id_db }));

            await axios.post("http://localhost:8080/compte/add", compte);
            navigate("/comptes");
        } catch (error) {
            console.log("Erreur lors de l'ajout du compte :", error);
        }
    };

    return (
        <div className='container my-3 col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Ajouter un nouveau compte</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="userId">ID de l'utilisateur:</label>
                    <input type="email" className="form-control" placeholder="Entrez l'ID de l'utilisateur" name="userId" value={userId} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="mdp">Mot de passe:</label>
                    <input type="password" className="form-control" placeholder="Entrez le mot de passe" name="mdp" value={mdp} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="photo">Image:</label>
                    <input type="text" className="form-control" placeholder="Sélectionnez une image" name="photo" value={photo} onChange={(e) => onInputChange(e)} />
                </div>
                <br />
                <button type="submit" className="btn btn-outline-primary">Enregistrer</button>
                <Link to='/' type="submit" className="btn btn-outline-danger mx-2">Retour</Link>
            </form>
        </div>
    );
}
