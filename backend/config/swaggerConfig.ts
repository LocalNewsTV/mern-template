/**
 * @summary -Swagger configuration for Express API
 *          -Gathers all *.yaml files in swagger folder
 * @author  LocalNewsTV
 */
const swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'App',
      version: '1.0.0',
      description: 'Documentation for the Application API',
    },
    servers: [{ url: '/api' }],
  },
  apis: ['./swagger/**/*.yaml'],
};

export default swaggerConfig;
