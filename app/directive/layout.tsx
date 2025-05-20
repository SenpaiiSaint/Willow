'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function DirectiveLayout({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
