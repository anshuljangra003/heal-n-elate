'use client'
import './globals.css'; // Ensure you have your global styles here
import { ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { usePathname } from 'next/navigation';


export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Get the current pathname to track page changes

  return (
   
    <html lang="en" className='!scroll-smooth'>
      
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
            
  );
}
