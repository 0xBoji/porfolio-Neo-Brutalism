'use client';

import { useState, useEffect } from 'react';

interface GitHubStats {
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
  avatarUrl: string;
  bio: string;
  name: string;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/v1/github-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub stats');
        }
        const data = await response.json();
        setStats(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setError(true);
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="brutalist-card bg-white p-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return null;
  }

  return (
    <div className="brutalist-card bg-[#00D4FF] p-6">
      <div className="flex items-center gap-3 mb-6">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <h3 className="text-2xl font-black uppercase">GitHub Stats</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border-4 border-black p-4 text-center">
          <div className="text-3xl font-black mb-1">{stats.followers}</div>
          <div className="text-sm font-bold uppercase">Followers</div>
        </div>
        
        <div className="bg-white border-4 border-black p-4 text-center">
          <div className="text-3xl font-black mb-1">{stats.following}</div>
          <div className="text-sm font-bold uppercase">Following</div>
        </div>
        
        <div className="bg-white border-4 border-black p-4 text-center">
          <div className="text-3xl font-black mb-1">{stats.totalStars}</div>
          <div className="text-sm font-bold uppercase">⭐ Stars</div>
        </div>
        
        <div className="bg-white border-4 border-black p-4 text-center">
          <div className="text-3xl font-black mb-1">{stats.publicRepos}</div>
          <div className="text-sm font-bold uppercase">Repositories</div>
        </div>
      </div>
    </div>
  );
}
