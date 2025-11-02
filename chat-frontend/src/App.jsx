import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const [dms, setDms] = useState([
    { id: 1, name: 'Alice', last: 'Hey — are you free?' },
    { id: 2, name: 'Bob', last: 'Sent the files.' },
    { id: 3, name: 'Charlie', last: 'Let’s catch up.' },
  ])
  const [groups, setGroups] = useState([
    { id: 1, name: 'Project X', last: 'Sprint planning at 3pm' },
    { id: 2, name: 'Friends', last: 'Movie night?' },
  ])
  const [selected, setSelected] = useState({ type: 'dm', id: dms[0].id })

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-80 border-r p-4 bg-orange-50 flex flex-col">
        <div className="text-xl font-semibold mb-4">Chats</div>

        <input
          className="mb-3 p-2 rounded border"
          placeholder="Search chats..."
          aria-label="Search chats"
        />

        <div className="mb-4">
          <div className="text-sm font-semibold mb-2">Direct Messages</div>
          <ul className="space-y-1">
            {dms.map((dm) => (
              <li
                key={dm.id}
                onClick={() => setSelected({ type: 'dm', id: dm.id })}
                className={`p-2 rounded cursor-pointer ${
                  selected.type === 'dm' && selected.id === dm.id
                    ? 'bg-blue-100'
                    : 'hover:bg-orange-100'
                }`}
              >
                <div className="font-medium">{dm.name}</div>
                <div className="text-xs text-gray-500">{dm.last}</div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-2">Groups</div>
          <ul className="space-y-1 border-gray-100 rounded-2xl">
            {groups.map((g) => (
              <li
                key={g.id}
                onClick={() => setSelected({ type: 'group', id: g.id })}
                className={`p-2 rounded cursor-pointer ${
                  selected.type === 'group' && selected.id === g.id
                    ? 'bg-blue-100'
                    : 'hover:bg-orange-100'
                }`}
              >
                <div className="font-medium">{g.name}</div>
                <div className="text-xs text-gray-500">{g.last}</div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main chat area */}
      <main className="flex-1 p-6">
        <div className="text-xl border-black text-orange-300">
          {dms.find((dm) => dm.id === selected.id)?.name ||
          groups.find((g) => g.id === selected.id)?.name || 'Select a chat'}  
        </div>

        <div className="mt-4 border rounded p-4 h-full bg-white flex flex-col min-h-0">
          {/* Scrollable messages area that stays pinned to the bottom */}
          <div className="flex-1  m-2 overflow-auto flex flex-col justify-end space-y-2">
            <div className='border rounded-xl mt-2 p-2 w-fit'>{/* Gray message */}Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.</div>
            <div className='border rounded-xl mt-2 p-2 w-fit bg-amber-200 self-end'>{/* Orange message (mine) */}Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est.</div>
          </div>
          
          <div className='flex items-center justify-center flex-row'>
            <input
              className="p-2 rounded border w-3xl"
              placeholder="Type a message..."
              aria-label="Type a message"
            />
            <button className="mx-2 px-4 py-2 bg-green-500 text-white rounded transition-colors hover:bg-green-600 hover:cursor-pointer active:bg-green-700">Send</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
