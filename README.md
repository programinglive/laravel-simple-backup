# Laravel Simple Backup

A simple Laravel package for backing up MySQL and PostgreSQL databases.

## Features

- 🗄️ Support for MySQL and PostgreSQL databases
- 📦 Easy to install and use
- 🎯 Simple Artisan command for backups
- 💾 Automatic backup file management
- 🔧 Configurable backup settings

## Installation

```bash
composer require programinglive/laravel-simple-backup
```

## Configuration

Publish the configuration file:

```bash
php artisan vendor:publish --provider="ProgrammingLive\LaravelSimpleBackup\LaravelSimpleBackupServiceProvider" --tag="backup-config"
```

This will create a `config/backup.php` file where you can configure your backup settings.

## Usage

### Using Artisan Command

Backup the default database connection:

```bash
php artisan backup:database
```

Backup a specific database connection:

```bash
php artisan backup:database --connection=mysql
```

Or for PostgreSQL:

```bash
php artisan backup:database --connection=pgsql
```

### Using the Backup Manager Class

```php
use ProgrammingLive\LaravelSimpleBackup\BackupManager;

// Backup the default connection
$filepath = BackupManager::backup();

// Backup a specific connection
$filepath = BackupManager::backup('mysql');

// Get all backups
$backups = BackupManager::getBackups();

// Delete a backup
BackupManager::deleteBackup('backup_mydb_2024-12-08_10-30-45.sql');

// Download a backup
$filepath = BackupManager::downloadBackup('backup_mydb_2024-12-08_10-30-45.sql');
```

### Using the Facade

```php
use ProgrammingLive\LaravelSimpleBackup\Facades\Backup;

// Backup the database
$filepath = Backup::backup();

// Get all backups
$backups = Backup::getBackups();
```

## Requirements

- PHP 8.2 or higher
- Laravel 10.0 or higher
- MySQL or PostgreSQL with command-line tools installed

### System Requirements

For MySQL backups, ensure `mysqldump` is installed:
- **Windows**: Usually included with MySQL installation
- **Linux**: `sudo apt-get install mysql-client`
- **macOS**: `brew install mysql-client`

For PostgreSQL backups, ensure `pg_dump` is installed:
- **Windows**: Usually included with PostgreSQL installation
- **Linux**: `sudo apt-get install postgresql-client`
- **macOS**: `brew install postgresql`

## Backup File Location

Backups are stored in the `storage/backups` directory by default. You can change this in the `config/backup.php` file.

## Backup File Format

Backup files are named with the following format:
```
backup_{database_name}_{YYYY-MM-DD_HH-MM-SS}.sql
```

Example:
```
backup_myapp_2024-12-08_10-30-45.sql
```

## License

MIT License. See LICENSE file for details.

## Support

For issues and feature requests, please visit the [GitHub repository](https://github.com/programinglive/laravel-simple-backup).
