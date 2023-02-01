import React, { Component } from 'react';
import './../../assets/bootstrap/css/bootstrap.min.css';
import './../../assets/css/Login-Form-Clean.css';
import './../../assets/css/styles.css';
import List from '../../gen/List';
import URLHelper from '../../Helper/URLHelper';
import FetchHelper from '../../Helper/FetchHelper';
// import './../../assets/bootstrap/js/bootstrap.min.js';
class AdvSearch extends Component {
    state = { 
        liste:[
            {
                refCategorie: "CT001",
                nomCategorie: "vin",
                id: 1
            }
        ],
        status:[
            {
                name:"did not begin", 
                code: 0
            },
            {
                name:"going on", 
                code: 1
            },
            {
                name:"to be finished", 
                code: 2
            },
            {
                name:"finished",  
                code: 3
            }
        ],
        listeRes:
        [
            {
                nomlot: "cageot2 vin",
                refEnchere: "EN001",
                debut: "Jan 10, 2023, 12:00:00 AM",
                duree: {
                    years: 0,
                    months: 0,
                    days: 20,
                    hours: 2,
                    minutes: 3,
                    wholeSeconds: 4,
                    microSeconds: 0,
                    type: "interval"
                },
                prixDeMisEnEnchere: 20000.0,
                idLot: 1,
                Commission: 5.0,
                id: 1
            }
        
        ]
     } 
    constructor(){
        super();
    //    this.state = {inf:FetchHelper.getData(URLHelper.urlgen("api/Proformat_fournisseur_demande_ressource"))};
        this.listStat();
    }
    listStat=async ()=>{
        const val=await (FetchHelper.getData(URLHelper.urlgen("categorie/getAll/")));
        this.setState({liste:val.data});
        if("error" in val)
            window.location.replace("/")
        console.log(val.data);
        // console.log("hereeee");
    }
    handleSubmit=async (event)=>{
        event.preventDefault();
        let form = document.getElementById("formSearch");
        let formData = new FormData(form);
        let object = {};
        formData.forEach((value, key) =>{ 
            if(value!==""){
                if(object[key] === undefined){
                    object[key] = [];
                    // object[key].push(value);
                }
                object[key].push(value);
            }
        });
        console.log(object);
        // console.log(JSON.stringify(object));
        let response=await FetchHelper.getDataPost(URLHelper.urlgen("encheres/search"), object);
        console.log(response);
        if("error" in response){
            console.log(({ erreur: response.error.message}))
        }
        else{
            // localStorage.setItem("token", response.data.token);
            // localStorage.setItem("idAdmin", response.data.idadmin);
            this.setState({listeRes:response.data})
        }

    }
    render() { 
        return (
            <React.Fragment>
                <section className="login-clean">
                    <form method="post" id="formSearch">
                        <h2 >recherche</h2>
                        <div className="mb-3">
                            <label className="form-label">mot clé</label>
                            <input className="form-control" type="text" placeholder="que cherchez-vous ?" name="word"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">date</label>
                            <input className="form-control" type="date" name="datemin"/>
                            <input className="form-control" type="date" name="datemax" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">prix</label>
                            <input className="form-control" type="number" placeholder="min" name="prixmin"/>
                            <input className="form-control" type="number" placeholder="max" name="prixmax"/>
                        </div>
                        <div className="mb-3"></div>
                        <div className="mb-3"><label className="form-label">catégorie</label>
                        {this.state.liste.map(el => 
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="formCheck-1" name="cat" value={el.id}/>
                                <label className="form-check-label" for="formCheck-1">{el.nomCategorie}</label>
                            </div>
                        )}
                        
                        </div>
                        <div className="mb-3">
                            <label className="form-label">statut</label>
                            {this.state.status.map(el =>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="formCheck-3" name="status" value={el.code}/>
                                <label className="form-check-label" for="formCheck-3">{el.name}</label>
                            </div>)}
                            
                        </div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" onClick={this.handleSubmit}>Chercher</button></div>
                    </form>
                </section>
                <div style={{marginLeft: "35%", width: "100%"}}>
                    <List tab={this.state.listeRes}></List>
                </div>
            </React.Fragment>
        );
    }
}
 
export default AdvSearch;