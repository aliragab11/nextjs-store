'use client';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside>
      {adminLinks.map((link) => {
        const isActive = pathname === link.href;
        const varient = isActive ? 'default' : 'ghost';
        return (
          <Button
            asChild
            key={link.href}
            variant={varient}
            className="w-full mb-2 capitalize font-normal justify-start"
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
