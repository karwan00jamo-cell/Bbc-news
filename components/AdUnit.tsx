
import React, { useEffect } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
  type?: 'leaderboard' | 'sidebar' | 'in-feed';
}

const AdUnit: React.FC<AdUnitProps> = ({ 
  slot, 
  format = 'auto', 
  responsive = true, 
  className = '',
  type = 'leaderboard'
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  // Determine sizing based on type for the placeholder/container
  const containerClasses = {
    'leaderboard': 'min-h-[90px] w-full',
    'sidebar': 'min-h-[250px] w-full',
    'in-feed': 'min-h-[100px] w-full'
  }[type];

  return (
    <div className={`my-6 text-center ${className}`}>
      <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 block">Advertisement</span>
      <div className={`bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden ${containerClasses}`}>
        {/* Real AdSense tag */}
        <ins 
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
        
        {/* Fallback label if ad doesn't load immediately or in dev */}
        <div className="absolute opacity-5 pointer-events-none select-none">
          <span className="font-bold text-lg">ADSENSE UNIT</span>
        </div>
      </div>
    </div>
  );
};

export default AdUnit;
