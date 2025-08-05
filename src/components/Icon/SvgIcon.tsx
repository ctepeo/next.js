import React, { ReactNode } from 'react';

export const SvgIcon = ({ children, className, viewBox }: { children: ReactNode; className?: string; viewBox?: string }) => {
  return (
    <svg className={`fill-current w-[1rem] ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox || '0 0 512 512'}>
      {children}
    </svg>
  );
};
