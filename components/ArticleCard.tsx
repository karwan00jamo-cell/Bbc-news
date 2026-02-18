
import React from 'react';
import { Story } from '../types';

interface ArticleCardProps {
  story: Story;
  variant?: 'hero' | 'secondary' | 'list';
  onClick: (story: Story) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ story, variant = 'secondary', onClick }) => {
  const engagementInfo = (
    <div className="flex items-center space-x-3 text-sm text-gray-500">
      <span className="font-bold border-r pr-3 border-gray-300 uppercase text-[#bb1919]">{story.category}</span>
      <span>{story.timestamp}</span>
      <span className="flex items-center text-xs">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        8
      </span>
    </div>
  );

  if (variant === 'hero') {
    return (
      <div 
        className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
        onClick={() => onClick(story)}
      >
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-3 h-64 md:h-96 relative overflow-hidden">
            <img 
              src={story.imageUrl} 
              alt={story.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#bb1919] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                Latest News
              </span>
            </div>
          </div>
          <div className="md:col-span-2 p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4 group-hover:underline">
              {story.title}
            </h2>
            <p className="text-gray-600 text-lg mb-6 line-clamp-3">
              {story.summary}
            </p>
            {engagementInfo}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div 
        className="group cursor-pointer flex gap-4 items-start py-4 border-b last:border-0"
        onClick={() => onClick(story)}
      >
        <div className="w-1/3 flex-shrink-0 h-24 overflow-hidden bg-gray-100">
           <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:underline line-clamp-2">{story.title}</h3>
          <div className="flex items-center text-xs text-gray-500 mt-2">
            <span className="font-bold text-[#bb1919] mr-2 uppercase">{story.category}</span>
            <span>{story.timestamp}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group cursor-pointer bg-white h-full"
      onClick={() => onClick(story)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={story.imageUrl} 
          alt={story.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-[#bb1919] text-white p-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div className="py-4 px-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:underline">
          {story.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {story.summary}
        </p>
        {engagementInfo}
      </div>
    </div>
  );
};

export default ArticleCard;
