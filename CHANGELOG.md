# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2024-12-08

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
