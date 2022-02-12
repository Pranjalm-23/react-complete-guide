import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <section>
      <h1>Product Details</h1>
      <p>{useParams.productId}</p>
    </section>
  );
};

export default ProductDetail;
