'use client';

import { useState } from 'react';
import Image from 'next/image';

type HackathonType = 'all' | 'global' | 'vietnam';

interface Hackathon {
  id: string;
  type: 'global' | 'vietnam';
  image: string;
  title: string;
  name: string;
  subtitle?: string;
  bgColor: string;
  useGradient?: boolean;
  gradientColors?: string;
  emoji?: string;
}

const hackathons: Hackathon[] = [
  {
    id: 'hyperliquid-2025',
    type: 'global',
    image: '/hyperliquid-hackathon.png',
    title: '💵 $2000 Bounty',
    name: 'Hyperliquid Hackathon Global 2025',
    subtitle: 'HyperLiquid SDK written by Swift',
    bgColor: 'bg-white',
  },
  {
    id: 'saga-2025',
    type: 'vietnam',
    image: '/saga-hackathon-vn.png',
    title: '🥇 Champion - $2,000',
    name: 'Saga Hackathon Vietnam 2025',
    bgColor: 'bg-[#FFE500]',
  },
  {
    id: 'aws-2025',
    type: 'global',
    image: '',
    title: '💰 $10,000 AWS Credits',
    name: 'AWS Global Vibe: AI Coding Hackathon 2025',
    bgColor: 'bg-[#C77DFF]',
    useGradient: true,
    gradientColors: 'from-orange-500 to-purple-600',
    emoji: '☁️',
  },
  {
    id: 'cardano-2025',
    type: 'vietnam',
    image: '/cardano-hackathon-vn.png',
    title: '🥉 2nd Runner-up - $800',
    name: 'Cardano Hackathon Vietnam 2025',
    bgColor: 'bg-[#C77DFF]',
  },
  {
    id: 'sui-thailand-2024',
    type: 'global',
    image: '/sui-hacker-house-thailand-firstday-1.png',
    title: '🏆 Winner - $2,000',
    name: 'Sui Hacker House Thailand 2024',
    subtitle: '2-week journey during Devcon7 Bangkok',
    bgColor: 'bg-[#00D4FF]',
  },
  {
    id: 'aptos-2024',
    type: 'global',
    image: '/aptos-hackathon.png',
    title: '1st Place - $35,000',
    name: 'Aptos Collision Hackathon Global 2024',
    subtitle: 'The Unexpected Track',
    bgColor: 'bg-[#FFE500]',
  },
  {
    id: 'polkadot-2024',
    type: 'vietnam',
    image: '/pokadot-hackathon-vn.png',
    title: '🥉 2nd Runner-up - $750',
    name: 'Polkadot Hackathon Vietnam 2024',
    bgColor: 'bg-[#FF6B9D]',
  },
  {
    id: 'algorand-2024',
    type: 'vietnam',
    image: '/algorand-hackathon-vn.png',
    title: '🥉 2nd Runner-up - $1,500',
    name: 'Algorand Hackathon Vietnam 2024',
    bgColor: 'bg-white',
  },
  {
    id: 'sui-2024',
    type: 'global',
    image: '/sui-hackathon.jpg',
    title: '🥉 3rd Place - $17,000 + $15,000 AWS Credits',
    name: 'Sui Overflow Global 2024 Hackathon',
    subtitle: 'Gaming Track',
    bgColor: 'bg-[#00D4FF]',
  },
  {
    id: 'movement-2024',
    type: 'global',
    image: '/movement-hackathon.jpg',
    title: '🥈 2nd Place - $20,000',
    name: 'MovementLabs Olympus Hackathon 2024',
    subtitle: 'Gaming Track',
    bgColor: 'bg-[#FF6B9D]',
  },
  {
    id: 'web3hackfest-2023',
    type: 'global',
    image: '/web3hackfest.jpg',
    title: '🥈 2nd Place - $2,000',
    name: 'Web3Hackfest Hackathon 2023',
    subtitle: 'Tools & Public Good Track',
    bgColor: 'bg-[#88FF00]',
  },
];

export default function HackathonAwards() {
  const [filter, setFilter] = useState<HackathonType>('all');

  const filteredHackathons = hackathons.filter((hackathon) => {
    if (filter === 'all') return true;
    return hackathon.type === filter;
  });

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setFilter('all')}
          className={`brutalist-btn px-6 py-3 ${
            filter === 'all'
              ? 'bg-[#FFE500] text-black'
              : 'bg-white text-black'
          }`}
        >
          All ({hackathons.length})
        </button>
        <button
          onClick={() => setFilter('global')}
          className={`brutalist-btn px-6 py-3 ${
            filter === 'global'
              ? 'bg-[#00D4FF] text-black'
              : 'bg-white text-black'
          }`}
        >
          Global ({hackathons.filter((h) => h.type === 'global').length})
        </button>
        <button
          onClick={() => setFilter('vietnam')}
          className={`brutalist-btn px-6 py-3 ${
            filter === 'vietnam'
              ? 'bg-[#FF6B9D] text-black'
              : 'bg-white text-black'
          }`}
        >
          Vietnam ({hackathons.filter((h) => h.type === 'vietnam').length})
        </button>
      </div>

      {/* Hackathon Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredHackathons.map((hackathon) => (
          <div
            key={hackathon.id}
            className={`brutalist-card ${hackathon.bgColor} p-0 overflow-hidden relative`}
          >
            {/* Vietnam Flag Circle for Vietnamese hackathons */}
            {hackathon.type === 'vietnam' && (
              <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full border-4 border-black overflow-hidden bg-red-600 flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 30 30" className="w-full h-full">
                    <polygon points="15,3 18,12 27,12 20,17 23,26 15,21 7,26 10,17 3,12 12,12" fill="#FFD700"/>
                  </svg>
                </div>
              </div>
            )}
            {/* Globe Icon for Global hackathons */}
            {hackathon.type === 'global' && (
              <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full border-4 border-black bg-[#00D4FF] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
            )}
            <div
              className={`h-48 relative border-b-4 border-black ${
                hackathon.useGradient
                  ? `bg-gradient-to-br ${hackathon.gradientColors} flex items-center justify-center`
                  : ''
              }`}
            >
              {hackathon.image ? (
                <Image
                  src={hackathon.image}
                  alt={hackathon.name}
                  fill
                  className="object-cover"
                />
              ) : hackathon.emoji ? (
                <span className="text-6xl">{hackathon.emoji}</span>
              ) : null}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black uppercase mb-2">
                {hackathon.title}
              </h3>
              <p className="font-bold">{hackathon.name}</p>
              {hackathon.subtitle && (
                <p className="text-sm mt-1">{hackathon.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
