/* eslint-disable prettier/prettier */
import Model, { attr } from '@ember-data/model';

export default class MessageModel extends Model {
  @attr text;
  @attr('string', {
    defaultValue() {
      let date = new Date;
      let currDate = date.now;
      return currDate.toString();
    },
  }) create_dt;
  @attr ('string', {
    defaultValue() { return null; }
  }) edit_dt;
}
