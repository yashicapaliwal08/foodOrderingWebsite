import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { ProductsPreview } from "../../components/ProductsPreview";

const Home=()=>{
    return (
        <div className="bg-red-500">
        <Banner/>
        <ProductsPreview/>
        <About/>
        </div>
    )
}
export default Home;