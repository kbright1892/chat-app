import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { authenticated } from "ember-cli-gatekeeper";

@authenticated
export default class SubmissionBoxComponent extends Component {
  @service store;
  @service session;
  @tracked input = '';

  @action submit(ev) {
    ev.preventDefault ();
    if (this.input != '') {
      let newSubmission = this.store.createRecord('message', {
        text: this.input,
        user: this.session.currentUser.id,
      });
      newSubmission.save();
      this.input = '';
    }
  }
}
