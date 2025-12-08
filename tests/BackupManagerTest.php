<?php

namespace ProgrammingLive\LaravelSimpleBackup\Tests;

use Exception;
use Orchestra\Testbench\TestCase;
use ProgrammingLive\LaravelSimpleBackup\BackupManager;
use ProgrammingLive\LaravelSimpleBackup\LaravelSimpleBackupServiceProvider;

class BackupManagerTest extends TestCase
{
    protected function getPackageProviders($app)
    {
        return [LaravelSimpleBackupServiceProvider::class];
    }

    public function test_backup_manager_can_be_instantiated()
    {
        $this->assertNotNull(BackupManager::class);
    }

    public function test_backup_requires_valid_connection()
    {
        $this->expectException(Exception::class);
        BackupManager::backup('invalid_connection');
    }

    public function test_get_backups_returns_array()
    {
        $backups = BackupManager::getBackups();
        $this->assertIsArray($backups);
    }
}
