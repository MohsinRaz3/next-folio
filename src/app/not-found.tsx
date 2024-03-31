"use client"
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function NotFound() {
    return (
      <div className="m-auto space-y-5 text-center">
        
        <Player
  autoplay
  loop
  src="/notfound.json"
  style={{ height: '300px', width: '300px' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
      </div>
    );
  }