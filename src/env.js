let baseURL;

switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://mock.jiketravel.com/mock/5e799906c8f12311082cb31b'
    break;
  case 'production':
    baseURL = 'http://mock.jiketravel.com/mock/5e799906c8f12311082cb31b/api'
    break;
  default:
    baseURL = 'http://mock.jiketravel.com/mock/5e799906c8f12311082cb31b'
    break;
}


export default {
  baseURL
}