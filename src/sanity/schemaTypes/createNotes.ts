import { client } from "../lib/client"


export async function createNote(title: string, content: string) {
  return await client.create({
    _type: "note",
    title,
    content,
  })
}
