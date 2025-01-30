import { useState, useEffect, useMemo } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useGetAllProductsQuery } from "../../../redux/feature/Products/productApi";
import { Skeleton } from "../../ui/skeleton";
import { TProduct } from "../../interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  const allProducts = useMemo(
    () => (Array.isArray(data?.data?.data) ? data.data.data : []),
    [data]
  );

  const [visibleProducts, setVisibleProducts] = useState<TProduct[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading && allProducts.length > 0) {
      setTimeout(() => {
        setVisibleProducts(allProducts.slice(0, 8));
        setLoaded(true);
      }, 500);
    }
  }, [isLoading, allProducts]);

  return (
    <div className='relative my-20 px-5'>
      {/* Heading */}
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-lg font-semibold'>Featured Products</h2>
        <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-800">
          <Link to="/products">See More</Link>
        </Button>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
        {isLoading || !loaded
          ? Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className='border p-4 rounded-lg animate-pulse'>
                <Skeleton className='w-full h-40 mb-4' />
                <Skeleton className='w-3/4 h-6 mb-2' />
                <Skeleton className='w-1/4 h-6' />
              </Card>
            ))
          : visibleProducts.map((product, index) => (
              <ProductCard key={product._id} product={product} index={index} />
            ))}
      </div>
    </div>
  );
};

const ProductCard = ({
  product,
  index,
}: {
  product: TProduct;
  index: number;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      className='border p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fade-in'
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className='flex flex-col items-center'>
        {/* Image with Pulse Blur Effect */}
        <div className='relative w-full h-40 overflow-hidden'>
          {!imageLoaded && (
            <div className='absolute inset-0 bg-gray-200 animate-pulse-blur rounded-md'></div>
          )}
          <img
            src={product?.image || "/placeholder.jpg"}
            alt={product?.name}
            loading='lazy'
            className={`w-full h-40 object-cover rounded-md transition-all duration-500 ${
              imageLoaded
                ? "opacity-100 blur-0"
                : "opacity-50 blur-lg animate-pulse-blur"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </CardContent>

      <CardHeader className='text-center'>
        <CardTitle className='text-lg font-medium truncate'>
          {product?.name}
        </CardTitle>
        <CardDescription className='text-gray-500 text-sm'>
          {product?.brand} - {product?.model}
        </CardDescription>
      </CardHeader>

      <CardFooter className='flex flex-col gap-3'>
        {/* Price & Rating Section */}
        <div className='flex justify-between items-center w-full'>
          <span className='text-xl font-semibold'>
            ${product?.price.toFixed(2)}
          </span>
          <div className='flex items-center gap-1'>
            <Star size={16} fill='currentColor' />
            <span className='text-sm font-medium'>
              {product?.rating ?? "N/A"}
            </span>
          </div>
        </div>
        <Button
          variant='outline'
          className='w-full flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all'
        >
          <ShoppingCart size={18} />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Products;
