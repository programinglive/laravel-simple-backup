# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.1.0](https://github.com/programinglive/laravel-simple-backup/compare/v0.0.3...v0.1.0) (2026-11-01)


### 📝 Documentation

* backfill missing release notes for v0.0.2 ([4aa6ea7](https://github.com/programinglive/laravel-simple-backup/commit/4aa6ea76464f74421ad560ec99f61c12511a6f27))
* update release notes structure and add v0.0.3 entry ([48573f5](https://github.com/programinglive/laravel-simple-backup/commit/48573f55c8cdafd7a3f6b20f13830047f3a97cf4))


### ✨ Features

* dukung Laravel 13 ([8312409](https://github.com/programinglive/laravel-simple-backup/commit/83124091b22e41e5f22e2ffe0e65c46f15e6d67f))

### [0.0.3](https://github.com/programinglive/laravel-simple-backup/compare/v0.0.2...v0.0.3) (2025-12-08)


### 🐛 Bug Fixes

* relax dependency constraints and add laravel 12 support ([790ff3d](https://github.com/programinglive/laravel-simple-backup/commit/790ff3d82aefde76d02147cf3c44078967943c29))

### [0.0.2](https://github.com/programinglive/laravel-simple-backup/compare/v0.0.1...v0.0.2) (2025-12-08)


### ✨ Features

* add frontend website with modern ui design ([ecca6eb](https://github.com/programinglive/laravel-simple-backup/commit/ecca6eb66bb1ccf321d9c7fb06ed9d6f7362ed17))

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
