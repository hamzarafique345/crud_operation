import { client } from "../lib/client"



export async function updateNote(id: string, title: string, content: string) {
  return await client.patch(id).set({ title, content }).commit()
}
