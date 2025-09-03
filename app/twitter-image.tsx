import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const size = { width: 1600, height: 900 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center',
        width: '100%', height: '100%', background: '#000', color: '#fff',
        fontSize: 78, letterSpacing: -1, fontWeight: 600 }}>
        LA45 — No swipe, just vibe
      </div>
    ),
    size
  );
}
