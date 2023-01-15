package controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import gdao.genericdao.GenericDAO;
import gdao.genericdao.exception.DatabaseConfException;
import model.gestionArgent.V_solde_user;
import responseHandler.Error;
import responseHandler.*;

@RestController
@RequestMapping("/solde")
@CrossOrigin(origins={"http://localhost:3001/","http://localhost:3000/","http://localhost:80/kilometrage/*"})

public class SoldeController {
    @GetMapping()
    public String getSolde(){
        Gson gson = new Gson();
        HashMap<String , Object> res=new HashMap<>();
        try {
            Connection con=GenericDAO.getConPost();
            res.put("liste", new V_solde_user().getAll(con));
            con.close();
            System.gc();
        } catch (ClassNotFoundException | IOException | SQLException | DatabaseConfException e) {
            e.printStackTrace();

            return gson.toJson(new Failure(new Error(500, "Error getting history")));
        }
        return gson.toJson(new Success(res));
    }
}
