import axios from "axios";

export const GetAllCateg = async () => {
  
    try {
      const res = await axios.get("/api/categ/allcateg");
      //  console.log(res.data.mesg)
      return res.data.mesg;
    } catch (error) {
      console.log(error);
    }
  };

  export const GetAllFamily = async () => {
  
    try {
      const res = await axios.get("/api/family/allfamilies");
      //  console.log(res.data.mesg)
      return res.data.mesg;
    } catch (error) {
      console.log(error);
    }
  };

  export const GetAllGamme = async () => {
  
    try {
      const res = await axios.get("/api/gamme/allgamme");
      //  console.log(res.data.mesg)
      return res.data.mesg;
    } catch (error) {
      console.log(error);
    }
  };

  export const GetAllBrand = async () => {
  
    try {
      const res = await axios.get("/api/brand/allbrands");
      //  console.log(res.data.mesg)
      return res.data.mesg;
    } catch (error) {
      console.log(error);
    }
  };

// delete ****************************************************************************

  export const RemoveCateg = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/categ/delcateg/${id}` ,config);
    GetAllCateg();
    } catch (error) {
      console.log(error);
    }
  };


  export const RemoveFamily = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/family/delfamily/${id}` ,config);
    GetAllFamily();
    } catch (error) {
      console.log(error);
    }
  };



  export const RemoveGamme = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/gamme/delgamme/${id}` ,config);
    GetAllGamme();
    } catch (error) {
      console.log(error);
    }
  };

  export const RemoveBrand = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/brand/delbrand/${id}` ,config);
    GetAllBrand();
    } catch (error) {
      console.log(error);
    }
  };


  // update *************************************************


  export  const hundelCateg = async (id) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.put(
        `/api/categ/edite/${id}`,
      
        config
      );
    } catch (error) {
      console.log(error);
    }
  };


  export  const hundelFamily = async (id,offrr) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.put(
        `/api/family/edite/${id}`,
        offrr,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };


  export  const hundelGamme = async (id,offrr) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.put(
        `/api/gamme/edite/${id}`,
        offrr,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };


  export  const hundelBrand = async (id,offrr) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.put(
        `/api/brand/edite/${id}`,
        offrr,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };