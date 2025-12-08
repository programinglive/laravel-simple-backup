
| Version | Date | Highlights |
|---------|------|------------|
| 0.0.3 | 2025-12-08 | relax dependency constraints and add laravel 12 support (790ff3d) |
| 0.0.2 | 2025-12-08 | Initial package setup and configuration |
| 0.0.1 | 2025-12-08 | Initial Release |


## 0.0.3 – 🐛 Bug Fixes

Released on **2025-12-08**.

- relax dependency constraints and add laravel 12 support (790ff3d)

## v0.0.2 (2024-12-08)

### 🐛 Bug Fixes

- Fixed minor configuration issues
- Improved documentation

## v0.0.1 (2024-12-08)

### Initial Release

This is the first release of `programinglive/laravel-simple-backup`, a simple Laravel package for backing up MySQL and PostgreSQL databases.

### ✨ Features

- **Database Backup Command** - Artisan command `php artisan backup:database` for easy backups
- **MySQL Support** - Backup MySQL databases using `mysqldump`
- **PostgreSQL Support** - Backup PostgreSQL databases using `pg_dump`
- **BackupManager Class** - Programmatic backup operations
  - `backup()` - Create database backup
  - `getBackups()` - List all backups
  - `deleteBackup()` - Delete a backup file
  - `downloadBackup()` - Get backup file path for download
- **Configuration** - Publishable config file for customization
- **Multiple Connections** - Support for backing up different database connections

### 📦 Installation

```bash
composer require programinglive/laravel-simple-backup
```

### 🔧 Requirements

- PHP 8.2+
- Laravel 10.0+ or 11.0+
- MySQL with `mysqldump` or PostgreSQL with `pg_dump`

### 📝 Documentation

See [README.md](../../README.md) for full documentation.

### 👤 Author

Mahatma Mahardhika <mahatma.mahardhika@programinglive.com>
