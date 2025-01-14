import Link from 'next/link';
import { Button } from '../ui/button';
import { LuShoppingCart } from 'react-icons/lu';

async function CartButton() {
  // TODO
  const numItemsInCart = 9;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex items-center justify-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -right-3 -top-3 bg-primary text-white rounded-full h-6 w-6 flex justify-center items-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
