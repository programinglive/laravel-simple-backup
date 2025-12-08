# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.0.1] - 2024-12-08

### ✨ Features

* Initial release of programinglive/laravel-simple-backup package ([ad627ae](https://github.com/programinglive/laravel-simple-backup/commit/ad627aed98f7f9d9a707a86bcfe5bf213e11a6fa))

### ✅ Tests

* add comprehensive tests and update documentation with author info ([dafec0c](https://github.com/programinglive/laravel-simple-backup/commit/dafec0ca8e6b8ce6c275e14aea61e0b492b1fce5))

### Added
- Initial release of Laravel Simple Backup
- Support for MySQL database backups using `mysqldump`
- Support for PostgreSQL database backups using `pg_dump`
- Artisan command `backup:database` for creating backups
- BackupManager class for programmatic backup operations
- Backup Facade for convenient access
- Configuration file for backup settings
- Automatic backup file management in `storage/backups`
- Support for multiple database connections
- Comprehensive documentation and examples
- PHPUnit tests for core functionality
- Contributing guidelines
