import { axiosInstance } from "../../../config/axiosInstance";
import { setProduct } from "../state/ProductSlice";

export let getProducts=()=>{
    let fetchdata=async ()=>{
     try {
        let res=await axiosInstance.get('/products')
        console.log(res);
        return res.data.products 
     } catch (error) {
        console.log("Error in calling products api...");
        return []
     }
}
return fetchdata()
}