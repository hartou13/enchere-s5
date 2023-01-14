package model.gestionArgent;

import gdao.genericdao.ColumnName;

public class MouvementArgent {
    @ColumnName
    String refMouvement;
    @ColumnName
    String motif;
    @ColumnName("demandeRechargeid")
    String idDemandeRecharge;
    @ColumnName("miseGagnanteid")
    String idMiseGagnante;
    
    public String getRefMouvement() {
        return refMouvement;
    }
    public void setRefMouvement(String refMouvement) {
        this.refMouvement = refMouvement;
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
    public String getIdMiseGagnante() {
        return idMiseGagnante;
    }
    public void setIdMiseGagnante(String idMiseGagnante) {
        this.idMiseGagnante = idMiseGagnante;
    }
    
}
