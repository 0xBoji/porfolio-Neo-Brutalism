'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Repo {
  name: string;
  url: string;
  stars: number;
  description: string;
  language: string;
}

export default function OpenSourceRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('/api/github-repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repos');
        }
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setError(true);
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (error) {
    return (
      <div className="brutalist-card bg-white p-8 text-center">
        <p className="text-lg font-bold">Unable to load repositories. Please check back later.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="brutalist-card bg-white p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {repos.map((repo) => (
        <div key={repo.name}>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-card bg-white p-6 hover:translate-x-1 hover:translate-y-1 transition-transform block"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-black uppercase flex items-center gap-2">
                <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
                {repo.name}
              </h3>
              <div className="flex items-center gap-1 bg-[#FFE500] border-2 border-black px-2 py-1">
                <span className="text-lg">⭐</span>
                <span className="font-bold">{repo.stars}</span>
              </div>
            </div>
            <p className="text-sm mb-3 line-clamp-3">{repo.description}</p>
            <div className="flex items-center gap-2">
              <span className="bg-black text-white px-3 py-1 text-xs font-bold border-2 border-black">
                {repo.language}
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
