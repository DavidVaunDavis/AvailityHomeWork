package ImportCSV;

import java.util.ArrayList;
import java.util.HashMap;

public class Enrollee {
    String _userID;
    String _enroleeName;
    Integer _version;
    String _company;



    public Enrollee(String aUser, String aName, Integer aVersion, String  aCompany ){
        this._userID = aUser;
        this._enroleeName = aName;
        this._version = aVersion;
        this._company = aCompany;
    }

    public String getUserID() {
        return this._userID;
    }

    public String DisplayName(){
        return this._company + ", "  + this._enroleeName +  ", " + this._userID +  ", " + this._version ;
    }

    public void addToHashmap(HashMap<String, ArrayList<Enrollee>> enroleeHash ){
        ArrayList<Enrollee> companyArray = enroleeHash.get(this._company);
        if(companyArray == null){
            companyArray = new  ArrayList<Enrollee>();
            companyArray.add(this);
        }else{
            companyArray.add(this);
        }
        enroleeHash.put(this._company,companyArray);
    }

}
