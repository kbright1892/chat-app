import Route from '@ember/routing/route';
import { unauthenticated } from 'ember-cli-gatekeeper';

@unauthenticated
export default class AuthRoute extends Route {}
