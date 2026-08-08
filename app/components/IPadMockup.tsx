import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

export default function IPadMockup({ src, alt }: Props) {
  return (
    <div className="shrink-0 flex justify-center">
      {/* Outer tablet shell — landscape orientation, sized to sit comfortably alongside portrait phone mockups */}
      <div className="relative w-[220px] sm:w-[260px]">
        {/* Power button — top edge */}
        <div className="absolute -top-[2px] right-[32px] w-[16px] h-[2px] bg-[#3a3a3a] rounded-t-sm" />
        {/* Volume rocker — top edge */}
        <div className="absolute -top-[2px] right-[12px] w-[12px] h-[2px] bg-[#3a3a3a] rounded-t-sm" />

        {/* Tablet body */}
        <div
          className="relative rounded-[16px] p-[8px]"
          style={{
            background: 'linear-gradient(160deg, #2a2a2a 0%, #111111 100%)',
            boxShadow:
              '0 0 0 1px #000, 0 20px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Front camera — right edge, vertically centered */}
          <div className="absolute top-1/2 right-[3px] -translate-y-1/2 w-[4px] h-[4px] rounded-full bg-[#0a0a0a] ring-1 ring-[#333] z-10" />

          {/* Screen bezel (inner dark border) */}
          <div
            className="relative overflow-hidden rounded-[6px] bg-black"
            style={{ aspectRatio: '4 / 3' }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
