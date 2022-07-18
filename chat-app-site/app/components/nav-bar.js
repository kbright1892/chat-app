import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @service session;
  @service router;

  @action
  async logOut() {
    await this.session.signOut();
    this.router.transitionTo('auth.sign-in');
  }
}
