package model.enchere;

import java.time.Duration;
import java.util.Date;

import gdao.genericdao.ColumnName;
import model.EnchereEntity;

public class Enchere extends EnchereEntity<Enchere>{
    @ColumnName
    String refEnchere;
    @ColumnName
    Date debut;
    @ColumnName
    Duration duree;
    @ColumnName
    Double prixDeMisEnEnchere;
    @ColumnName
    Boolean vita;
    @ColumnName("Lotid")
    Integer idLot;
    @ColumnName
    Double Commission;
    public String getRefEnchere() {
        return refEnchere;
    }
    public void setRefEnchere(String refEnchere) {
        this.refEnchere = refEnchere;
    }
    public Date getDebut() {
        return debut;
    }
    public void setDebut(Date debut) {
        this.debut = debut;
    }
    public Duration getDuree() {
        return duree;
    }
    public void setDuree(Duration duree) {
        this.duree = duree;
    }
    public Double getPrixDeMisEnEnchere() {
        return prixDeMisEnEnchere;
    }
    public void setPrixDeMisEnEnchere(Double prixDeMisEnEnchere) {
        this.prixDeMisEnEnchere = prixDeMisEnEnchere;
    }
    public Boolean getVita() {
        return vita;
    }
    public void setVita(Boolean vita) {
        this.vita = vita;
    }
    public Integer getIdLot() {
        return idLot;
    }
    public void setIdLot(Integer idLot) {
        this.idLot = idLot;
    }
    public Double getCommission() {
        return Commission;
    }
    public void setCommission(Double commission) {
        Commission = commission;
    }
    
}
