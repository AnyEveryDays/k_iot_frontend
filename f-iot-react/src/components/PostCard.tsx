import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '@/types/Post';

//! PostCardProps 타입 정의

interface PostCardProps {
  post: Post;
};

function PostCard({ post } : PostCardProps){
  const handleLikeClick = () => {
    console.log(`좋아요 클릭됨: ${post.id}`);
  }
  return (
    <div style={{padding: '10px', margin: '20px',
      borderRadius: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.6)',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
    }}>
      {/* 1. 제목 길이 조건부 : 제목의 길이가 30이 넘으면 제목 뒤에 (긴 제목) 첨부*/}
      <h3>{post.title.length > 30 ? post.title + "(긴 제목)": post.title} </h3>
      {/* 본문 */}
      <p>{post.body}</p>
      {/* 2. userId가 1인 경우에만 표시 */}
      {post.userId === 1 && <small>🌟 특별회원의 글</small>}
      {/* 3. 버튼 클릭 시 이벤트 핸들러 연결 */}
      <div>
        <button onClick={handleLikeClick}>❤️좋아요</button>
        <br />
        <Link to={`/practice/posts/${post.id}`}>자세히 보기</Link>
      </div>
      
    </div>
  );
}



export default PostCard;
