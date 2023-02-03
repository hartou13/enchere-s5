import { Component } from "react";
import FetchHelper from "../Helper/FetchHelper";
import URLHelper from "../Helper/URLHelper";
import logo from "./default.png";
export default class Mise extends Component{

    state={
        sold:0, 
        en:{
            refLot: "LO001",
            nomLot: "cageot vin",
            descriptionLot: "20 bouteilles",
            valeur: 200000.0,
            nombre: 1.0,
            utilisateurId: 1,
            id: 1
        },
        prixMax:0,
        error:""
    }

    handleChange=(event)=>{
        this.setState({sold:event.target.value});
    }

    handleSubmit=(event)=>{
        this.sendData();
    }

    sendData= async ()=>{
        var url="encherir/rencherir/"+this.props.enchere+"?idUtilisateur="+this.props.utilisateur+"&somme="+this.state.sold;
        let response=await FetchHelper.getDatas(URLHelper.urlgen(url));
        console.log(response);
        if("error" in response){
            console.log(({ erreur: response.error.message}));
            this.setState({
                error:response.error.message
            })
        }
        else{
            window.location.href="/home";
        }
    }

    componentDidMount(){
        this.getEnchere(this.props.enchere);
        this.getPrixMax(this.props.enchere);
    }

    getPrixMax=async (enchere)=>{
        let url="encherir/getMiseMax?id="+enchere;
        let retour=await FetchHelper.getDatas(URLHelper.urlgen(url));
        console.log("prix "+retour.data);
        this.setState({
            prixMax:retour.data
        });
      }

      getEnchere=async(enchere)=>{
        let url="encherir/getEnchere/"+enchere;
        let retour=await FetchHelper.getDatas(URLHelper.urlgen(url));
        console.log(retour.data);
        this.setState({
          //manamboatra an ito rem za zao
            en:retour.data
        });
      }

    render(){
        return(
            <div className="card" id="addCategorieCard">
                    <div className=" card-body row mt-md-5">
                        <div className="col row">
                            <div className=" col-md-6 mb-3  text-center">
                                <img src={logo} width="60%" alt="logo"/>
                            </div>
                            <div  className="col-md-6 mb-2">
                                <div>
                                    <h3 className="text" id="nomLot">{this.state.en.nomLot}</h3>
                                    <p id="desc">{this.state.en.descriptionLot}</p>
                                    <br />
                                </div>
                                <div id="addCategorieForm" className="">
                                    <p>Nombre : {this.state.en.nombre}</p>
                                    <p>Prix actuel : {this.state.prixMax} Ar</p>
                                    <label id="input">
                                        <input type="number" value={this.state.sold} onChange={this.handleChange} min={0} placeholder=" "id="field" />  
                                        <span id="label">Miser</span>  
                                    </label>
                                    <br />
                                    <p id="error">{this.state.error}</p>
                                    <hr />
                                    <button className="btn" onClick={this.handleSubmit} id="btnAdd">Miser</button>
                                </div>
                            </div>
                        </div>    
                    </div>
            </div>
        )
    }
}