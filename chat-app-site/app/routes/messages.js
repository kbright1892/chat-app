import Route from '@ember/routing/route';
import {authenticated} from "ember-cli-gatekeeper";

@authenticated
export default class MessagesRoute extends Route {
  async model() {
    return this.store.findAll('message');
  }
}
