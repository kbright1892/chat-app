import RESTAdapter from '@ember-data/adapter/rest';
import { bearer } from 'ember-cli-gatekeeper';

@bearer
export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://localhost:8080';
  namespace = 'v1';
}
