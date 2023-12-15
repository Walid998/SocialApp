// Initializes the `story` service on path `/stories`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Story } from './story.class';
import createModel from '../../models/story.model';
import hooks from './story.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'stories': Story & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/stories', new Story(options, app));

  // custom endpoint
  app.use('/stories/:storyId/reviews', {
    async create(body: any, params: any) {
      const storyId = params.route?.storyId;
      const data = {...body, storyId};
      const newReview = await app.service('reviews').create(data);
      return newReview;
    },
  });

  // Get our initialized service so that we can register hooks
  const service = app.service('stories');

  service.hooks(hooks);
}
