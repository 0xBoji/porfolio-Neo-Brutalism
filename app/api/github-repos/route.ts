import { NextResponse } from 'next/server';

const REPOS = [
  { 
    owner: '0xBoji', 
    name: '180DaysOfRust',
    customDescription: 'A 180-day journey exploring Rust programming through in-depth articles, hands-on projects, and daily learning insights. From fundamental concepts to advanced features and real-world applications.'
  },
  { 
    owner: '0xBoji', 
    name: 'hyperliquid-swift-sdk',
    customDescription: 'Swift SDK for Hyperliquid decentralized exchange. Provides seamless integration for iOS/macOS developers to interact with Hyperliquid protocol, supporting trading, portfolio management, and WebSocket streams.'
  },
  { 
    owner: '0xBoji', 
    name: 'aster-connector-go',
    customDescription: 'High-performance Go connector for Aster Network. Enables efficient blockchain interactions with type-safe APIs, transaction building, and event streaming for Polkadot-based applications.'
  },
  { 
    owner: '0xBoji', 
    name: 'aws-saa-practice',
    customDescription: 'Comprehensive AWS Solutions Architect Associate certification practice resources. Includes hands-on labs, architecture diagrams, best practices, and real-world scenarios for exam preparation.'
  },
];

export async function GET() {
  try {
    const repoData = await Promise.all(
      REPOS.map(async ({ owner, name, customDescription }) => {
        // Fetch repo info
        const repoRes = await fetch(`https://api.github.com/repos/${owner}/${name}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            // Add GitHub token if you have rate limit issues
            // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          },
          next: { revalidate: 3600 }, // Cache for 1 hour
        });
        
        if (!repoRes.ok) {
          throw new Error(`Failed to fetch repo ${name}`);
        }
        
        const repo = await repoRes.json();

        return {
          name: repo.name,
          url: repo.html_url,
          stars: repo.stargazers_count,
          description: customDescription,
          language: repo.language || 'Code',
        };
      })
    );

    return NextResponse.json(repoData);
  } catch (error) {
    console.error('Error fetching repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
