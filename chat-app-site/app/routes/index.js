import Route from '@ember/routing/route';
import {authenticated} from "ember-cli-gatekeeper";

@authenticated
export default class IndexRoute extends Route {
  /*
  async model () {
    // Get all comments for the current user.
    return this.store.query ('user', { user: this.session.currentUser.id });
  }
   */
};
