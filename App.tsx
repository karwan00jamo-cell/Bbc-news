
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ArticleCard from './components/ArticleCard';
import AISidebar from './components/AISidebar';
import AdUnit from './components/AdUnit';
import { INITIAL_STORIES } from './constants';
import { Story, NewsCategory } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(NewsCategory.HOME);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const filteredStories = useMemo(() => {
    if (activeCategory === NewsCategory.HOME) return INITIAL_STORIES;
    return INITIAL_STORIES.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const heroStory = filteredStories[0];
  const secondaryStories = filteredStories.slice(1, 4);
  const moreStories = INITIAL_STORIES.slice(2, 6);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Top Leaderboard Ad Slot */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <AdUnit slot="1234567890" type="leaderboard" className="mt-4 mb-0" />
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {activeCategory === 'Home' ? 'Top Stories' : activeCategory}
          </h1>
          <div className="text-sm font-semibold text-[#bb1919]">
            {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-10">
            {heroStory && (
              <ArticleCard 
                story={heroStory} 
                variant="hero" 
                onClick={setSelectedStory} 
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {secondaryStories.map(story => (
                <ArticleCard 
                  key={story.id} 
                  story={story} 
                  onClick={setSelectedStory} 
                />
              ))}
            </div>

            {/* Section Divider */}
            <div className="border-t-4 border-gray-900 pt-8 mt-12">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Features & Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {INITIAL_STORIES.slice(0, 2).map(story => (
                  <div key={`feat-${story.id}`} className="flex flex-col group cursor-pointer" onClick={() => setSelectedStory(story)}>
                    <img src={story.imageUrl} className="h-48 object-cover mb-4" />
                    <h3 className="text-2xl font-bold group-hover:underline">{story.title}</h3>
                    <p className="text-gray-600 mt-2 line-clamp-2">{story.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-10">
            <div className="bg-white p-6 shadow-sm border-t-2 border-[#bb1919]">
              <h2 className="text-xl font-bold mb-4 text-[#bb1919] uppercase tracking-wide">Must Read</h2>
              <div className="divide-y">
                {moreStories.map((story, i) => (
                  <div key={`side-${story.id}`} className="py-4 first:pt-0 group cursor-pointer" onClick={() => setSelectedStory(story)}>
                    <div className="flex gap-4">
                       <span className="text-3xl font-black text-gray-200">{i + 1}</span>
                       <h3 className="font-bold text-gray-900 group-hover:underline leading-tight">{story.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Ad Slot */}
            <AdUnit slot="0987654321" type="sidebar" format="rectangle" />

            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest">Live Updates</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tech Summit 2024</h3>
              <p className="text-gray-400 text-sm mb-4">Latest keynote reveals revolutionary AI hardware architecture.</p>
              <button className="w-full py-2 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
                Watch Live
              </button>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 border-b pb-2">Top Video</h2>
              <div className="relative group cursor-pointer" onClick={() => setSelectedStory(INITIAL_STORIES[0])}>
                <img src="https://picsum.photos/id/10/400/225" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#bb1919] rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <h4 className="mt-3 font-bold group-hover:underline">The ethics of autonomous driving: A special report</h4>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center border-b pb-8 mb-8">
            <div className="flex gap-0.5 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-[#444] text-white flex items-center justify-center font-black text-xl">B</div>
              <div className="w-8 h-8 bg-[#444] text-white flex items-center justify-center font-black text-xl">E</div>
              <div className="w-8 h-8 bg-[#444] text-white flex items-center justify-center font-black text-xl">A</div>
            </div>
            <div className="flex space-x-6 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-black">Terms of Use</a>
              <a href="#" className="hover:text-black">About the Beacon</a>
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Cookies</a>
              <a href="#" className="hover:text-black">Accessibility Help</a>
              <a href="#" className="hover:text-black">Contact</a>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400">
            Copyright © {new Date().getFullYear()} Beacon News. The Beacon is not responsible for the content of external sites.
          </p>
        </div>
      </footer>

      {/* AI Deep Dive Overlay */}
      <AISidebar 
        story={selectedStory} 
        onClose={() => setSelectedStory(null)} 
      />
    </div>
  );
};

export default App;
