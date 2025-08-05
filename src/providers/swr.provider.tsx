'use client';
import { ReactNode } from 'react';
import { SWRConfig, SWRConfiguration } from 'swr';
import { SWRDefaultConfig } from '@/configs/request.config';

export const SwrProvider = ({ children, SWRCustomConfig = {} }: { children?: ReactNode; SWRCustomConfig?: SWRConfiguration }) => {
  return <SWRConfig value={{ ...SWRDefaultConfig, ...SWRCustomConfig }}>{children}</SWRConfig>;
};
