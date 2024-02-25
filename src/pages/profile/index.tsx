import { useSession } from "next-auth/react";

const ProductPage = () => {
  const { data }: any = useSession();
  return (
    <div>
      <h1>Profile</h1>
      <h2>{data?.user.username}</h2>
    </div>
  );
};

export default ProductPage;
