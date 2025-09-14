import ManCollection from '../../components/main/ManCollection';
import WomanCollection from '../../components/main/WomanCollection';
import Info from '../../components/main/info';
import Searching from '../../components/main/Search';
import NewCollection from '../../components/main/newCollection/NewCollection';
import { useProducts } from '../../components/data/FetchProducts'

export default function Home(){
  const { products } = useProducts();
    return(
        <>
        <Searching/>
        <NewCollection items={products}/>
        <ManCollection items={products}/>
        <WomanCollection items={products}/>
        <Info/>
        </>
    )
}