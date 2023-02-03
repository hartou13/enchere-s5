import { Component } from 'react';
import FetchHelper from '../Helper/FetchHelper';
import URLHelper from '../Helper/URLHelper';
import logo from './default.png';
import './demande.css';
export default class DemandeRecharge extends Component{

    state={
        sold:0,
    }

    handleChange=(event)=>{
        this.setState({sold:event.target.value});
    }

    handleSubmit=(event)=>{
        this.sendData();
    }

    sendData= async ()=>{
        var url="dm/demande/"+this.props.idUtilisateur+"?sold="+this.state.sold;
        let response=await FetchHelper.getDatas(URLHelper.urlgen(url));
        console.log(response);
        if("error" in response){
            console.log(({ erreur: response.error.message}))
        }
        else{

        }
    }

    render(){
        return (
            <div className="card" id="addCategorieCard">
                    <div className=" card-body row mt-md-5">
                        <div className="col">
                            <div className="mb-3 hidden-md  text-center">
                                <img src={logo} width="30%" alt="logo"/>
                            </div>
                            <div  className=" mb-2">
                                <div>
                                    <h3 className="text-center" id="addCategorieTitle">Demande de recharge</h3>
                                    <br />
                                </div>
                                <div id="addCategorieForm" className="container  d-flex flex-column justify-content-center align-items-center">
                                    <label id="input">
                                        <input type="number" value={this.state.sold} onChange={this.handleChange} min={0} placeholder=" "id="field" />  
                                        <span id="label">Sold</span>  
                                    </label>
                                    <hr />
                                    <button className="btn" onClick={this.handleSubmit} id="btnAdd">Ajouter</button>
                                </div>
                            </div>
                        </div>    
                    </div>
            </div>
    
        );
    }
}