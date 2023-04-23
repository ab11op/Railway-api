import { Server } from '@hapi/hapi';
import {getTrainStatus} from '../Controllers/railwayController'

export default function (server: Server) {
    server.route({
      method: 'GET',
      path: '/api/trackTrain',
      handler: getTrainStatus
    });

  }

