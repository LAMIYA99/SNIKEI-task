import { Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="card">
        <div>
          <img
            src="https://cdn.prod.website-files.com/689251469afed457b38b7028/68a0368f03f08bf146a04fde_eclipse.png"
            alt=""
          />
        </div>
        <div>
          <div className="flex justify-betweenls">
            <h2>Eclipse Sneakers</h2>
            <p className="flex"><Star size={16} fill=""/>(4.3)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
