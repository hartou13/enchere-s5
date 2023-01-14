package model.gestionArgent;

import gdao.genericdao.ColumnName;
import model.EnchereEntity;

public class V_vola_mivoaka extends EnchereEntity<V_vola_mivoaka> {
    @ColumnName
    String refMouvement;
    @ColumnName
    Double sommeSortant;
    @ColumnName
    String motif;
    @ColumnName
    String idUtilisateur;
    @ColumnName
    String idMiseGagnante;
    public String getRefMouvement() {
        return refMouvement;
    }
    public void setRefMouvement(String refMouvement) {
        this.refMouvement = refMouvement;
    }
    public Double getSommeSortant() {
        return sommeSortant;
    }
    public void setSommeSortant(Double sommeSortant) {
        this.sommeSortant = sommeSortant;
    }
    public String getMotif() {
        return motif;
    }
    public void setMotif(String motif) {
        this.motif = motif;
    }
    public String getIdUtilisateur() {
        return idUtilisateur;
    }
    public void setIdUtilisateur(String idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }
    public String getIdMiseGagnante() {
        return idMiseGagnante;
    }
    public void setIdMiseGagnante(String idMiseGagnante) {
        this.idMiseGagnante = idMiseGagnante;
    }
    
}
