
import Counter from "@/components/Counter/Counter"
import ProductList from "@/components/ProductList/ProductList"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Home new",
    description: "Shop page",
    keywords: ["Shop", "Shoping"]
}


const Home = () => {
    return (
        <div className="p-20">
            <ProductList />
            <Counter />
        </div>
    )
}

export default Home