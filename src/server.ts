import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import routes from './routes/routeController'
const connectToServer = async () => {
    const server: Server = new Server({
        port: 3000,
        host: 'localhost'
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, h: ResponseToolkit) => {
            return 'Hello World!';
        }
    });
    await server.register({
        plugin: require('hapi-cors'),
        options: {
          origins: ['*']
        }
      });


      routes(server)
      await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
connectToServer();