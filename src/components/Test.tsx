'use client';

import { useStore } from '@providers/store.provider';
import { Button } from '@components/ui/button';
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
      <Button onClick={() => setIsLoading(!isLoading)}></Button>
    </div>
  );
};
