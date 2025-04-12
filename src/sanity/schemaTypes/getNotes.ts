import { client } from "../lib/client"

export async function getNotes() {
  return await client.fetch(`*[_type == "note"] | order(_createdAt desc)`)
}
