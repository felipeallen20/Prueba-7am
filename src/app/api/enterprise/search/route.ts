import { NextResponse } from 'next/server';
import empresas from '@/data/enterprises.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nombre = searchParams.get('nombre')?.toLowerCase() || '';

  const resultados = empresas.filter((empresa) =>
    empresa.nombre.toLowerCase().includes(nombre)
  );

  return NextResponse.json(resultados);
}
