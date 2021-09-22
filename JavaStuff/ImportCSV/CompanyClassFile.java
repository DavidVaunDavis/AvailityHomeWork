package ImportCSV;

import java.io.*;
import java.util.*;

public class CompanyClassFile {
    ArrayList<Enrollee> _enrollees;
    String _company;


    public CompanyClassFile(ArrayList<Enrollee> enrollees){
        _enrollees = enrollees;
        _company = enrollees.get(0)._company;
        removeDuplicates();
        _enrollees.sort((o1, o2) -> o1._enroleeName.compareTo(o2._enroleeName));
        createFile();
    }

    public void createFile() {
        FileWriter aWriter = null;
        try {
            aWriter = new FileWriter("JavaStuff/ImportCSV/output/" + _company + ".csv");

            for(Enrollee anEnrollee : _enrollees){
                aWriter.write(anEnrollee.DisplayName());
                aWriter.write("\n");
            }
            aWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void removeDuplicates() {
        ArrayList<Enrollee> tempArrays = new ArrayList<Enrollee>();
        HashMap<String,Enrollee>  idMap = new HashMap<String,Enrollee>();
        for(String anID : allIDs()) {
            for (Enrollee anEnrollee : _enrollees) {
                Enrollee IDEnrolee = idMap.get(anEnrollee._userID);
                if(IDEnrolee == null){
                    idMap.put(anEnrollee._userID,anEnrollee);
                }else{
                    if(anEnrollee._version > IDEnrolee._version){
                        idMap.put(anEnrollee._userID,anEnrollee);
                    }
                }
                _enrollees = new ArrayList<Enrollee>();
                _enrollees.addAll(idMap.values());
            }
        }
    }

    public Set<String> allIDs(){
        Set<String> idSet = new HashSet<String>();
        for (Enrollee anEnrollee : _enrollees) {
            idSet.add(anEnrollee._userID);
        }


        return idSet;

    }




}
