import axios from "axios";


export const GetAllBlogs = async () => {
  
    try {
      const res = await axios.get("/api/blog/allblogs");
      //  console.log(res.data.offers)
      return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };

  export  const hundelUpdate = async (id,offrr) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.put(
        `/api/blog/edite/${id}`,
        offrr,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };


  export const Removeoffer = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/blog/delblog/${id}` ,config);

    } catch (error) {
      console.log(error);
    }
  };


  export const Getone = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const result = await axios.get(`/api/blog/getone/${id}`,config);
      //  console.log(res.data.offers)
      // console.log(result.data.ofer)
      return result.data.ofer;
      
    } catch (error) {
      console.log(error);
    }
  };