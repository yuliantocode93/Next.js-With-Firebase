import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();

  // client-side
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <div>
      {/*client-side*/}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}
      {/*server-side & static side*/}
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

//* dipanggil setiap melakukan request
export async function getServerSideProps({ params }: { params: { product: string } }) {
  //* fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`);
  const response = await res.json();
  return { props: { product: response.data } };
}

// export async function getStaticPaths() {
//   try {
//     const res = await fetch("http://localhost:3000/api/product");
//     const response = await res.json();
//     const paths = response.data.map((product: ProductType) => ({
//       params: { product: product.id },
//     }));
//     return { paths, fallback: false };
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//     return { props: { product: [] }, notFound: true };
//   }
// }

// export async function getStaticProps(params: { params: { product: string } }) {
//   try {
//     const res = await fetch(`http://localhost:3000/api/product/${params.params.product}`);
//     const response = await res.json();
//     return { props: { product: response.data } };
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//     return { props: { product: [] }, notFound: true };
//   }
// }

// import { useRouter } from "next/router";

// const DetailProductPage = () => {
//   const { query } = useRouter();

//   return (
//     <div>
//       <h1>Detail Product</h1>
//       <p>Product: {query.product} </p>
//     </div>
//   );
// };

// export default DetailProductPage;
