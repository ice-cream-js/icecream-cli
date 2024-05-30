#!/usr/bin/env bash

if [ $1 == "make" ]; then
    read -p "? Project name: " input
    git clone https://github.com/ice-cream-js/example/
    clear
    mv example $input
fi

if [ $1 == "docs" ]; then
    echo "Documentation link;"
    echo "https://docs.icecream-js.pages.dev"
fi
