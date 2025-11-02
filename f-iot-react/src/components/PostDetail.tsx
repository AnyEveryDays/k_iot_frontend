import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '@/data/posts';
import type { Post } from '@/types/Post';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p: Post) => p.id === Number(id));

  if (!post) return <p>게시글을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>작성자 ID: {post.userId}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
