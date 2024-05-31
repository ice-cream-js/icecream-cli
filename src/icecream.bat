@echo off

if "%1" == "" (
    npx tsx index.ts
) else (
    npx tsx ./commands/%1.ts %2 %3
)
