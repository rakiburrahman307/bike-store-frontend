import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../ui/card';
import { Skeleton } from '../../ui/skeleton';


interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const bikeData: Product[] = [
  { id: 1, name: 'Mountain Bike', price: '$500', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Road Bike', price: '$700', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Hybrid Bike', price: '$600', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Electric Bike', price: '$1200', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, name: 'City Bike', price: '$450', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Kids Bike', price: '$250', imageUrl: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Folding Bike', price: '$300', imageUrl: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Racing Bike', price: '$900', imageUrl: 'https://via.placeholder.com/150' },
];

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading products (e.g., fetch from API)
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div className="relative my-20 px-5">
      {/* Heading and See More Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Featured Products</div>
        <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-800">
          <Link to="#">See More</Link>
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {loading
          ? // Skeleton loaders while products are loading
            Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="border p-4 rounded-lg">
                <Skeleton className="w-full h-40 mb-4" />
                <Skeleton className="w-3/4 h-6 mb-2" />
                <Skeleton className="w-1/4 h-6" />
              </Card>
            ))
          : bikeData.slice(0, 8).map((product) => (
              <Card key={product.id} className="border p-4 rounded-lg">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4 rounded"
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Products;
