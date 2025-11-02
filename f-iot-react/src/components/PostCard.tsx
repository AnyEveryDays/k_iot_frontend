import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '@/types/Post';

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const handleLikeClick = () => {
    console.log(`좋아요 클릭됨: ${post.id}`);
  };

  return (
    <div className="post-card" style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>
        {post.title}
        {post.title.length > 30 ? ' (긴 제목)' : ''}
      </h3>
      <p>{post.body}</p>
      {post.userId === 1 && <p>⭐ 특별회원의 글</p>}

      <button onClick={handleLikeClick}>좋아요</button>
      <br />
      <Link to={`/posts/${post.id}`}>자세히 보기</Link>
    </div>
  );
};

export default PostCard;
