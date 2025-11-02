import React from 'react';
import PostCard from '@/components/PostCard';
import { posts } from '@/data/posts';

const PostList = () => {
  return (
    <div>
      <h2>게시글 목록</h2>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
