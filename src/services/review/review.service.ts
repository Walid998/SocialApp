// Initializes the `review` service on path `/reviews`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Review } from './review.class';
import createModel from '../../models/review.model';
import hooks from './review.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'reviews': Review & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/reviews', new Review(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('reviews');

  service.hooks(hooks);
}
