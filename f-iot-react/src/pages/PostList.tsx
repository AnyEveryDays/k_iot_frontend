import React from 'react';
import {posts} from '@/data/posts'
import PostCard from '@/components/PostCard';


const PostList = () => {
  return (
    <div>
      <h2>게시글 목록</h2>
      {posts.length > 0 ? (
        posts.map(post=> <PostCard post={post} key={post.id}/>)
      ): (
        <p>게시글이 없습니다.</p>
      )}
    </div>
  )
}

export default PostList;
