FROM jboss/keycloak:8.0.1


# importujemy istniejacy realm
ADD realm-export.json /tmp/realm-export.json

ENV KEYCLOAK_IMPORT /tmp/realm-export.json
ENV KEYCLOAK_USER onwelo
ENV KEYCLOAK_PASSWORD workshop

# wrzucamy skryptu ktore maja uruchomic sie przy starcie aplikacji (odpalaja sie alfabetycznie!)
COPY startup-scripts/ /opt/jboss/startup-scripts/
USER root
RUN chmod +x /opt/jboss/startup-scripts/*
USER jboss