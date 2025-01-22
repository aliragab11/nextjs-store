import { Suspense } from 'react';
import SectionTitle from '../global/SectionTitle';
import FeaturedProductsList from '../products/FeaturedProductsList';
import LoadingContainer from '../global/LoadingContainer';

function FeaturedProducts() {
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProductsList />
      </Suspense>
    </section>
  );
}

export default FeaturedProducts;
