import Route from '@ember/routing/route';
import { authenticated } from "ember-cli-gatekeeper";

@authenticated
export default class NewRoute extends Route {}
