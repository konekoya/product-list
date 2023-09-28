import { Product } from '@/hooks/use-products';
import Image from 'next/image';
import { PlusIcon } from '../components';
import LoadingSkeleton from './loading-skeleton';

interface ProductListProps {
  products: Product[];
  isFetching: boolean;
}

const ProductList = (props: ProductListProps) => {
  const getRandomPrice = (min: number, max: number) => {
    const precision = 10;
    const random =
      Math.random() * (max * precision - min * precision) + min * precision;
    const price = Math.floor(random) / (1 * precision);
    return price.toFixed(3);
  };

  const getRandomDonut = () => {
    const names = ['avocado', 'dark', 'unicorn', 'vanilla'];
    return `donut-${names[Math.floor(Math.random() * names.length)]}.png`;
  };

  if (props.isFetching) return <LoadingSkeleton />;

  return (
    <div className="flex flex-wrap gap-7">
      {props.products.map((product: Product) => {
        return (
          <div
            key={`${product.id}`}
            className="max-w-[144px] xs:max-w-[calc(50%-theme(gap.7))] sm:max-w-[calc(33%-theme(gap.7))] md:max-w-[calc(25%-theme(gap.7))] gap-4 overflow-hidden"
          >
            <div className="p-6 h-full rounded-xl bg-dark-black flex flex-col">
              <div className="w-full min-h-[120px] max-h-[160px]">
                <Image
                  className="mb-6 mx-auto"
                  width={95}
                  height={77}
                  src={`/images/${getRandomDonut()}`}
                  alt="Donut"
                />
              </div>
              <h3 className="text-sm whitespace-nowrap overflow-hidden truncate mb-2 font-black">
                {product.name}
              </h3>
              <p className="text-xs text-gray-light whitespace-nowrap md:whitespace-normal overflow-hidden md:overflow-visible truncate mb-4">
                {product.description}
              </p>

              <div className="flex mt-auto">
                <span className="text-sm font-black">
                  {
                    // The price from the API is too big for donuts...
                    getRandomPrice(1, 10)
                  }
                </span>
                <a href="#" className="ml-auto flex items-center">
                  <PlusIcon />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
