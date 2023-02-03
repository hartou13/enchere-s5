import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { EnchereLotStatut, formatDuree } from '../data/enchere_lot_statut';
import FetchHelper from '../Helper/FetchHelper';
import URLHelper from '../Helper/URLHelper';

type Props = {
  enchere: number,
};

var mise="0";

class Mise extends React.Component<Props>{

    

    state = {
      en: {
          id:2,
          reflot: "LO002",
          nomlot: "Ford Fiesta",
          descriptionlot: "Bon‚tat",
          status: "going on",
          refEnchere: "EN002",
      },
      utilisateur:1,
      prixMax:0,
    }


    handleSubmit=()=>{
      this.sendData();
    }

    sendData= async ()=>{
        var url="encherir/rencherir/"+this.props.enchere+"?sold="+mise;
        let response=await FetchHelper.getData(URLHelper.urlgen(url));
        console.log(response);
        if("error" in response){
            console.log(({ erreur: response.error.message}))
        }
        else{
          
        }
    }

    getPrixMax=async ()=>{
      let url="encherir/getMiseMax/"+this.state.en.id
      let retour=await FetchHelper.getData(URLHelper.urlgen(url));
      this.setState({
        prixMax:retour.data.data
      });
    }
    
    getEnchere=async()=>{
      let url="encherir/getEnchere/"+this.state.en.id
      let retour=await FetchHelper.getData(URLHelper.urlgen(url));
      this.setState({
        //manamboatra an ito rem za zao
      });
    }
    

    componentDidMount():void{
      
    }
  
  render(){
    return (
      <IonPage id="view-message-page">
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start">     
              <IonBackButton text={"Mise"} defaultHref="/home">Mise</IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
          
        <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{this.state.en.nomlot}</IonCardTitle>
            <IonCardSubtitle>{this.state.en.descriptionlot}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
              <IonLabel>
                <p> <b>Prix maintenant :</b>  {this.state.prixMax}</p> 
              </IonLabel>
              <br />
              <IonLabel>
                <div>
                  <IonLabel position='floating'>Mise :</IonLabel>
                  <IonInput type='number' onIonChange={(e) => mise=e.detail.value!}/>
                  <br />
                  <IonButton onClick={this.handleSubmit}>Miser</IonButton>
                </div>
              </IonLabel>
          </IonCardContent>
        </IonCard>
        </IonContent>
      </IonPage>
    )
  } 
}

export default Mise;
