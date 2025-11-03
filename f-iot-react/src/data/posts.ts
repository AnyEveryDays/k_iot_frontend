//! posts.ts (data 폴더)
//: Post 타입의 게시글 데이터를 저장하는 배열 (Post[])

//? mock(가짜의) data
// : 가짜 샘플 데이터
// - 실제 데이터가 아닌, 개발 및 테스트를 목적으로 임의로 만든 가짜 샘플 데이터


import type { Post } from '@/types/Post';

export const posts: Post[] = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut ad"
  }
];
