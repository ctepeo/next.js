'use client';
import { ErrorBoundary } from 'react-error-boundary';
import { ReactNode } from 'react';
import { ErrorInfo } from 'react';

export const ErrorBoundaryProvider = ({ children }: { children: ReactNode }) => {
  const logError = (error: Error, info: ErrorInfo) => {
    // Do something with the error, e.g. log to an external API
    console.error('ErrorBoundary caught an error:', error);
    console.error('ErrorBoundary component stack:', info.componentStack);
    // You can also send this error to an error tracking service
    // e.g. Sentry, LogRocket, etc.
  };

  return (
    <ErrorBoundary onError={logError} fallback={<div>Something went wrong</div>}>
      {children}
    </ErrorBoundary>
  );
};
