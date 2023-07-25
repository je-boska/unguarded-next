import { ReactNode } from 'react';

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <main className={'mt-28 max-w-[1920px] mx-auto px-4 md:px-8 ' + className}>
      {children}
    </main>
  );
}
