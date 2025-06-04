import { NextResponse } from 'next/server';
import empresas from '@/data/enterprises.json';

export async function GET() {
  return NextResponse.json(empresas);
}