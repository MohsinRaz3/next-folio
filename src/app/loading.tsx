"use client"
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Loading() {
    return (
        <div className="min-h-screen bg-white border-t-[6px] border-b-[6px] border-black flex items-center justify-center p-6 md:p-8">
            <div className="bg-neo-cyan border-4 border-black shadow-[8px_8px_0_#000] p-8 md:p-12 lg:p-16 max-w-md w-full text-center">
                {/* Loading Text */}
                <h2 className="font-lexend text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-black mb-6 md:mb-8">
                    LOADING...
                </h2>
                
                {/* Lottie Animation */}
                <div className="border-4 border-black p-4 bg-white">
                    <Player
                        autoplay
                        loop
                        src="/lottieloading.json"
                        style={{ height: '250px', width: '250px', margin: '0 auto' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>

                {/* Decorative Line */}
                <div className="w-24 h-2 bg-black mx-auto mt-6 md:mt-8"></div>
            </div>
        </div>
    );
}