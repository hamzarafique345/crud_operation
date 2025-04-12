// 'use client'


// import { createNote } from '@/sanity/schemaTypes/createNotes'
// import { deleteNote } from '@/sanity/schemaTypes/deleteNote'
// import { getNotes } from '@/sanity/schemaTypes/getNotes'
// import { updateNote } from '@/sanity/schemaTypes/updateNote'
// import { useEffect, useState } from 'react'
// import toast, { Toaster } from 'react-hot-toast'

// interface Note {
//   _id: string
//   title: string
//   content: string
// }

// export default function Home() {
//   const [notes, setNotes] = useState<Note[]>([])
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')
//   const [loading, setLoading] = useState(true)
//   const [editingId, setEditingId] = useState<string | null>(null)
//   const [editTitle, setEditTitle] = useState('')
//   const [editContent, setEditContent] = useState('')

//   const fetchData = async () => {
//     setLoading(true)
//     const data = await getNotes()
//     setNotes(data)
//     setLoading(false)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   const handleCreate = async () => {
//     if (!title || !content) return
//     toast.promise(createNote(title, content), {
//       loading: 'Creating...',
//       success: 'Note created!',
//       error: 'Failed to create.',
//     })
//     setTitle('')
//     setContent('')
//     await fetchData()
//   }

//   const handleDelete = async (id: string) => {
//     toast.promise(deleteNote(id), {
//       loading: 'Deleting...',
//       success: 'Note deleted!',
//       error: 'Failed to delete.',
//     })
//     await fetchData()
//   }

//   const handleEdit = (note: Note) => {
//     setEditingId(note._id)
//     setEditTitle(note.title)
//     setEditContent(note.content)
//   }

//   const handleEditSave = async () => {
//     if (!editingId) return
//     toast.promise(updateNote(editingId, editTitle, editContent), {
//       loading: 'Updating...',
//       success: 'Note updated!',
//       error: 'Failed to update.',
//     })
//     setEditingId(null)
//     await fetchData()
//   }

//   return (
//     <main className="min-h-screen bg-gray-100">
//       <Toaster />
//       {/* Navbar */}
//       <nav className="bg-indigo-700 text-white py-4 px-6 sticky top-0 shadow-md z-10">
//         <h1 className="text-2xl font-bold">📘 QuickNotes</h1>
//       </nav>

//       {/* Create Note */}
//       <section className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow">
//         <h2 className="text-xl font-semibold mb-4">Create a new note</h2>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title"
//           className="w-full mb-2 p-2 border rounded"
//         />
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Content"
//           className="w-full mb-2 p-2 border rounded"
//         />
//         <button
//           onClick={handleCreate}
//           className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
//         >
//           Add Note
//         </button>
//       </section>

//       {/* Notes List */}
//       <section className="max-w-2xl mx-auto mt-6 px-4">
//         {loading ? (
//           <p className="text-center text-blue-600 font-semibold">Loading...</p>
//         ) : notes.length === 0 ? (
//           <p className="text-center text-gray-500">No notes found.</p>
//         ) : (
//           notes.map((note) => (
//             <div
//               key={note._id}
//               className="bg-white shadow p-4 rounded mb-4 flex flex-col"
//             >
//               {editingId === note._id ? (
//                 <>
//                   <input
//                     value={editTitle}
//                     onChange={(e) => setEditTitle(e.target.value)}
//                     className="w-full border p-2 mb-2 rounded"
//                   />
//                   <textarea
//                     value={editContent}
//                     onChange={(e) => setEditContent(e.target.value)}
//                     className="w-full border p-2 mb-2 rounded"
//                   />
//                   <div className="flex gap-2">
//                     <button
//                       onClick={handleEditSave}
//                       className="bg-green-600 text-white px-4 py-1 rounded"
//                     >
//                       Save
//                     </button>
//                     <button
//                       onClick={() => setEditingId(null)}
//                       className="bg-gray-400 text-white px-4 py-1 rounded"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <h3 className="text-lg font-bold text-gray-800">
//                     {note.title}
//                   </h3>
//                   <p className="text-gray-600 mb-3">{note.content}</p>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleEdit(note)}
//                       className="bg-yellow-500 text-white px-3 py-1 rounded"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(note._id)}
//                       className="bg-red-600 text-white px-3 py-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))
//         )}
//       </section>
//     </main>
//   )
// }
'use client'

import { createNote } from '@/sanity/schemaTypes/createNotes'
import { deleteNote } from '@/sanity/schemaTypes/deleteNote'
import { getNotes } from '@/sanity/schemaTypes/getNotes'
import { updateNote } from '@/sanity/schemaTypes/updateNote'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface Note {
  _id: string
  title: string
  content: string
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [editContent, setEditContent] = useState('')

  // Fetch data function
  const fetchData = async () => {
    setLoading(true)
    const data = await getNotes()
    setNotes(data)
    setLoading(false)
  }

  // Fetch data on component mount and set up polling
  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 1000) // Poll every 5 seconds
    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  // Create note function
  const handleCreate = async () => {
    if (!title || !content) return
    toast.promise(createNote(title, content), {
      loading: 'Creating...',
      success: 'Note created!',
      error: 'Failed to create.',
    })
    setTitle('')
    setContent('')
    await fetchData() // Fetch new data immediately after creation
  }

  // Delete note function
  const handleDelete = async (id: string) => {
    toast.promise(deleteNote(id), {
      loading: 'Deleting...',
      success: 'Note deleted!',
      error: 'Failed to delete.',
    })
    await fetchData() // Fetch new data immediately after deletion
  }

  // Handle edit function
  const handleEdit = (note: Note) => {
    setEditingId(note._id)
    setEditTitle(note.title)
    setEditContent(note.content)
  }

  // Save edited note
  const handleEditSave = async () => {
    if (!editingId) return
    toast.promise(updateNote(editingId, editTitle, editContent), {
      loading: 'Updating...',
      success: 'Note updated!',
      error: 'Failed to update.',
    })
    setEditingId(null)
    await fetchData() // Fetch new data immediately after update
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Toaster />
      {/* Navbar */}
      <nav className="bg-indigo-700 text-white py-4 px-6 sticky top-0 shadow-md z-10">
        <h1 className="text-2xl font-bold">📘 QuickNotes</h1>
      </nav>

      {/* Create Note */}
      <section className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Create a new note</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          onClick={handleCreate}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </section>

      {/* Notes List */}
      <section className="max-w-2xl mx-auto mt-6 px-4">
        {loading ? (
          <p className="text-center text-blue-600 font-semibold">Loading...</p>
        ) : notes.length === 0 ? (
          <p className="text-center text-gray-500">No notes found.</p>
        ) : (
          notes.map((note) => (
            <div
              key={note._id}
              className="bg-white shadow p-4 rounded mb-4 flex flex-col"
            >
              {editingId === note._id ? (
                <>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full border p-2 mb-2 rounded"
                  />
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full border p-2 mb-2 rounded"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleEditSave}
                      className="bg-green-600 text-white px-4 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-400 text-white px-4 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-gray-800">
                    {note.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{note.content}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(note)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(note._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </section>
    </main>
  )
}
