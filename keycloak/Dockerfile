FROM jboss/keycloak:8.0.1


# importujemy istniejacy realm
ADD realm-export.json /tmp/realm-export.json

ENV KEYCLOAK_IMPORT /tmp/realm-export.json
ENV KEYCLOAK_USER onwelo
ENV KEYCLOAK_PASSWORD workshop

# instalujemy pythona na potrzeby uruchomienia skrytpu do dodawania uzytkownikow
#USER root
#RUN microdnf update -y && microdnf install -y python3
#RUN python3 -m pip install keycloak
#USER jboss

# wrzucamy skryptu ktore maja uruchomic sie przy starcie aplikacji (odpalaja sie alfabetycznie!)
COPY startup-scripts/ /opt/jboss/startup-scripts/
#RUN mkdir -p /opt/jboss/helper-scripts
#COPY helper-scripts/ /opt/jboss/helper-scripts/
USER root
RUN chmod +x /opt/jboss/startup-scripts/*
#RUN chmod +x /opt/jboss/helper-scripts/*
USER jboss