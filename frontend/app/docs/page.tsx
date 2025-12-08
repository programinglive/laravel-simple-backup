export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Installation</h2>
        <p>Install the package via Composer:</p>
        <pre><code>composer require programinglive/laravel-simple-backup</code></pre>

        <h2>Configuration</h2>
        <p>Publish the configuration file:</p>
        <pre><code>{`php artisan vendor:publish --provider="ProgrammingLive\\LaravelSimpleBackup\\LaravelSimpleBackupServiceProvider" --tag="backup-config"`}</code></pre>

        <h2>Usage</h2>

        <h3>Using Artisan Command</h3>
        <p>Backup the default database connection:</p>
        <pre><code>php artisan backup:database</code></pre>

        <p>Backup a specific connection:</p>
        <pre><code>php artisan backup:database --connection=mysql</code></pre>

        <h3>Using BackupManager Class</h3>
        <pre><code>{`use ProgrammingLive\\LaravelSimpleBackup\\BackupManager;

// Create backup
$filepath = BackupManager::backup();

// List all backups
$backups = BackupManager::getBackups();

// Delete a backup
BackupManager::deleteBackup('backup_mydb_2024-12-08_10-00-00.sql');

// Download a backup
$filepath = BackupManager::downloadBackup('backup_mydb_2024-12-08_10-00-00.sql');`}</code></pre>

        <h3>Using Facade</h3>
        <pre><code>{`use ProgrammingLive\\LaravelSimpleBackup\\Facades\\Backup;

// Create backup
$filepath = Backup::backup();

// List backups
$backups = Backup::getBackups();`}</code></pre>

        <h2>Requirements</h2>
        <ul>
          <li>PHP 8.2 or higher</li>
          <li>Laravel 10.0 or 11.0</li>
          <li>MySQL with <code>mysqldump</code> installed</li>
          <li>PostgreSQL with <code>pg_dump</code> installed</li>
        </ul>

        <h2>Backup File Location</h2>
        <p>Backups are stored in <code>storage/backups</code> directory by default.</p>

        <h2>Backup File Format</h2>
        <p>Backup files are named with the following format:</p>
        <pre><code>backup_database_name_YYYY-MM-DD_HH-MM-SS.sql</code></pre>

        <h2>System Requirements</h2>

        <h3>For MySQL</h3>
        <ul>
          <li><strong>Windows:</strong> Usually included with MySQL installation</li>
          <li><strong>Linux:</strong> <code>sudo apt-get install mysql-client</code></li>
          <li><strong>macOS:</strong> <code>brew install mysql-client</code></li>
        </ul>

        <h3>For PostgreSQL</h3>
        <ul>
          <li><strong>Windows:</strong> Usually included with PostgreSQL installation</li>
          <li><strong>Linux:</strong> <code>sudo apt-get install postgresql-client</code></li>
          <li><strong>macOS:</strong> <code>brew install postgresql</code></li>
        </ul>

        <h2>Configuration Options</h2>
        <p>After publishing the config file, you can customize:</p>
        <pre><code>{`// config/backup.php
return [
    'default_connection' => env('DB_CONNECTION', 'mysql'),
    'backup_path' => storage_path('backups'),
    'keep_backups' => env('BACKUP_KEEP_DAYS', 30),
];`}</code></pre>

        <h2>Error Handling</h2>
        <p>The package throws exceptions for invalid connections or unsupported drivers:</p>
        <pre><code>{`try {
    $filepath = BackupManager::backup('invalid_connection');
} catch (Exception $e) {
    echo "Backup failed: " . $e->getMessage();
}`}</code></pre>

        <h2>Support</h2>
        <p>For issues and feature requests, visit the <a href="https://github.com/programinglive/laravel-simple-backup" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
      </div>
    </div>
  )
}
