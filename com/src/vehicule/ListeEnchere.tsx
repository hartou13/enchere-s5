import React from 'react';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonToolbar, useIonViewWillEnter } from '@ionic/react';

import { refresh } from 'ionicons/icons';
import { EnchereLotStatut, fetchEnchere } from '../data/enchere_lot_statut';
import EnchereItem from './EnchereItem';
import { ErrInfo } from '../App';

type Props = {

}
type State = {
  en: EnchereLotStatut[];
  error: ErrInfo | null;
}


class ListeEnchere extends React.Component<Props, State>{
 
  state: State = {
    en: [],
    error: null
  }
  check(): boolean {
    return this.state.error == null;
  }
  async componentDidMount(): Promise<void> {

    let retour = await fetchEnchere();
    // console.log(retour);
    if (retour.info !== undefined) {
      console.log(retour.info);
      this.setState({ error: retour.info });
    } else {
      let data: EnchereLotStatut[] = retour;
      console.log(data);
      this.setState({ en: data });

    }

  }
  refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
      this.componentDidMount();
    }, 3000);
  };
  render() {

    return (
      <IonPage id="view-message-page">
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text="List Enchere" defaultHref="/home"></IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonRefresher slot="fixed" onIonRefresh={this.refresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          {this.check() ? (
            <IonList>
              {

                this.state.en.map(v => <EnchereItem key={v.id} enchere={v} />)
              }
            </IonList>
          ) : (
            <div><h1>{this.state.error?.code + " " + this.state.error?.message}</h1> </div>
          )}
        </IonContent>

      </IonPage>
    )
  }

}
export default ListeEnchere;