import { Outlet , Navigate, useLocation} from "react-router-dom";

      
    
const Cltroute = () =>{
    const role = localStorage.getItem("isPatient")
       
  return role ? <Outlet /> : <Navigate to ="/" />
  };
export default Cltroute;