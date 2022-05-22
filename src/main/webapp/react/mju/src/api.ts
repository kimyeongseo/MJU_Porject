import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000,
});

export const getItemData = async () => {
  try {
      const data = await instance.get("/items");
      console.log("[SUCCESS] GET data");
      return data.data.data.item[0];
  } catch (e) {
      console.log("[FAIL] GET data");
      return null;
  }
};