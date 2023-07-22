import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <main className='mt-20 max-w-8xl mx-auto px-8'>{children}</main>;
}
