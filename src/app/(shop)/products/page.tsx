"use server";
import { Products } from '@/components';

export default async function ProductsPage() {

  return (
    <>
      <div>
        <h1>Data form Database</h1>
      </div>
      <div>
        <h1>Data form Graphql Endpoint</h1>
        <Products></Products>
      </div>
    </>
  );
}
