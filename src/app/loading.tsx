"use client"
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Loading() {
    return <div className="p-5 text-center">
        <Player
  autoplay
  loop
  src="/lottieloading.json"
  style={{ height: '300px', width: '300px' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
    </div>;
  }