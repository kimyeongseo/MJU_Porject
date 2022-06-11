import axios from "axios";

const covid19tracker = axios.create({
    baseURL: "https://api.covid19tracker.ca/summary"
  })
  
  export const getCovidData =  async () => {
      try{
        const data = await covid19tracker.get("");
        console.log("[SUCCESS] GET data");
        return data;
      }catch (e) {
        console.log("[FAIL] GET data");
        return null;
    }
  }