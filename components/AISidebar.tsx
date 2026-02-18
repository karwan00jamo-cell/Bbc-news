
import React, { useState, useEffect } from 'react';
import { Story, AIInsight } from '../types';
import { getAIInsight } from '../services/geminiService';
import CommentsSection from './CommentsSection';

interface AISidebarProps {
  story: Story | null;
  onClose: () => void;
}

const AISidebar: React.FC<AISidebarProps> = ({ story, onClose }) => {
  const [insight, setInsight] = useState<AIInsight | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (story) {
      setLoading(true);
      setError(null);
      getAIInsight(story)
        .then(setInsight)
        .catch(() => setError("Failed to generate AI insights."))
        .finally(() => setLoading(false));
    } else {
      setInsight(null);
    }
  }, [story]);

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end transition-opacity duration-300">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b bg-white sticky top-0 z-10">
          <div className="flex items-center space-x-3">
             <span className="text-xs font-black bg-[#bb1919] text-white px-2 py-1 uppercase">Beacon Reader</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Article Header & Content */}
          <div className="p-8">
            <div className="mb-8">
               <span className="text-[#bb1919] font-black uppercase tracking-widest text-sm">{story.category}</span>
               <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">{story.title}</h2>
               <div className="flex items-center text-sm text-gray-500 border-b pb-6">
                 <span className="font-bold text-gray-900 mr-2">By {story.author}</span>
                 <span>•</span>
                 <span className="ml-2">{story.timestamp}</span>
               </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
              <img src={story.imageUrl} alt="" className="w-full rounded-sm shadow-sm" />
              <p className="text-xl font-medium text-gray-600 italic border-l-4 border-gray-200 pl-6 my-8">
                {story.summary}
              </p>
              <p>{story.content}</p>
              <p>Additional editorial context would go here, providing a deep dive into the subject matter. The Beacon News commitment to accuracy ensures that every detail has been verified by our investigative team.</p>
            </div>

            {/* AI Insights Section */}
            <div className="mt-16 bg-[#f0f4f8] rounded-2xl p-8 border border-blue-100 shadow-inner">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">AI Analytical Insight</h3>
              </div>

              {loading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-white/50 rounded w-3/4"></div>
                  <div className="h-4 bg-white/50 rounded w-full"></div>
                </div>
              ) : error ? (
                <div className="text-red-500 text-sm font-medium">{error}</div>
              ) : insight ? (
                <div className="space-y-6">
                  <p className="text-gray-700 italic">"{insight.summary}"</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-black text-indigo-600 uppercase mb-2">Key Takeaways</h4>
                      <ul className="text-sm space-y-2">
                        {insight.keyPoints.map((p, i) => <li key={i} className="flex gap-2"><span>•</span> {p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-indigo-600 uppercase mb-2">Future Impact</h4>
                      <p className="text-sm text-gray-600">{insight.implications}</p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Comments Section */}
            <CommentsSection storyId={story.id} />
          </div>
        </div>

        <div className="p-4 border-t bg-gray-50 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            Dolashi News Discussion Policy: Please remain respectful in the comments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISidebar;
