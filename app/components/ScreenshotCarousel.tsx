'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Screenshot {
  src: string;
  alt: string;
}

interface Props {
  screenshots: Screenshot[];
}

export default function ScreenshotCarousel({ screenshots }: Props) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i - 1 + screenshots.length) % screenshots.length);
  const next = () =>
    setCurrent((i) => (i + 1) % screenshots.length);

  return (
    <div className="shrink-0 flex flex-col items-center gap-4">

      {/* Image + side arrows */}
      <div className="relative w-72 aspect-9/16">
        <Image
          src={screenshots[current].src}
          alt={screenshots[current].alt}
          fill
          className="object-contain"
          sizes="288px"
        />

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous screenshot"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-3 text-zinc-400 hover:text-zinc-600 transition-colors text-4xl leading-none"
        >
          ‹
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next screenshot"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-3 text-zinc-400 hover:text-zinc-600 transition-colors text-4xl leading-none"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? 'bg-[#00aeef]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

    </div>
  );
}
