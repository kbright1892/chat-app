import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { authenticated } from "ember-cli-gatekeeper";

@authenticated
export default class SubmissionBoxComponent extends Component {
  @service store;
  @tracked input = '';

  @action submit() {
    if (this.input != '') {
      let newSubmission = this.store.createRecord('message', {
        text: this.input,
        user: req.user
      });
      newSubmission.save();
      this.input = '';
    }
  }
}
