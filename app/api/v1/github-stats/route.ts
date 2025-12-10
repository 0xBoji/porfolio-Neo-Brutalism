import { NextResponse } from 'next/server';

const GITHUB_USERNAME = '0xBoji';

export async function GET() {
  try {
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!userResponse.ok) {
      throw new Error(`Failed to fetch GitHub user data: ${userResponse.status}`);
    }

    const userData = await userResponse.json();

    // Fetch all repos to count total stars
    const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 },
    });

    if (!reposResponse.ok) {
      throw new Error(`Failed to fetch GitHub repos: ${reposResponse.status}`);
    }

    const repos = await reposResponse.json();
    const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);

    const stats = {
      followers: userData.followers,
      following: userData.following,
      publicRepos: userData.public_repos,
      totalStars: totalStars,
      avatarUrl: userData.avatar_url,
      bio: userData.bio,
      name: userData.name,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub stats' },
      { status: 500 }
    );
  }
}
