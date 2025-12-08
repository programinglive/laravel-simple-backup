# Product Requirements Document (PRD)

## Laravel Simple Backup

**Author:** Mahatma Mahardhika <mahatma.mahardhika@programinglive.com>  
**Version:** 1.0.0  
**Last Updated:** December 8, 2024

### Overview

Laravel Simple Backup is a lightweight Laravel package that provides simple database backup functionality for MySQL and PostgreSQL databases.

### Problem Statement

Laravel developers need a simple, straightforward way to backup their databases without complex configurations or heavy dependencies. Existing solutions like spatie/laravel-backup are feature-rich but can be overkill for simple backup needs.

### Goals

1. Provide a simple, easy-to-use database backup solution
2. Support MySQL and PostgreSQL databases
3. Minimal configuration required
4. Lightweight with no heavy dependencies
5. Easy integration with existing Laravel projects

### Target Users

- Laravel developers who need simple database backups
- Small to medium projects that don't need complex backup solutions
- Developers who want quick backup functionality without extensive setup

### Features

#### Core Features (v1.0.0)

1. **Database Backup Command**
   - Artisan command: `php artisan backup:database`
   - Support for MySQL databases using `mysqldump`
   - Support for PostgreSQL databases using `pg_dump`
   - Option to specify database connection

2. **BackupManager Class**
   - Programmatic backup creation
   - List all backups
   - Delete backups
   - Download backups

3. **Configuration**
   - Publishable config file
   - Configurable backup path
   - Support for multiple database connections

#### Future Features (Planned)

- Backup scheduling via Laravel scheduler
- Backup compression (gzip)
- Cloud storage support (S3, Google Cloud)
- Backup encryption
- Email notifications
- Backup retention policies

### Technical Requirements

- PHP 8.2 or higher
- Laravel 10.0 or 11.0
- MySQL with `mysqldump` command available
- PostgreSQL with `pg_dump` command available

### Success Metrics

- Easy installation via Composer
- Backup creation in under 5 seconds for small databases
- Zero configuration required for basic usage
- Clear documentation and examples

### Timeline

- v1.0.0: Initial release with core features
- v1.1.0: Add backup scheduling
- v1.2.0: Add compression support
- v2.0.0: Add cloud storage support

### Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Command-line tools not available | Clear documentation on requirements |
| Large database backup timeout | Add chunking support in future versions |
| Security concerns with credentials | Follow Laravel best practices for env variables |

---

## Testing Strategy

### Test Environment

The package uses **Orchestra Testbench** for testing Laravel packages outside of a full Laravel application. This allows us to:

- Test service provider registration
- Test Artisan commands
- Test configuration merging
- Mock Laravel's environment

### Test Categories

#### 1. Unit Tests (`BackupManagerTest.php`)

Tests for the `BackupManager` class:

| Test | Description |
|------|-------------|
| `test_backup_manager_class_exists` | Verify class exists |
| `test_backup_method_exists` | Verify backup method exists |
| `test_get_backups_method_exists` | Verify getBackups method exists |
| `test_delete_backup_method_exists` | Verify deleteBackup method exists |
| `test_download_backup_method_exists` | Verify downloadBackup method exists |
| `test_backup_throws_exception_for_invalid_connection` | Error handling for invalid DB connection |
| `test_backup_throws_exception_for_unsupported_driver` | Error handling for unsupported drivers |
| `test_get_backups_returns_empty_array_when_no_backups` | Empty state handling |
| `test_get_backups_returns_correct_structure` | Verify backup array structure |
| `test_delete_backup_throws_exception_for_nonexistent_file` | Error handling for missing files |
| `test_delete_backup_removes_existing_file` | Verify file deletion |
| `test_download_backup_throws_exception_for_nonexistent_file` | Error handling for missing files |
| `test_download_backup_returns_correct_path` | Verify correct path returned |
| `test_backup_directory_creation` | Verify directory handling |
| `test_get_backups_only_returns_sql_files` | Filter non-SQL files |
| `test_get_backups_returns_in_reverse_order` | Verify chronological ordering |

#### 2. Command Tests (`BackupCommandTest.php`)

Tests for the `backup:database` Artisan command:

| Test | Description |
|------|-------------|
| `test_backup_command_class_exists` | Verify command class exists |
| `test_backup_command_is_registered` | Verify command registration |
| `test_backup_command_has_correct_signature` | Verify command signature |
| `test_backup_command_has_description` | Verify command description |
| `test_backup_command_fails_with_invalid_connection` | Error handling |
| `test_backup_command_has_connection_option` | Verify --connection option |

#### 3. Service Provider Tests (`ServiceProviderTest.php`)

Tests for the `LaravelSimpleBackupServiceProvider`:

| Test | Description |
|------|-------------|
| `test_service_provider_class_exists` | Verify provider class exists |
| `test_service_provider_is_loaded` | Verify provider is loaded |
| `test_config_is_merged` | Verify config merging |
| `test_backup_command_is_registered` | Verify command registration |
| `test_config_can_be_published` | Verify config publishing |

### Running Tests

```bash
# Run all tests
vendor/bin/phpunit

# Run specific test file
vendor/bin/phpunit tests/BackupManagerTest.php

# Run with coverage
vendor/bin/phpunit --coverage-html coverage
```

### Integration Testing in Laravel Project

To test this package in a real Laravel project:

1. **Create a new Laravel project:**
   ```bash
   composer create-project laravel/laravel test-backup-app
   cd test-backup-app
   ```

2. **Install the package locally:**
   ```json
   // composer.json - add repository
   "repositories": [
       {
           "type": "path",
           "url": "../laravel-simple-backup"
       }
   ]
   ```
   ```bash
   composer require programinglive/laravel-simple-backup:@dev
   ```

3. **Configure database in `.env`:**
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

4. **Run backup command:**
   ```bash
   php artisan backup:database
   ```

5. **Verify backup file:**
   ```bash
   ls -la storage/backups/
   ```

---

## Appendix

### Installation

```bash
composer require programinglive/laravel-simple-backup
```

### Basic Usage

```bash
php artisan backup:database
```

### Programmatic Usage

```php
use ProgrammingLive\LaravelSimpleBackup\BackupManager;

// Create backup
$filepath = BackupManager::backup();

// List backups
$backups = BackupManager::getBackups();

// Delete backup
BackupManager::deleteBackup('backup_mydb_2024-12-08_10-00-00.sql');

// Get backup path for download
$path = BackupManager::downloadBackup('backup_mydb_2024-12-08_10-00-00.sql');
```

### Configuration

Publish the config file:
```bash
php artisan vendor:publish --provider="ProgrammingLive\LaravelSimpleBackup\LaravelSimpleBackupServiceProvider" --tag="backup-config"
```
