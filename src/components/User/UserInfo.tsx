'use client';

import { defaultSession } from '@libs/session.lib';
import { useState } from 'react';
import { TSessionData } from '@types/session.types';

export const UserInfo = () => {
  const [session, setSession] = useState<TSessionData>(defaultSession);

  if (session.isLoggedIn) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">{session.username}</span>
        <span className="text-xs text-gray-500">Logged in</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold">Guest</span>
      <span className="text-xs text-gray-500">Not logged in</span>
    </div>
  );
};
