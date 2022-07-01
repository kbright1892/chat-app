import Model, { attr } from '@ember-data/model';

export default class IndividualMessageModel extends Model {
  @attr text;
  @attr date_time;
}
