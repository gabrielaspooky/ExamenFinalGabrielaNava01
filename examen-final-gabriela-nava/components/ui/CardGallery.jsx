// "use client";
// import React from "react";
// import { MoveRight } from "lucide-react";
// import Link from "next/link";
// import ProductFetcher from "../api/products/ProductFetcher";
// import Cards from "../../../components/ui/CardProduct";

// const ProductCards = () => (
//   <div className="min-h-[603.39px] flex flex-col justify-center items-center gap-10 bg-white">
//     <h2 className="text-2xl font-medium text-[#2A5B45] leading-7 w-[120px] p-10">Novedades</h2>
//     <div className="flex max-w-[1200px] min-h-[391.39px] gap-6 justify-between items-center">
//       <ProductFetcher>
//         {({ products }) => (
       
//           <Cards products={Array.isArray(products) ? products.slice(0, 4) : []} />
//         )}
//       </ProductFetcher>
//     </div>
//     <Link className="py-8 flex justify-between items-center gap-4 text-sm font-semibold text-black" href="/shop">
//       Ver todos
//       <MoveRight className="h-6 w-6" />
//     </Link>
//   </div>
// );

// export default ProductCards;