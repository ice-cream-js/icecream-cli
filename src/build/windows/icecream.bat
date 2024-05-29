@echo off

set arg=%1

if "%arg%"=="make" (
    set /p input="? Project name: "
    git clone https://github.com/ice-cream-js/example/
    cls
    ren example %input%
)

if "%arg%"=="docs" (
    echo Documentation link;
    echo https://github.com/ice-cream-js/icecream-js/wiki#Documentation
)