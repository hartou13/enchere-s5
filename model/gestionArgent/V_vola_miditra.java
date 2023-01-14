package model.gestionArgent;

import gdao.genericdao.ColumnName;
import model.EnchereEntity;

/**
 * V_vola_miditra
 */
public class V_vola_miditra extends EnchereEntity<V_vola_miditra> {
    @ColumnName
    String refMouvement;
    @ColumnName
    Double sommeEntrant;
    @ColumnName
    String motif;
    
    @ColumnName("demandeRechargeid")
    String idDemandeRecharge;
    public String getRefMouvement() {
        return refMouvement;
    }
    public void setRefMouvement(String refMouvement) {
        this.refMouvement = refMouvement;
    }
    public Double getSommeEntrant() {
        return sommeEntrant;
    }
    public void setSommeEntrant(Double sommeEntrant) {
        this.sommeEntrant = sommeEntrant;
    }
    public String getMotif() {
        return motif;
    }
    public void setMotif(String motif) {
        this.motif = motif;
    }
    
    public String getIdDemandeRecharge() {
        return idDemandeRecharge;
    }
    public void setIdDemandeRecharge(String idDemandeRecharge) {
        this.idDemandeRecharge = idDemandeRecharge;
    }
    
    
}