package model.enchere;

import java.util.Date;

import gdao.genericdao.ColumnName;
import model.EnchereEntity;

public class MiseGagnante extends EnchereEntity<MiseGagnante> {
    @ColumnName
    Date daty;
    @ColumnName("miseid")
    String idMise;
    public Date getDaty() {
        return daty;
    }
    public void setDaty(Date daty) {
        this.daty = daty;
    }
    public String getIdMise() {
        return idMise;
    }
    public void setIdMise(String idMise) {
        this.idMise = idMise;
    }
    
}
