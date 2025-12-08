import { CheckCircle } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'MySQL Support',
      description: 'Full support for MySQL databases with mysqldump integration',
    },
    {
      title: 'PostgreSQL Support',
      description: 'Complete PostgreSQL backup support using pg_dump',
    },
    {
      title: 'Simple Artisan Command',
      description: 'Easy to use command-line interface with php artisan backup:database',
    },
    {
      title: 'Programmatic API',
      description: 'Use BackupManager class for programmatic backup operations',
    },
    {
      title: 'Multiple Connections',
      description: 'Support for backing up different database connections',
    },
    {
      title: 'Lightweight',
      description: 'Minimal dependencies and fast backup creation',
    },
    {
      title: 'Configurable',
      description: 'Publishable config file for customization',
    },
    {
      title: 'Secure',
      description: 'Follows Laravel best practices for security',
    },
    {
      title: 'File Management',
      description: 'List, delete, and download backup files easily',
    },
    {
      title: 'Error Handling',
      description: 'Comprehensive error handling with meaningful exceptions',
    },
    {
      title: 'Well Tested',
      description: '27 unit tests covering all functionality',
    },
    {
      title: 'MIT Licensed',
      description: 'Open source and free to use in your projects',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Features</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
        Laravel Simple Backup comes packed with features to make database backups simple and reliable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-700 transition">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-50 dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold mb-4">Why Choose Laravel Simple Backup?</h2>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li>✓ <strong>Simple:</strong> Easy to install and use with minimal configuration</li>
          <li>✓ <strong>Lightweight:</strong> No heavy dependencies, fast and efficient</li>
          <li>✓ <strong>Reliable:</strong> Comprehensive test coverage ensures stability</li>
          <li>✓ <strong>Flexible:</strong> Works with MySQL, PostgreSQL, and multiple connections</li>
          <li>✓ <strong>Secure:</strong> Follows Laravel security best practices</li>
          <li>✓ <strong>Open Source:</strong> MIT licensed and actively maintained</li>
        </ul>
      </div>
    </div>
  )
}
