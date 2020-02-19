export const environment = {
  production: true,
  serverUrl: 'http://localhost:8080',
  proxy: {
    'localhost:4201': 'http://localhost:8081',
    'localhost:4202': 'http://localhost:8082',
    'localhost:4203': 'http://localhost:8083'
  }
};
