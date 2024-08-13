import Details from "../Shop/components/Details";
import ShopBanner from "../Shop/components/ShopBanner";
import ProductDetailsCenter from "./components/ProductDetailsCenter";
import RelatedProduct from "./components/RelatedProduct";

const ProductDetails = () => {
  return (
    <div>
      <div>
        <ShopBanner />
      </div>
      <div className="mt-10 max-w-7xl mx-auto w-full">
        <Details />
      </div>
      <div className="mt-14 max-w-7xl mx-auto w-full">
        <ProductDetailsCenter />
      </div>
      <div className="mt-14 max-w-7xl mx-auto w-full">
        <RelatedProduct />
      </div>
    </div>
  );
};

export default ProductDetails;
