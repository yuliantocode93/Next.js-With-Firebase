import ProductView from "@/views/Product";
import { ProductType } from "../../types/product.type";

const productPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default productPage;

//* dipanggil setiap melakukan request
export async function getServerSideProps() {
  //* fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product}`);
  const response = await res.json();
  return { props: { products: response.data } };
}
