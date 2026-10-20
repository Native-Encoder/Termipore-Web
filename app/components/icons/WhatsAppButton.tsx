'use client';

import { useState } from 'react';

export function WhatsappButton() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Tooltip */}
      <div
        className={`absolute right-0 bottom-17 flex items-center gap-2 rounded-full bg-white py-2.5 pr-4 pl-3 text-sm font-medium whitespace-nowrap text-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 ${
          isHovered
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
        </span>
        Message us on WhatsApp
        {/* Speech-bubble tail */}
        <div className="absolute right-6 -bottom-1.5 h-3 w-3 rotate-45 transform bg-white" />
      </div>

      {/* Outer pulse ring — reads as "live/active" the way real chat widgets do */}
      <span
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30"
        style={{ animationDuration: '2.2s' }}
      />

      {/* Button */}
      <a
        href="https://wa.me/94776616919"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with us on WhatsApp"
        className="relative flex h-14 w-14 transform items-center justify-center rounded-full bg-[#25D366] shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] active:scale-95"
      >
        {/* Authentic WhatsApp glyph (white phone receiver on green, official mark) */}
        <svg viewBox="0 0 24 24" className="relative z-10 h-8 w-8" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.892.526 3.66 1.438 5.168L2 22l4.963-1.392A9.953 9.953 0 0 0 12.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2zm0 18.18a8.16 8.16 0 0 1-4.166-1.14l-.299-.177-3.103.871.83-3.026-.195-.31A8.163 8.163 0 0 1 3.82 12c0-4.515 3.667-8.18 8.18-8.18 4.514 0 8.18 3.665 8.18 8.18 0 4.514-3.666 8.18-8.18 8.18z" />
        </svg>

        {/* Online status dot — small detail that sells "real" */}
        <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#25D366]" />
      </a>
    </div>
  );
}
