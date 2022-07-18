import Route from '@ember/routing/route';
import { authenticated } from 'ember-cli-gatekeeper';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

@authenticated
export default class MessagesRoute extends Route {}
