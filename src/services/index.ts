import { Application } from '../declarations';
import user from './user/user.service';
import story from './story/story.service';
import review from './review/review.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(user);
  app.configure(story);
  app.configure(review);
}
