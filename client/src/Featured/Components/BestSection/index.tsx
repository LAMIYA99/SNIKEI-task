import HeadingText from "../../Common/HeadingText"
import ProductCard from "../../Common/ProductCards"

const BestSection = () => {
  return (
<section className="container mx-auto max-w-[1200px] py-[13px]">
    <HeadingText title="Best Sellers"/>
    <div>
        <ProductCard/>
    </div>
</section>
  )
}

export default BestSection