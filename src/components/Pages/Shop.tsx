import { useProducts } from '../../components/data/FetchProducts'
import Catalog from '../main/Catalog/Catalog';

export default function Shop(){
  const { products } = useProducts();
    return(
        <>
            <Catalog items = {products}/>
        </>
    )
}