export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}

export interface PostsResponse {
  posts: Post[];
  limit: number;
  skip: number;
  total: number;
}

export async function getPosts(limit:number, skip:number): Promise<PostsResponse> {
  const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);

  return response.json();
}

export async function getPost(postId: Post['id']): Promise<Post> {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);

  return response.json();
}
