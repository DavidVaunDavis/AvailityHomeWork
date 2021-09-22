package ImportCSV;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class StartHere {
    public static void main(String[] args) {

        HashMap<String, ArrayList<Enrollee>> newFileHash = new HashMap<String, ArrayList<Enrollee>>();
        try {
            File afile = new File("JavaStuff/ImportCSV/CSVTest3.csv");
            BufferedReader br = new BufferedReader(new FileReader(afile));
            for(String i : br.lines().toList()) {
                String[] columnList = i.split(",");
                ArrayList<String> columnArray = new ArrayList<String>();
                columnArray.addAll(Arrays.asList(columnList));
                int aVersion = Integer.parseInt(columnArray.get(2));
                Enrollee anEnrolee = new Enrollee(columnArray.get(0), columnArray.get(1), aVersion, columnArray.get(3));
                anEnrolee.addToHashmap(newFileHash);
                System.out.println(anEnrolee.DisplayName());
            }
            for(String aKey : newFileHash.keySet()){
                new CompanyClassFile(newFileHash.get(aKey)) ;
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
