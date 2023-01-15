package model.gestionArgent;

import gdao.genericdao.ColumnName;
import model.utilisateur.Utilisateur;

public class V_solde_user extends Utilisateur{
    @ColumnName
    Double solde;

    public Double getSolde() {
        return solde;
    }

    public void setSolde(Double solde) {
        this.solde = solde;
    }
    
}
