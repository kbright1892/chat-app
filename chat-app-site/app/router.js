import EmberRouter from '@ember/routing/router';
import config from 'chat-app-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('message', { path: '/messages/:id' });
  this.route('messages');
  this.route('new', { path: '/messages/new'});
});
