import { KeycloakService } from "keycloak-angular";

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: {
      url: 'http://127.0.0.1:8081/auth/',
      realm: 'onwelo-workshop',
      clientId: 'ui'
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false
    },
    enableBearerInterceptor: true
  });
}
