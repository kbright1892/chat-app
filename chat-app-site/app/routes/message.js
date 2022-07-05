import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MessageRoute extends Route {
  @service store;

  async model() {
    return this.store.find('message', this.args.message.id);
  }
}
