import { Button } from '@/components/ui/button';
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">HomePage</h1>
      <Button variant="default" size="lg" className="capitalize m-8">
        Click me
      </Button>
      <Button asChild>
        <Link href="/about">about</Link>
      </Button>
    </div>
  );
}
export default HomePage;
