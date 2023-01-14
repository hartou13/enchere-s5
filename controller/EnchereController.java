package controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;

/**
 * EnchereController
 */import org.springframework.web.bind.annotation.*;

import com.google.gson.Gson;

import gdao.genericdao.GenericDAO;
import gdao.genericdao.exception.DatabaseConfException;
import model.enchere.V_enchere_tokn_vitaina;
import responseHandler.Error;
import responseHandler.Failure;
import responseHandler.Success;

@RestController
@RequestMapping("/enchere")
@CrossOrigin(origins={"http://localhost:3001/","http://localhost:3000/","http://localhost:80/kilometrage/*"})
public class EnchereController {
    @GetMapping("/toEnd")
    public String getToknHoVita(){
        Gson gson = new Gson();
        HashMap<String , Object> res=new HashMap<>();
        try {
            Connection con=GenericDAO.getConPost();
            res.put("liste", new V_enchere_tokn_vitaina().getAll(con));
            con.close();
            System.gc();
        } catch (ClassNotFoundException | IOException | SQLException | DatabaseConfException e) {
            e.printStackTrace();

            return gson.toJson(new Failure(new Error(500, "Error getting encheres")));
        }
        return gson.toJson(new Success(res));
    }
    
}