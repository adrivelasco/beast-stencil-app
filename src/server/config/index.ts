interface IConfig {
  apiBasePath: string;
  env: string;
  port: string;
}

const config: IConfig = {
  apiBasePath: '/',
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || '5001',
};

export default config;
