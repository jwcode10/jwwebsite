"use client";

import { IconBrandLinkedin, IconBrandFacebook, IconLink, IconMail } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface SocialShareProps {
  url?: string;
  title?: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState(url || '');
  const shareTitle = title || 'Check out this article';

  // Avoid hydration mismatch by only setting URL on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleShare = (platform: string) => {
    let shareUrl = '';
    
    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(currentUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(currentUrl);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={() => handleShare('linkedin')}
        className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        aria-label="Share on LinkedIn"
      >
        <IconBrandLinkedin size={20} />
      </button>
      <button
        onClick={() => handleShare('facebook')}
        className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        aria-label="Share on Facebook"
      >
        <IconBrandFacebook size={20} />
      </button>
      <button
        onClick={() => handleShare('copy')}
        className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        aria-label="Copy link"
      >
        <IconLink size={20} />
      </button>
      <button
        onClick={() => handleShare('email')}
        className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        aria-label="Share via email"
      >
        <IconMail size={20} />
      </button>
    </div>
  );
}

