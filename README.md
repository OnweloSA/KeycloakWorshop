# KeycloakWorkshop

This project shows simple examples of keycloak usage. It's used as a working base for Onwelo Keycloak workshops.

### Export realm with users

Simple export of realm can be done via the keycloak UI.
To export realm with users from keycloak running n docker container you should run 2 commands listed below.
It's is standard command with small modification changing used port. 
Without this change export would try to run on standard port, which is already used by server, and fail.
```
$ docker exec -it <image_id> /opt/jboss/keycloak/bin/standalone.sh \                     
           -Djboss.socket.binding.port-offset=100 -Dkeycloak.migration.action=export \
           -Dkeycloak.migration.provider=singleFile \
           -Dkeycloak.migration.realmName=onwelo-workshop \
           -Dkeycloak.migration.usersExportStrategy=REALM_FILE \
           -Dkeycloak.migration.file=/tmp/realm-export.json
$ docker cp <image_id>:/tmp/realm-export.json <path_to_projekct>>/KeycloakWorshop/keycloak/
```

## TODO
* build scripts
* how to setup
  * hosts entry
* requirements
  * docker
  * maven
  * docker-compose
  * node
  * npm