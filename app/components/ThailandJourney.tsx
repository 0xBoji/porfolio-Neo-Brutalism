'use client';

import { useState } from 'react';
import Image from 'next/image';

interface JourneyDay {
  day: number;
  title: string;
  description: string;
  images: string[];
}

const journeyDays: JourneyDay[] = [
  {
    day: 1,
    title: 'Day 1 at Bangkok',
    description: "We seem to be the youngest here — most others are around 25-30 with years of experience. By the end of the day, we started planning: How about building a mini dApp to inspire people to share photos when they check in at the workshop?",
    images: ['/sui-hacker-house-thailand-firstday-1.png', '/sui-hacker-house-thailand-firstday-2.png'],
  },
  {
    day: 2,
    title: 'Day 2 at Bangkok',
    description: "The highlight of the day is that we have a real meeting room where everyone engage in lively discussions, brainstorming ideas, and worked together. The second best part was celebrating our leader's birthday with other members here in Bangkok.",
    images: ['/sui-hacker-house-thailand-middleday-1.png', '/sui-hacker-house-thailand-middleday-2.png'],
  },
  {
    day: 3,
    title: 'Day 3 at Bangkok',
    description: 'In the afternoon, our team officially started working on our first projects and joined a networking party.',
    images: ['/sui-hacker-house-thailand-thirdday-1.png', '/sui-hacker-house-thailand-thirdday-2.png'],
  },
  {
    day: 4,
    title: 'Day 4 at Bangkok',
    description: 'Our team split into 2 groups today: one team stayed at the ICP Hacker House to stay updated on bounties and tracks, while the other team focused on learning about Walrus and listening to project pitches at the Sui Hacker House.',
    images: [
      '/sui-hacker-house-thailand-fourday-1.png',
      '/sui-hacker-house-thailand-fourday-2.png',
      '/sui-hacker-house-thailand-fourday-3.png',
      '/sui-hacker-house-thailand-fourday-4.png',
    ],
  },
  {
    day: 5,
    title: 'Day 5 at Bangkok',
    description: "Today was all about going places — just non-stop movement! We split into several teams to cover events for different chains like Polkadot, Edu chain, Near, Sui Walrus, and ICP. Building, gathering insights, and connecting took a toll on our energy.",
    images: [],
  },
  {
    day: 6,
    title: 'Day 6 at Bangkok',
    description: "A week full of side events! We've learned new concepts, heard passionate builders share about projects they're cooking up, and made it through half of our amazing Bangkok journey. Still excited for what's next!",
    images: [],
  },
  {
    day: 9,
    title: 'Day 9 at Bangkok',
    description: 'We joined Sui Connect, Bitcoin Hackathon and AI workshop. Just capturing some moments from the past few days.',
    images: [],
  },
  {
    day: 10,
    title: 'Day 10 at Bangkok',
    description: "The promise to bring 20 of us to Bangkok ended up with 12 of us actually here. Even though it cost quite a bit, this trip has been totally worth it! So many unforgettable memories!",
    images: [],
  },
  {
    day: 14,
    title: 'Day 14 - Journey Complete',
    description: "Back to Vietnam with incredible achievements! After two intense weeks of learning, building, and networking at the Sui Hacker House during Devcon7, we returned home not only with a $2,000 prize but with invaluable experience. We connected with global builders, explored cutting-edge Web3 technologies including Walrus, ICP, and Sui, and proved that age is just a number in this space. This journey transformed us from participants into confident builders ready to shape the future of blockchain technology in Vietnam and beyond.",
    images: ['/sui-hacker-house-thailand-fourteenday-1.png'],
  },
];

export default function ThailandJourney() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Journey Header */}
      <div className="brutalist-card bg-[#00D4FF] p-8 border-4 border-black">
        <h3 className="text-3xl font-black uppercase mb-4">
          🇹🇭 Sui Hacker House Thailand 2024
        </h3>
        <p className="text-lg font-bold mb-2">
          A 2-week immersive journey invited by Sui Network during Devcon7
        </p>
        <p className="font-bold">
          🏆 Result: Winner - $2,000 Prize
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="space-y-4">
        {journeyDays.map((journeyDay) => (
          <div
            key={journeyDay.day}
            className="brutalist-card bg-white p-6 cursor-pointer hover:bg-[#FDFBF7] transition-colors"
            onClick={() => setExpandedDay(expandedDay === journeyDay.day ? null : journeyDay.day)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-black uppercase">
                📅 {journeyDay.title}
              </h4>
              <span className="text-2xl font-black">
                {expandedDay === journeyDay.day ? '−' : '+'}
              </span>
            </div>
            
            {expandedDay === journeyDay.day && (
              <div className="mt-4 space-y-4">
                <p className="text-base leading-relaxed">
                  {journeyDay.description}
                </p>
                
                {journeyDay.images.length > 0 && (
                  <div className={`grid gap-4 ${
                    journeyDay.images.length === 1 ? 'grid-cols-1' :
                    journeyDay.images.length === 2 ? 'grid-cols-2' :
                    'grid-cols-2 md:grid-cols-4'
                  }`}>
                    {journeyDay.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative h-48 border-4 border-black overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${journeyDay.title} - Photo ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
