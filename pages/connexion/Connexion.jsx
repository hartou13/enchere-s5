import React, { Component } from 'react';
import URLHelper from '../../Helper/URLHelper';
import FetchHelper from '../../Helper/FetchHelper';
class Connexion extends Component {
    state = { 
        erreur:""
    } 
    handleSubmit=async (event)=>{
        event.preventDefault();
        let form = document.getElementById("login");
        let formData = new FormData(form);
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        console.log(object);
        let response=await FetchHelper.getDataPost(URLHelper.urlgen("ConnexionUser"), object);
        console.log(response);
        if("info" in response){
            this.setState({ erreur: response.info.message})
        }
        else{
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("idUser", response.data.idadmin);
            window.location.replace("/updateProfil");
        }

    }
    render() { 
        return (
            <React.Fragment>  
                <form id='login'>
                    <p>Email :
                    <input className='inp' type="email" placeholder=" " name='email' id='field' value={"test@example.com"}/>
                    </p>
                    
                    <p>Mot de passe :
                    <input className='inp' type="password" placeholder=" " name='mdp' id='field' value={"test"} />
                    </p>
                    <div>
                        <p>{this.state.erreur}</p>
                    </div>
                        <button type='submit' onClick={this.handleSubmit}>Connexion</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Connexion;