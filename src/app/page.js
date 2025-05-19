// ✅ /app/page.js
'use client'

import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import UserCard from './components/UserCard'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function HomePage() {
  const { data, error, isLoading, mutate } = useSWR(
    'https://randomuser.me/api/?results=8',
    fetcher
  )

  const [lastUpdated, setLastUpdated] = useState(null)

  const handleRefresh = async () => {
    await mutate()
    toast.success('New people loaded!')
    setLastUpdated(new Date())
  }

  useEffect(() => {
    if (data) {
      setLastUpdated(new Date())
    }
  }, [data])

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white border rounded-xl shadow-sm p-5 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-200 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="w-1/2 h-4 bg-gray-200 rounded" />
                <div className="w-2/3 h-4 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) return <p className="text-center text-red-500">Failed to load users.</p>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Meet Random People</h1>
        <div className="text-right">
          <button
            onClick={handleRefresh}
            className="bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-800 transition"
          >
            🔄 Shuffle
          </button>
          {lastUpdated && (
            <p className="text-xs text-gray-500 mt-1">
              Last updated: {Math.round((Date.now() - lastUpdated.getTime()) / 1000)}s ago
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.results.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  )
}
