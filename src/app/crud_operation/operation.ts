import { client } from "@/sanity/lib/client";
import { v4 as uuid } from 'uuid';

// Fetch all posts
export async function getPosts() {
  try {
    return await client.fetch('*[_type == "post"]{_id, title, content}');
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

// Create a new post
export async function createPost(title: string, content: string) {
  try {
    return await client.create({
      _type: 'post',
      title,
      content,
      _id: uuid(),
    });
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

// Update an existing post
export async function updatePost(id: string, title: string, content: string) {
  try {
    return await client.patch(id)
      .set({ title, content })
      .commit({ autoGenerateArrayKeys: true });
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
}

// Delete a post
export async function deletePost(id: string) {
  try {
    await client.delete(id);
    return true;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
}
