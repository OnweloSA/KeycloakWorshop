# build keycloak image
cd keycloak
docker build -t keycloak-workshop/keycloak:latest .
cd ..


# build backend image
cd cellar-storage
gradle build -x test
docker build -t keycloak-workshop/cellar-storage:latest .
cd ..

# build frontend image
cd ui
ng build --base-href=/ui/ --prod
docker build -t keycloak-workshop/ui:latest .
cd ..
