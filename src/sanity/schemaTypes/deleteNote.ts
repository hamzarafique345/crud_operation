import { client } from "../lib/client"


export async function deleteNote(id: string) {
  return await client.delete(id)
}
