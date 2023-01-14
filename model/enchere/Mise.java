package model.enchere;

import java.util.Date;

import gdao.genericdao.ColumnName;
import model.EnchereEntity;

public class Mise extends EnchereEntity<Mise>{
    @ColumnName
    String refMise;
    @ColumnName
    Double somme;
    @ColumnName
    Date daty;
    @ColumnName("utilisateurid")
    String idUtilisateur;
    @ColumnName("enchereid")
    String idEnchere;
    public String getRefMise() {
        return refMise;
    }
    public void setRefMise(String refMise) {
        this.refMise = refMise;
    }
    public Double getSomme() {
        return somme;
    }
    public void setSomme(Double somme) {
        this.somme = somme;
    }
    public Date getDaty() {
        return daty;
    }
    public void setDaty(Date daty) {
        this.daty = daty;
    }
    public String getIdUtilisateur() {
        return idUtilisateur;
    }
    public void setIdUtilisateur(String idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }
    public String getIdEnchere() {
        return idEnchere;
    }
    public void setIdEnchere(String idEnchere) {
        this.idEnchere = idEnchere;
    }
    

}
