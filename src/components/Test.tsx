'use client';

import { useStore } from '@providers/store.provider';
import { useShallow } from 'zustand/react/shallow';

export const Test = () => {
  const { isLoading, setIsLoading } = useStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      setIsLoading: state.setIsLoading,
    })),
  );

  return (
    <div>
      <div>useStore [isLoading: {isLoading ? 1 : 0}]</div>
      <button onClick={() => setIsLoading(!isLoading)}>CLICK</button>
    </div>
  );
};
