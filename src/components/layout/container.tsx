import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={cn(
        'container mx-auto max-w-4xl space-y-2.5 px-3 py-2 md:px-2',
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
