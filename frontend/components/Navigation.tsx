'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-sky-600 dark:text-sky-400">
          Laravel Simple Backup
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-sky-600 dark:hover:text-sky-400">
            Home
          </Link>
          <Link href="/docs" className="hover:text-sky-600 dark:hover:text-sky-400">
            Documentation
          </Link>
          <Link href="/features" className="hover:text-sky-600 dark:hover:text-sky-400">
            Features
          </Link>
          <a href="https://github.com/programinglive/laravel-simple-backup" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400">
            GitHub
          </a>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
