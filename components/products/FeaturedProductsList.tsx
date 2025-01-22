import { fetchFeaturedProducts } from '@/utils/actions';
import EmptyList from '../global/EmptyList';
import ProductsGrid from './ProductsGrid';

async function FeaturedProductsList() {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;
  return <ProductsGrid products={products} />;
}

export default FeaturedProductsList;
