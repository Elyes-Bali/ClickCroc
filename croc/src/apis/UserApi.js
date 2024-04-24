import axios from "axios";

export const CurrentUser = async () => {
    let opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    try {
      const res = await axios.get("/api/user/auth", opts);
       
      return res;
    } catch (error) {
      console.log(error);
    }
  };



  export  const hundelUpdate = async (id,user) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.put(
        `/api/user/update/${id}`,
        user,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  export const GetAllUsers = async () => {
  
    try {
      const res = await axios.get("/api/user/allusers");
       
      return res.data.allusers;
    } catch (error) {
      console.log(error);
    }
  };

  
  export const ApplyOff = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/apply/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };


  export const GetAllSel = async () => {
  
    try {
      const res = await axios.get("/api/user/allsel");
       
      return res.data.devs;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const GetAllClt = async () => {
    
    try {
      const res = await axios.get("/api/user/allclt");
       
      return res.data.clts;
    } catch (error) {
      console.log(error);
    }
  };

    
  export const GetAllManu = async () => {
    
    try {
      const res = await axios.get("/api/user/allman");
       
      return res.data.clts;
    } catch (error) {
      console.log(error);
    }
  };