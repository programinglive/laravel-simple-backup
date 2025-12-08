import Link from 'next/link'
import { Database, Code2, Zap, Shield, ArrowRight, Github, Package } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-8">
            <Package className="w-4 h-4 text-sky-400" />
            <span className="text-sm text-sky-300">v0.0.1 - Now Available</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Laravel Simple Backup
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The simplest way to backup your MySQL and PostgreSQL databases. Zero configuration, maximum reliability.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/docs" className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center gap-2 shadow-lg hover:shadow-xl">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://github.com/programinglive/laravel-simple-backup" target="_blank" rel="noopener noreferrer" className="border-2 border-sky-400 text-sky-300 hover:bg-sky-400/10 px-8 py-4 rounded-lg font-semibold transition flex items-center gap-2">
              <Github className="w-4 h-4" /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Everything you need for reliable database backups</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 transition-all hover:shadow-lg dark:hover:shadow-sky-500/10">
              <div className="bg-sky-100 dark:bg-sky-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/50 transition">
                <Database className="w-7 h-7 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">MySQL & PostgreSQL</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Full support for both MySQL and PostgreSQL databases out of the box.</p>
            </div>

            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 transition-all hover:shadow-lg dark:hover:shadow-sky-500/10">
              <div className="bg-sky-100 dark:bg-sky-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/50 transition">
                <Code2 className="w-7 h-7 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Simple Artisan command or programmatic API for backups.</p>
            </div>

            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 transition-all hover:shadow-lg dark:hover:shadow-sky-500/10">
              <div className="bg-sky-100 dark:bg-sky-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/50 transition">
                <Zap className="w-7 h-7 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Minimal dependencies and blazing fast backup creation.</p>
            </div>

            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 transition-all hover:shadow-lg dark:hover:shadow-sky-500/10">
              <div className="bg-sky-100 dark:bg-sky-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/50 transition">
                <Shield className="w-7 h-7 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Secure</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Follows Laravel best practices for maximum security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Quick Start</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Installation</h3>
              <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                <code>composer require programinglive/laravel-simple-backup</code>
              </pre>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Usage</h3>
              <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                <code>php artisan backup:database</code>
              </pre>
            </div>
          </div>

          <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-semibold mb-6">Programmatic Usage</h3>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
              <code>{`use ProgrammingLive\\LaravelSimpleBackup\\BackupManager;

// Create backup
$filepath = BackupManager::backup();

// List backups
$backups = BackupManager::getBackups();

// Delete backup
BackupManager::deleteBackup('backup_mydb_2024-12-08_10-00-00.sql');`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-900 dark:to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Backing Up Today</h2>
          <p className="text-lg md:text-xl mb-8 text-sky-100">Get your databases protected with just one command. No complex setup required.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/docs" className="bg-white text-sky-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold transition inline-flex items-center gap-2 shadow-lg">
              Read Documentation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://packagist.org/packages/programinglive/laravel-simple-backup" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition">
              View on Packagist
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
