rem MSSQL
net stop "SQLWriter"
net stop "SQLTELEMETRY$SQLEXPRESS"
net stop "MSSQL$SQLEXPRESS"

rem MySQL
net stop "MySQL80"

rem postgresql
net stop "postgresql-x64-12"
