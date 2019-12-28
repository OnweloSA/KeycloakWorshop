FROM jboss/keycloak:8.0.1


# wrzucamy skryptu ktore maja uruchomic sie przy starcie aplikacji (odpalaja sie alfabetycznie!)
COPY startup-scripts/ /opt/jboss/startup-scripts/
USER root
RUN chmod +x /opt/jboss/startup-scripts/*
USER jboss
