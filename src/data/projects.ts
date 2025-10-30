// data/projects.ts

interface Project {
  title: string;
  description: string;
  link: string;
}

const fetchGitHubProjects = async (username: string): Promise<Project[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Filter out forks and map to your project format
    const projects: Project[] = repos
      .filter((repo: any) => !repo.fork) // Remove forked repos
      .map((repo: any) => ({
        title: repo.name,
        description: repo.description || repo.name, // Use repo name if no description
        link: repo.html_url,
      }));
    
    return projects;
    
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    // Return fallback data if API fails
    return [
      {
        title: "2D-breakout-game",
        description: "A simple yet addictive 2D Breakout Game, inspired by the arcade classic. Built to demonstrate fundamental concepts of game loops, collision detection, and rendering using web technologies",
        link: "https://github.com/Aryan-Pourtaheri/2D-breakout-game",
      },
      {
        title: "Like-Shop",
        description: "Like-Shop",
        link: "https://github.com/Aryan-Pourtaheri/Like-Shop",
      },      
      {
        title: "Like-Shop",
        description: "Like-Shop",
        link: "https://github.com/Aryan-Pourtaheri/Like-Shop",
      },
      {
        title: "Like-Shop",
        description: "Like-Shop",
        link: "https://github.com/Aryan-Pourtaheri/Like-Shop",
      },
    ];
  }
};

// Replace 'your-github-username' with your actual GitHub username
const GITHUB_USERNAME = 'Aryan-Pourtaheri';

// Export the projects - this will be fetched from GitHub API
export const projects = await fetchGitHubProjects(GITHUB_USERNAME).catch(() => staticProjects);

console.log('Fetched projects:', projects);

// If you need a synchronous version with static fallback data:
export const staticProjects: Project[] = [
  {
    title: "2D-breakout-game",
    description: "A simple yet addictive 2D Breakout Game, inspired by the arcade classic. Built to demonstrate fundamental concepts of game loops, collision detection, and rendering using web technologies",
    link: "https://github.com/Aryan-Pourtaheri/2D-breakout-game",
  },
  {
    title: "Like-Shop",
    description: "Like-Shop",
    link: "https://github.com/Aryan-Pourtaheri/Like-Shop",
  },
];

// Helper function to get projects (handles the Promise)
export const getProjects = async (): Promise<Project[]> => {
  return await projects;
};
