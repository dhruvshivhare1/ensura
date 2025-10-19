import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#1f2937"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#g)"/>
  <g fill="none" stroke="#22d3ee" stroke-width="28" stroke-linecap="round" stroke-linejoin="round">
    <path d="M128 304c24 48 80 80 128 80s104-32 128-80"/>
    <path d="M176 224c16 32 48 48 80 48s64-16 80-48"/>
    <circle cx="352" cy="176" r="10" fill="#22d3ee" stroke="none"/>
  </g>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}


