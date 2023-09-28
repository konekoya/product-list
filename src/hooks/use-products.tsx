'use client';

import { useEffect, useState } from 'react';

export type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
};

export function useProducts(): [Product[], boolean] {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const API_ROOT = 'https://fakerapi.it/api/v1';
  const endpoint = 'products?_quantity=8';

  useEffect(() => {
    fetch(`${API_ROOT}/${endpoint}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return [data, isLoading];
}
