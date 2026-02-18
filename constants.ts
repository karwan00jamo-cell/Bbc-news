
import { Story, NewsCategory, Comment } from './types';

export const INITIAL_STORIES: Story[] = [
  {
    id: '1',
    category: 'Tech',
    title: 'The Future of Quantum Computing in Everyday Life',
    summary: 'Researchers breakthrough new cooling methods that could bring quantum chips to desktop computers by 2030.',
    content: 'In a landmark study published this week, scientists have detailed a revolutionary new approach to maintaining the extreme temperatures required for quantum coherence. Historically, quantum computers required massive dilution refrigerators, but the new "nano-chiller" technology operates at much higher thresholds, potentially paving the way for consumer-grade quantum devices...',
    imageUrl: 'https://picsum.photos/id/180/800/450',
    timestamp: '2 hours ago',
    author: 'Sarah Jenkins'
  },
  {
    id: '2',
    category: 'Science',
    title: 'Mars Rover Discovers Ancient Riverbed with Mineral Clusters',
    summary: 'The latest images from the Perseverance rover reveal complex geological structures suggesting long-term water flow.',
    content: 'Perseverance has stumbled upon what geologists are calling the "Golden Gateway"—a section of the Jezero Crater that clearly shows layered sedimentary rocks formed by an ancient river. These findings strengthen the hypothesis that Mars was not just wet, but potentially habitable for microorganisms for millions of years...',
    imageUrl: 'https://picsum.photos/id/201/800/450',
    timestamp: '4 hours ago',
    author: 'Dr. James Miller'
  },
  {
    id: '3',
    category: 'Health',
    title: 'New Study Links Mediterranean Diet to Cognitive Resilience',
    summary: 'A 20-year longitudinal study confirms that dietary habits significantly influence brain health in later years.',
    content: 'The results of the "Mind and Body" initiative, which followed 10,000 participants across three continents, suggest that those adhering strictly to a Mediterranean-style diet were 35% less likely to develop neurodegenerative symptoms as they aged. The key appears to be the synergistic effect of healthy fats and high antioxidant intake...',
    imageUrl: 'https://picsum.photos/id/225/800/450',
    timestamp: '6 hours ago',
    author: 'Elena Rossi'
  },
  {
    id: '4',
    category: 'Business',
    title: 'Global Markets Pivot as Green Energy Stocks Surge',
    summary: 'Investors are shifting away from traditional fossil fuels as renewable tech reaches a new efficiency peak.',
    content: 'Wall Street saw a significant reallocation of capital today following the announcement of a new breakthrough in solid-state battery manufacturing. Shares in leading solar and wind manufacturers reached all-time highs, while traditional energy indices experienced a modest correction. Analysts believe this marks a permanent shift in market sentiment...',
    imageUrl: 'https://picsum.photos/id/250/800/450',
    timestamp: '8 hours ago',
    author: 'Robert Sterling'
  },
  {
    id: '5',
    category: 'Entertainment',
    title: 'Cannes Film Festival Announces Bold New Selection',
    summary: 'This year’s lineup features a record number of independent films and a focus on experimental storytelling.',
    content: 'The 77th Cannes Film Festival has unveiled its official selection, surprising many with a heavy emphasis on debut directors and genre-bending narratives. The jury, led this year by an acclaimed auteur, stated that the focus is on "revitalizing the cinematic language for a new generation of viewers"...',
    imageUrl: 'https://picsum.photos/id/270/800/450',
    timestamp: '12 hours ago',
    author: 'Maya Thompson'
  }
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c1',
    storyId: '1',
    author: 'QuantumEnthusiast',
    text: 'This is a game changer for researchers who don’t have access to massive labs. Can’t wait to see the first desktop prototypes!',
    timestamp: '1 hour ago',
    likes: 12
  },
  {
    id: 'c2',
    storyId: '1',
    author: 'Tech skeptic',
    text: '2030 seems very optimistic. We still haven’t solved the error correction problem at scale.',
    timestamp: '45 mins ago',
    likes: 4
  },
  {
    id: 'c3',
    storyId: '2',
    author: 'Stargazer_99',
    text: 'Every time we find water evidence, we get one step closer to finding life. Perseverance is doing incredible work.',
    timestamp: '2 hours ago',
    likes: 25
  }
];

export const CATEGORIES = Object.values(NewsCategory);
