import type { Post } from '@/types/Post';

export const posts: Post[] = [
  { userId: 1, id: 1, title: 'React 시작하기', body: 'React 기초 내용' },
  { userId: 2, id: 2, title: 'TypeScript와 함께', body: 'TS 기초 내용' },
  { userId: 1, id: 3, title: '게시글 제목이 30자를 넘어가는 경우 테스트용 긴 제목입니다.', body: '본문 예시' },
];
