import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  //? useParams 호출 시 URL의 변수들을 객체로 반환
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>User Id: {params.id}</h1>
    </div>
  );
};

export default PostDetail;
