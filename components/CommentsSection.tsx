
import React, { useState } from 'react';
import { Comment } from '../types';
import { INITIAL_COMMENTS } from '../constants';

interface CommentsSectionProps {
  storyId: string;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ storyId }) => {
  const [comments, setComments] = useState<Comment[]>(
    INITIAL_COMMENTS.filter(c => c.storyId === storyId)
  );
  const [newComment, setNewComment] = useState('');

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: `c-${Date.now()}`,
      storyId,
      author: 'You (Guest)',
      text: newComment,
      timestamp: 'Just now',
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Discussion ({comments.length})</h3>
        <div className="flex items-center text-sm font-medium text-gray-500">
          <span className="mr-2">Sort by:</span>
          <select className="bg-transparent border-none focus:ring-0 cursor-pointer text-gray-900 font-bold">
            <option>Newest</option>
            <option>Most Liked</option>
          </select>
        </div>
      </div>

      {/* Comment Form */}
      <form onSubmit={handlePostComment} className="mb-10 bg-gray-50 p-6 rounded-lg">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-[#bb1919] text-white flex items-center justify-center font-bold flex-shrink-0">
            Y
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Join the conversation..."
              className="w-full p-4 border rounded-md focus:ring-2 focus:ring-[#bb1919] focus:border-transparent min-h-[100px] resize-none"
            />
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                className="bg-[#bb1919] text-white px-6 py-2 font-bold uppercase tracking-wider text-sm hover:bg-[#961414] transition-colors"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-8">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 group">
              <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold flex-shrink-0 uppercase">
                {comment.author[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <span className="font-bold text-gray-900 mr-2">{comment.author}</span>
                  <span className="text-xs text-gray-400">{comment.timestamp}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">{comment.text}</p>
                <div className="flex items-center space-x-6 text-xs font-bold uppercase tracking-tighter text-gray-500">
                  <button className="flex items-center hover:text-[#bb1919]">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.704a1 1 0 00.996-1.09l-.663-7.133a1 1 0 00-.996-.91H11.5M14 10c0-1.5-1.5-3-3-3m-1 3H4v11h16.19l1.326-9.506a1 1 0 00-1-1.138H14z" />
                    </svg>
                    {comment.likes > 0 ? comment.likes : 'Like'}
                  </button>
                  <button className="hover:text-[#bb1919]">Reply</button>
                  <button className="hover:text-[#bb1919]">Report</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">
            <p>No comments yet. Start the discussion!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
