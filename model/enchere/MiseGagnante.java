package model.enchere;

import java.util.Date;

import gdao.genericdao.ColumnName;
import model.EnchereEntity;

public class MiseGagnante extends EnchereEntity<MiseGagnante> {
    @ColumnName("miseid")
    String idMise;
    
    public String getIdMise() {
        return idMise;
    }
    public void setIdMise(String idMise) {
        this.idMise = idMise;
    }
    
}
