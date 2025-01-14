import { cn } from '@/lib/utils';

type Prpos = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: Prpos) {
  return (
    <div className={cn('mx-auto max-w-6xl xl:max-w-7xl px-8', className)}>
      {children}
    </div>
  );
}

export default Container;
