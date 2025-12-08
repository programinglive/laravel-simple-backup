# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in Laravel Simple Backup, please email security@programinglive.com instead of using the issue tracker.

Please include the following details in your report:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will acknowledge your email within 24 hours and will send a more detailed response within 48 hours indicating the next steps in handling your report.

## Security Considerations

When using Laravel Simple Backup, please be aware of the following security considerations:

### Database Credentials

- Ensure your database credentials are properly configured in your `.env` file
- Never commit `.env` files to version control
- Use strong, unique passwords for database accounts
- Restrict database user permissions to only what is necessary

### Backup Storage

- Store backups in a secure location with restricted access
- Consider encrypting backups at rest
- Regularly test backup restoration to ensure integrity
- Implement a backup retention policy

### Command-line Tools

- Ensure `mysqldump` and `pg_dump` are installed and up to date
- Verify that command-line tools are available only to authorized users
- Consider using SSH keys for remote database backups

### Access Control

- Restrict access to the `backup:database` command
- Use Laravel's authorization features to control who can trigger backups
- Monitor backup operations and maintain audit logs

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Updates

We take security seriously and will release security updates as needed. Subscribe to our releases to be notified of security updates.
