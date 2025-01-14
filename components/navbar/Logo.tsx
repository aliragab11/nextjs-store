import { VscVscode } from 'react-icons/vsc';
import Link from 'next/link';
import { Button } from '../ui/button';

function Logo() {
  return (
    <Button asChild size="icon">
      <Link href="/">
        <VscVscode className="h-6 w-6" />
      </Link>
    </Button>
  );
}

export default Logo;
