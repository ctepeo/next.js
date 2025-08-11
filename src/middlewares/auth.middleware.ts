import { NextRequest, NextResponse } from 'next/server';
import { NemoEvent } from '@rescale/nemo';

const protectedRoutes = ['en/protected'];

export const AuthMiddleware = async (request: NextRequest, _event: NemoEvent) => {};
