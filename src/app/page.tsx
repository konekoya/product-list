'use client';
import { Header } from '@/app/components';
import { useProducts } from '../hooks';
import ProductList from './product-list';

export default function Home() {
  const [products, isFetching] = useProducts();
  return (
    <div className="p-7 min-w-[375px] xs:max-w-[96%] lg:max-w-[1024px] mx-auto">
      <Header />
      <main>
        <ProductList products={products} isFetching={isFetching} />
      </main>
    </div>
  );
}
