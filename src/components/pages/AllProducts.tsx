import { useState } from "react";
import { useGetAllProductsQuery } from "../../redux/feature/Products/productApi";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { ChevronLeft, ChevronRight, Star, Search } from "lucide-react";
import { TProduct } from "../interface";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

const AllProducts = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("id");
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const { data, isLoading } = useGetAllProductsQuery([
    { name: "page", value: page },
    { name: "sort", value: sort },
    { name: "searchTerm", value: searchTerm },
    { name: "limit", value: limit },
  ]);

  const products = Array.isArray(data?.data) ? data?.data : [];
  const totalPages = data?.meta?.totalPage || 1;
  console.log(data?.meta);
  return (
    <div className='relative my-10 px-5'>
      {/* Search & Sorting */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6'>
        <h2 className='text-lg font-semibold'>All Products</h2>

        <div className='flex items-center gap-3 w-full md:w-auto'>
          <div className='relative w-full md:w-64'>
            <Search className='absolute left-3 top-3 text-gray-400' size={18} />
            <Input
              type='text'
              placeholder='Search Products...'
              className='pl-10 w-full'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select onValueChange={setSort} value={sort}>
            <SelectTrigger className='w-full md:w-40'>
              <SelectValue placeholder='Sort By' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='id'>Default</SelectItem>
              <SelectItem value='price'>Price</SelectItem>
              <SelectItem value='rating'>Rating</SelectItem>
              <SelectItem value='name'>Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className='border p-4 rounded-lg animate-pulse'>
                <Skeleton className='w-full h-40 mb-4' />
                <Skeleton className='w-3/4 h-6 mb-2' />
                <Skeleton className='w-1/4 h-6' />
              </Card>
            ))
          : products?.map((product: TProduct) => (
              <Card
                key={product._id}
                className='border p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <CardContent className='flex flex-col items-center relative'>
                  <img
                    src={product.image}
                    alt={product.name}
                    loading='lazy'
                    className={cn(
                      "w-full h-40 object-cover rounded-md transition-opacity duration-500",
                      loadedImages[product._id] ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() =>
                      setLoadedImages((prev) => ({
                        ...prev,
                        [product._id]: true,
                      }))
                    }
                  />
                  {!loadedImages[product._id] && (
                    <div className='absolute inset-0 bg-gray-200 animate-pulse rounded-md'></div>
                  )}
                </CardContent>
                <CardHeader className='text-center'>
                  <CardTitle className='text-lg font-medium truncate'>
                    {product.name}
                  </CardTitle>
                  <CardDescription className='text-gray-500 text-sm'>
                    {product.brand} - {product.model}
                  </CardDescription>
                </CardHeader>
                <CardFooter className='flex flex-col gap-3'>
                  <div className='flex justify-between items-center w-full'>
                    <span className='text-xl font-semibold'>
                      ${product.price.toFixed(2)}
                    </span>
                    <div className='flex items-center gap-1'>
                      <Star size={16} fill='currentColor' />
                      <span className='text-sm font-medium'>
                        {product.rating ?? "N/A"}
                      </span>
                    </div>
                  </div>
                  <Button variant='outline' className='w-full'>
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
      </div>
      {/* Pagination */}

      {/* Limit Selector + Pagination */}
      <div className='flex justify-between items-center mt-6 gap-4'>
        {/* Limit Dropdown */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium'>Show:</span>
          <Select
            onValueChange={(value) => setLimit(Number(value))}
            value={String(limit)}
          >
            <SelectTrigger className='w-20'>
              <SelectValue placeholder='Limit' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='4'>4</SelectItem>
              <SelectItem value='8'>8</SelectItem>
              <SelectItem value='10'>10</SelectItem>
              <SelectItem value='20'>20</SelectItem>
              <SelectItem value='50'>50</SelectItem>
              <SelectItem value='100'>100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Pagination */}
        <div className='flex items-center gap-2'>
          <Button
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            variant='outline'
          >
            <ChevronLeft size={18} /> Prev
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (pageNum) =>
                pageNum === 1 ||
                pageNum === totalPages ||
                Math.abs(pageNum - page) <= 2
            )
            .map((pageNum, index, arr) => {
              const nextPageNum = arr[index + 1];
              return (
                <div key={pageNum} className='flex items-center'>
                  <Button
                    variant={page === pageNum ? "default" : "outline"}
                    onClick={() => setPage(pageNum)}
                    className={page === pageNum ? "font-bold" : ""}
                  >
                    {pageNum}
                  </Button>
                  {nextPageNum && nextPageNum !== pageNum + 1 && (
                    <span>...</span>
                  )}
                </div>
              );
            })}

          <Button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            variant='outline'
          >
            Next <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
