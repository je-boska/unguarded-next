import { ReactNode } from 'react';

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <main className={'mt-20 max-w-8xl mx-auto px-8 ' + className}>
      {children}
    </main>
  );
}
