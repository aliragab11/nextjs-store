'use client';

import { useToast } from '@/hooks/use-toast';
import { SignOutButton } from '@clerk/nextjs';

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'Logout successful' });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout} className="w-full text-left">
        Logout
      </button>
    </SignOutButton>
  );
  // return (
  //   <SignOutButton>
  //     <Link href={'/'} onClick={handleLogout} className="w-full text-left">
  //       Logout
  //     </Link>
  //   </SignOutButton>
  // );
}

export default SignOutLink;
