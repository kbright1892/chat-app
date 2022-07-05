import Route from '@ember/routing/route';

export default class AllmessagesRoute extends Route {
  async model() {
    return this.store.findAll('message');
  }
}
