'use client';

import { useState, useEffect } from 'react';

interface GitHubFollowStats {
  followers: number;
  following: number;
}

export default function GitHubFollowStats() {
  const [stats, setStats] = useState<GitHubFollowStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/v1/github-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub stats');
        }
        const data = await response.json();
        setStats({ followers: data.followers, following: data.following });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-4">
        <div className="brutalist-btn bg-white px-6 py-3 animate-pulse">
          <div className="h-5 w-24 bg-gray-200 rounded"></div>
        </div>
        <div className="brutalist-btn bg-white px-6 py-3 animate-pulse">
          <div className="h-5 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="flex gap-4">
      <div className="brutalist-btn bg-white px-6 py-3 inline-block cursor-default">
        👥 {stats.followers} Followers
      </div>
      <div className="brutalist-btn bg-white px-6 py-3 inline-block cursor-default">
        👤 {stats.following} Following
      </div>
    </div>
  );
}
