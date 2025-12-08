import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Laravel Simple Backup</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A simple Laravel package for backing up MySQL and PostgreSQL databases.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/features">Features</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/programinglive/laravel-simple-backup" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://packagist.org/packages/programinglive/laravel-simple-backup" target="_blank" rel="noopener noreferrer">Packagist</a></li>
              <li><a href="https://laravel.com" target="_blank" rel="noopener noreferrer">Laravel</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Author</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Mahatma Mahardhika<br />
              <a href="mailto:mahatma.mahardhika@programinglive.com">mahatma.mahardhika@programinglive.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; 2024 Laravel Simple Backup. All rights reserved. | MIT License</p>
        </div>
      </div>
    </footer>
  )
}
