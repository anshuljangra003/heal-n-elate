'use client'
import './globals.css'; // Ensure you have your global styles here
import { ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { usePathname } from 'next/navigation';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Get the current pathname to track page changes

  return (
    <ClerkProvider>
    <html lang="en">
      
      <body>
        {/* Page transition wrapper */}
        <TransitionGroup component={null}>
          <CSSTransition
            key={pathname}
            classNames="page"
            timeout={500}
            unmountOnExit
            >
            <div>{children}</div>
          </CSSTransition>
        </TransitionGroup>
      </body>
    </html>
            </ClerkProvider>
  );
}
