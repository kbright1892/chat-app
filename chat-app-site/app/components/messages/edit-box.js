import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MessagesEditBoxComponent extends Component {
  @service store;
  @service router;

  @tracked msg_id;

  @action update() {
    let message = this.store.peekRecord('message', this.args.message.id);
    message.save();
    this.router.transitionTo('messages.messages');
  }

  @action delete() {
    let message = this.store.peekRecord('message', this.args.message.id);
    message.deleteRecord();
    message.save();
    this.router.transitionTo('messages.messages');
  }
}
