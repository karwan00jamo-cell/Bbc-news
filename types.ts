
export interface Comment {
  id: string;
  storyId: string;
  author: string;
  text: string;
  timestamp: string;
  likes: number;
}

export interface Story {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  timestamp: string;
  author: string;
}

export enum NewsCategory {
  HOME = 'Home',
  WORLD = 'World',
  BUSINESS = 'Business',
  TECH = 'Tech',
  SCIENCE = 'Science',
  HEALTH = 'Health',
  ENTERTAINMENT = 'Entertainment'
}

export interface AIInsight {
  summary: string;
  keyPoints: string[];
  background: string;
  implications: string;
}
