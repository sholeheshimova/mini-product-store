import { useEffect, useState } from "react";
import { getProductsById } from "../services/productsApi";


function useProductById(id) {
      
      const [product, setProduct] = useState(null);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
           async function getDataById() {
              try {
                const data = await getProductsById(id)
                setProduct(data)
              } catch (error) {
                console.log(error);
                
              }finally{
                setLoading(false)
              }
           }
    
           getDataById()
      }, [id]);

      return {product,loading}
    
}

export default useProductById