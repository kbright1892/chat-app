import EmberRouter from '@ember/routing/router';
import config from 'chat-app-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('messages', function () {
    this.route('message', { path: '/:id' });
    this.route('messages', { path: '/all' });
    this.route('new');
    this.route('about');
  });

  this.route('auth', function () {
    this.route('sign-in');
  });
});
