"use client";

import { useState } from "react";
import ProductList from "@/components/products/ProductList";

/** Search + monograph product list for one specialty page. */
export default function SpecialtyProducts({ name, products }) {
  const [query, setQuery] = useState("");
  const n = products.length;
  return (
    <ProductList
      products={products}
      query={query}
      onQuery={setQuery}
      resetKey={name}
      title={`${name} products`}
      intro={`${n} ${n === 1 ? "product" : "products"} in our range for ${name}, A–Z by brand.`}
    />
  );
}
