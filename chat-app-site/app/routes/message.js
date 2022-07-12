import Route from '@ember/routing/route';
import {authenticated} from "ember-cli-gatekeeper";

@authenticated
export default class MessageRoute extends Route {
  async model() {
    return this.store.find('message', this.args.message.id);
  }
}
