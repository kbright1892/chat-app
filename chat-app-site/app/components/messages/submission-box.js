import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SubmissionBoxComponent extends Component {
  @service store;
  @tracked input = '';

  @action submit() {
    console.log('clicked');
    if (this.input != '') {
      let newSubmission = this.store.createRecord('message', {
        text: this.input,
      });

      newSubmission.save();
      this.store.push();
      this.input = '';
    }
  }
}
