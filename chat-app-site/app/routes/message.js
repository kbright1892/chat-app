import Route from '@ember/routing/route';


export default class MessageRoute extends Route {
  async model() {
    return this.store.find('message', this.args.message.id);
  }
}
