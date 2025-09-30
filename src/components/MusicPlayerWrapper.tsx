'use client';

import dynamic from 'next/dynamic';

const MusicPlayer = dynamic(
  () => import('@/components/MusicPlayer'),
  { ssr: false }
);

export default function MusicPlayerWrapper() {
  return <MusicPlayer />;
}
