// user.service.ts

import { api } from "@/apis/api";

interface User {
  id: number;
  name: string;
  email: string;
}

export const userService = {
  list:async (): Promise<User[]> => {
    const res =await api.get("/users");
    return res.data;
  },
  create: async (user: Omit<User, "id">): Promise<User> => {
    const res = await api.post("/users",user);
    return res.data;
  },
  update: async (id: number, user: Partial<User>): Promise<User> => {
    const res = await api.put(`/users/${id}`,user);
    return res.data;
  },
  // 반환값이 없는 Delete의 경우에는 Promise<void> <- void 가 들어간다
  remove: async (id: number, user: Partial<User>): Promise<void> => {
    await api.delete(`/users/${id}`);
  }
}