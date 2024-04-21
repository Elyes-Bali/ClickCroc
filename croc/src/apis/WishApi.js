import axios from "axios";

export const Removeoffer = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/wish/delwish/${id}` ,config);

    } catch (error) {
      console.log(error);
    }
  };

  export const GetAllWishes = async () => {
  
    try {
      const res = await axios.get("/api/wish/allwish");
      
      return res.data.wish;
    } catch (error) {
      console.log(error);
    }
  };