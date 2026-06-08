import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

export default function IPhoneMockup({ src, alt }: Props) {
  return (
    <div className="shrink-0 flex justify-center">
      {/* Outer phone shell */}
      <div className="relative w-[200px]">
        {/* Side buttons — volume up/down + silent toggle */}
        <div className="absolute -left-[3px] top-[72px] w-[3px] h-[22px] bg-[#3a3a3a] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[104px] w-[3px] h-[32px] bg-[#3a3a3a] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[146px] w-[3px] h-[32px] bg-[#3a3a3a] rounded-l-sm" />
        {/* Power button */}
        <div className="absolute -right-[3px] top-[120px] w-[3px] h-[50px] bg-[#3a3a3a] rounded-r-sm" />

        {/* Phone body */}
        <div
          className="relative rounded-[38px] p-[11px]"
          style={{
            background: 'linear-gradient(160deg, #2a2a2a 0%, #111111 100%)',
            boxShadow:
              '0 0 0 1px #000, 0 25px 50px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Notch */}
          <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-b-[14px] z-10" />

          {/* Screen bezel (inner dark border) */}
          <div className="relative overflow-hidden rounded-[28px] bg-black"
               style={{ aspectRatio: '9 / 19.5' }}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="178px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
