#!/bin/bash

# informcja o tym czy tagujemy obraz jako latest, domyslnie true
LATEST=$1
LATEST=${LATEST:-true}

# wczytanie akutlanego numer wersji
IFS="." read -ra VER <<< $(<VERSION)
new_version=$((${VER[2]} + 1))
version=${VER[0]}"."${VER[1]}"."$new_version

# budujemy obraz z aktualna wersjia
docker build -t keycloak-workshop/keycloak:$version .
# dodatkowo tagujemy wersja jako aktualna
docker tag keycloak-workshop/keycloak:$version keycloak-workshop/keycloak:latest

# podbijamy numer wersji
echo $version > VERSION
