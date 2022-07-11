'use strict';



;define("chat-app-site/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("chat-app-site/adapters/account", ["exports", "ember-cli-gatekeeper/adapters/account"], function (_exports, _account) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _account.default;
    }
  });
});
;define("chat-app-site/adapters/application", ["exports", "@ember-data/adapter/rest", "ember-cli-gatekeeper"], function (_exports, _rest, _emberCliGatekeeper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  let ApplicationAdapter = (0, _emberCliGatekeeper.bearer)(_class = class ApplicationAdapter extends _rest.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "host", 'http://localhost:8080');

      _defineProperty(this, "namespace", 'v1');
    }

  }) || _class;

  _exports.default = ApplicationAdapter;
});
;define("chat-app-site/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "chat-app-site/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("chat-app-site/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("chat-app-site/components/g-recaptcha-invisible", ["exports", "ember-cli-google-recaptcha/components/g-recaptcha-invisible"], function (_exports, _gRecaptchaInvisible) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gRecaptchaInvisible.default;
    }
  });
});
;define("chat-app-site/components/g-recaptcha-v2", ["exports", "ember-cli-google-recaptcha/components/g-recaptcha-v2"], function (_exports, _gRecaptchaV) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gRecaptchaV.default;
    }
  });
});
;define("chat-app-site/components/gatekeeper-account-verified", ["exports", "ember-cli-gatekeeper/components/gatekeeper-account-verified"], function (_exports, _gatekeeperAccountVerified) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperAccountVerified.default;
    }
  });
});
;define("chat-app-site/components/gatekeeper-client-authenticated-container", ["exports", "ember-cli-gatekeeper/components/gatekeeper-client-authenticated-container"], function (_exports, _gatekeeperClientAuthenticatedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperClientAuthenticatedContainer.default;
    }
  });
});
;define("chat-app-site/components/gatekeeper-forgot-password", ["exports", "ember-cli-gatekeeper/components/gatekeeper-forgot-password"], function (_exports, _gatekeeperForgotPassword) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperForgotPassword.default;
    }
  });
});
;define("chat-app-site/components/gatekeeper-lock-screen", ["exports", "ember-cli-gatekeeper/components/gatekeeper-lock-screen"], function (_exports, _gatekeeperLockScreen) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperLockScreen.default;
    }
  });
});
;define("chat-app-site/components/gatekeeper-reset-password", ["exports", "ember-cli-gatekeeper/components/gatekeeper-reset-password"], function (_exports, _gatekeeperResetPassword) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperResetPassword.default;
    }
  });
});
;define("chat-app-site/components/gatekeeper-sign-in-with-recaptcha", ["exports", "ember-cli-gatekeeper/components/gatekeeper-sign-in-with-recaptcha"], function (_exports, _gatekeeperSignInWithRecaptcha) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperSignInWithRecaptcha.default;
    }
  });
});
;define("chat-app-site/components/gatekeeper-sign-in", ["exports", "ember-cli-gatekeeper/components/gatekeeper-sign-in"], function (_exports, _gatekeeperSignIn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperSignIn.default;
    }
  });
});
;define("chat-app-site/components/gatekeeper-sign-up-with-recaptcha", ["exports", "ember-cli-gatekeeper/components/gatekeeper-sign-up-with-recaptcha"], function (_exports, _gatekeeperSignUpWithRecaptcha) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperSignUpWithRecaptcha.default;
    }
  });
});
;define("chat-app-site/components/gatekeeper-sign-up", ["exports", "ember-cli-gatekeeper/components/gatekeeper-sign-up"], function (_exports, _gatekeeperSignUp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperSignUp.default;
    }
  });
});
;define("chat-app-site/components/mdc-button-link-to", ["exports", "ember-cli-mdc-button/components/mdc-button-link-to"], function (_exports, _mdcButtonLinkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcButtonLinkTo.default;
    }
  });
});
;define("chat-app-site/components/mdc-button", ["exports", "ember-cli-mdc-button/components/mdc-button"], function (_exports, _mdcButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcButton.default;
    }
  });
});
;define("chat-app-site/components/mdc-checkbox-native-control", ["exports", "ember-cli-mdc-checkbox/components/mdc-checkbox-native-control"], function (_exports, _mdcCheckboxNativeControl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcCheckboxNativeControl.default;
    }
  });
});
;define("chat-app-site/components/mdc-checkbox", ["exports", "ember-cli-mdc-checkbox/components/mdc-checkbox"], function (_exports, _mdcCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcCheckbox.default;
    }
  });
});
;define("chat-app-site/components/mdc-floating-label", ["exports", "ember-cli-mdc-floating-label/components/mdc-floating-label"], function (_exports, _mdcFloatingLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcFloatingLabel.default;
    }
  });
});
;define("chat-app-site/components/mdc-form-field", ["exports", "ember-cli-mdc-form-field/components/mdc-form-field"], function (_exports, _mdcFormField) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcFormField.default;
    }
  });
});
;define("chat-app-site/components/mdc-form", ["exports", "ember-cli-mdc-form/components/mdc-form"], function (_exports, _mdcForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcForm.default;
    }
  });
});
;define("chat-app-site/components/mdc-icon-button-icon", ["exports", "ember-cli-mdc-icon-button/components/mdc-icon-button-icon"], function (_exports, _mdcIconButtonIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIconButtonIcon.default;
    }
  });
});
;define("chat-app-site/components/mdc-icon-button-link-to", ["exports", "ember-cli-mdc-icon-button/components/mdc-icon-button-link-to"], function (_exports, _mdcIconButtonLinkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIconButtonLinkTo.default;
    }
  });
});
;define("chat-app-site/components/mdc-icon-button-toggle", ["exports", "ember-cli-mdc-icon-button/components/mdc-icon-button-toggle"], function (_exports, _mdcIconButtonToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIconButtonToggle.default;
    }
  });
});
;define("chat-app-site/components/mdc-icon-button", ["exports", "ember-cli-mdc-icon-button/components/mdc-icon-button"], function (_exports, _mdcIconButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIconButton.default;
    }
  });
});
;define("chat-app-site/components/mdc-icon", ["exports", "ember-cli-mdc-icon/components/mdc-icon"], function (_exports, _mdcIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcIcon.default;
    }
  });
});
;define("chat-app-site/components/mdc-line-ripple", ["exports", "ember-cli-mdc-line-ripple/components/mdc-line-ripple"], function (_exports, _mdcLineRipple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcLineRipple.default;
    }
  });
});
;define("chat-app-site/components/mdc-notched-outline-leading", ["exports", "ember-cli-mdc-notched-outline/components/mdc-notched-outline-leading"], function (_exports, _mdcNotchedOutlineLeading) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcNotchedOutlineLeading.default;
    }
  });
});
;define("chat-app-site/components/mdc-notched-outline-notch", ["exports", "ember-cli-mdc-notched-outline/components/mdc-notched-outline-notch"], function (_exports, _mdcNotchedOutlineNotch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcNotchedOutlineNotch.default;
    }
  });
});
;define("chat-app-site/components/mdc-notched-outline-trailing", ["exports", "ember-cli-mdc-notched-outline/components/mdc-notched-outline-trailing"], function (_exports, _mdcNotchedOutlineTrailing) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcNotchedOutlineTrailing.default;
    }
  });
});
;define("chat-app-site/components/mdc-notched-outline", ["exports", "ember-cli-mdc-notched-outline/components/mdc-notched-outline"], function (_exports, _mdcNotchedOutline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcNotchedOutline.default;
    }
  });
});
;define("chat-app-site/components/mdc-password-textfield-with-helper-text", ["exports", "ember-cli-mdc-textfield/components/mdc-password-textfield-with-helper-text"], function (_exports, _mdcPasswordTextfieldWithHelperText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcPasswordTextfieldWithHelperText.default;
    }
  });
});
;define("chat-app-site/components/mdc-password-textfield", ["exports", "ember-cli-mdc-textfield/components/mdc-password-textfield"], function (_exports, _mdcPasswordTextfield) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcPasswordTextfield.default;
    }
  });
});
;define("chat-app-site/components/mdc-textarea-with-helper-text", ["exports", "ember-cli-mdc-textfield/components/mdc-textarea-with-helper-text"], function (_exports, _mdcTextareaWithHelperText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextareaWithHelperText.default;
    }
  });
});
;define("chat-app-site/components/mdc-textarea", ["exports", "ember-cli-mdc-textfield/components/mdc-textarea"], function (_exports, _mdcTextarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextarea.default;
    }
  });
});
;define("chat-app-site/components/mdc-textfield-helper-text", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-helper-text"], function (_exports, _mdcTextfieldHelperText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldHelperText.default;
    }
  });
});
;define("chat-app-site/components/mdc-textfield-icon", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-icon"], function (_exports, _mdcTextfieldIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldIcon.default;
    }
  });
});
;define("chat-app-site/components/mdc-textfield-input", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-input"], function (_exports, _mdcTextfieldInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldInput.default;
    }
  });
});
;define("chat-app-site/components/mdc-textfield-textarea", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-textarea"], function (_exports, _mdcTextfieldTextarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldTextarea.default;
    }
  });
});
;define("chat-app-site/components/mdc-textfield-with-helper-text", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield-with-helper-text"], function (_exports, _mdcTextfieldWithHelperText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldWithHelperText.default;
    }
  });
});
;define("chat-app-site/components/mdc-textfield", ["exports", "ember-cli-mdc-textfield/components/mdc-textfield"], function (_exports, _mdcTextfield) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfield.default;
    }
  });
});
;define("chat-app-site/components/message", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <TextBox>
    {{@message.text}}
  </TextBox>
  
  */
  {
    "id": "wgdvprRs",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[1,[30,1,[\"text\"]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"@message\"],false,[\"text-box\"]]",
    "moduleName": "chat-app-site/components/message.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("chat-app-site/components/messages/edit-box", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@ember/service", "@glimmer/tracking"], function (_exports, _component, _templateFactory, _component2, _object, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div>
      <form>
          <Input
                  class = "text-box"
                  @value={{@message.text}}
                  class="light"
                  maxlength="100"
          />
          <button type="submit" class="submit-button" {{on "click" this.update}}>Update</button>
          <button type="button" class="submit-button" {{on "click" this.delete}}>Delete Message</button>
      </form>
  </div>
  */
  {
    "id": "jfE6OPtE",
    "block": "[[[10,0],[12],[1,\"\\n    \"],[10,\"form\"],[12],[1,\"\\n        \"],[8,[39,0],[[24,0,\"text-box\"],[24,0,\"light\"],[24,\"maxlength\",\"100\"]],[[\"@value\"],[[30,1,[\"text\"]]]],null],[1,\"\\n        \"],[11,\"button\"],[24,0,\"submit-button\"],[24,4,\"submit\"],[4,[38,1],[\"click\",[30,0,[\"update\"]]],null],[12],[1,\"Update\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"submit-button\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"delete\"]]],null],[12],[1,\"Delete Message\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[\"@message\"],false,[\"input\",\"on\"]]",
    "moduleName": "chat-app-site/components/messages/edit-box.hbs",
    "isStrictMode": false
  });

  let MessagesEditBoxComponent = (_class = class MessagesEditBoxComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);

      _initializerDefineProperty(this, "msg_id", _descriptor3, this);
    }

    update() {
      let message = this.store.peekRecord('message', this.args.message.id);
      message.save();
      this.router.transitionTo('messages');
    }

    delete() {
      let message = this.store.peekRecord('message', this.args.message.id);
      message.deleteRecord();
      message.save();
      this.router.transitionTo('messages');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "msg_id", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "update", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "delete", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "delete"), _class.prototype)), _class);
  _exports.default = MessagesEditBoxComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, MessagesEditBoxComponent);
});
;define("chat-app-site/components/messages/submission-box", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _tracking, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div>
    <form>
      <Input
        class = "text-box"
        @value={{this.input}}
        class="light"
        placeholder="Enter a new message into the log (max. 100 characters)"
        maxlength="100"
      />
      <button type="submit" class="submit-button" {{on "click" this.submit}}>Submit</button>
    </form>
  </div>
  */
  {
    "id": "8qd5MNCJ",
    "block": "[[[10,0],[12],[1,\"\\n  \"],[10,\"form\"],[12],[1,\"\\n    \"],[8,[39,0],[[24,0,\"text-box\"],[24,0,\"light\"],[24,\"placeholder\",\"Enter a new message into the log (max. 100 characters)\"],[24,\"maxlength\",\"100\"]],[[\"@value\"],[[30,0,[\"input\"]]]],null],[1,\"\\n    \"],[11,\"button\"],[24,0,\"submit-button\"],[24,4,\"submit\"],[4,[38,1],[\"click\",[30,0,[\"submit\"]]],null],[12],[1,\"Submit\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"input\",\"on\"]]",
    "moduleName": "chat-app-site/components/messages/submission-box.hbs",
    "isStrictMode": false
  });

  let SubmissionBoxComponent = (_class = class SubmissionBoxComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "input", _descriptor2, this);
    }

    submit() {
      if (this.input != '') {
        let newSubmission = this.store.createRecord('message', {
          text: this.input
        });
        newSubmission.save();
        this.input = '';
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "input", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "submit", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype)), _class);
  _exports.default = SubmissionBoxComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, SubmissionBoxComponent);
});
;define("chat-app-site/components/nav-bar", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav class="menu">
    <div class = "right chat-logo"></div>
    <LinkTo @route="index" class="menu-index">
      <h1>ChatApp</h1>
    </LinkTo>
    <div class="links">
      <LinkTo @route="new" class="menu-about">
        New
      </LinkTo>
    </div>
    <div class="links">
      <LinkTo @route="messages" class="menu-about">
        All
      </LinkTo>
    </div>
    <div class="links">
      <LinkTo @route="about" class="menu-about">
        About
      </LinkTo>
    </div>
  </nav>
  */
  {
    "id": "uuz62gWc",
    "block": "[[[10,\"nav\"],[14,0,\"menu\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"right chat-logo\"],[12],[13],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"ChatApp\"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n  \"],[10,0],[14,0,\"links\"],[12],[1,\"\\n    \"],[8,[39,0],[[24,0,\"menu-about\"]],[[\"@route\"],[\"new\"]],[[\"default\"],[[[[1,\"\\n      New\\n    \"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"links\"],[12],[1,\"\\n    \"],[8,[39,0],[[24,0,\"menu-about\"]],[[\"@route\"],[\"messages\"]],[[\"default\"],[[[[1,\"\\n      All\\n    \"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"links\"],[12],[1,\"\\n    \"],[8,[39,0],[[24,0,\"menu-about\"]],[[\"@route\"],[\"about\"]],[[\"default\"],[[[[1,\"\\n      About\\n    \"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\"]]",
    "moduleName": "chat-app-site/components/nav-bar.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("chat-app-site/components/test", ["exports", "ember-cli-gatekeeper/components/test"], function (_exports, _test) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _test.default;
    }
  });
});
;define("chat-app-site/components/text-box", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class = "text-box">
    {{yield}}
  </div>
  
  */
  {
    "id": "/wIJb3ip",
    "block": "[[[10,0],[14,0,\"text-box\"],[12],[1,\"\\n  \"],[18,1,null],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "chat-app-site/components/text-box.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("chat-app-site/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("chat-app-site/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("chat-app-site/helpers/app-version", ["exports", "@ember/component/helper", "chat-app-site/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("chat-app-site/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("chat-app-site/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("chat-app-site/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("chat-app-site/helpers/protected-url", ["exports", "ember-cli-gatekeeper/helpers/protected-url"], function (_exports, _protectedUrl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _protectedUrl.default;
    }
  });
  Object.defineProperty(_exports, "protectedUrl", {
    enumerable: true,
    get: function () {
      return _protectedUrl.protectedUrl;
    }
  });
});
;define("chat-app-site/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("chat-app-site/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "chat-app-site/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("chat-app-site/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("chat-app-site/initializers/custom-properties", ["exports", "ember-cli-custom-properties/initializers/custom-properties"], function (_exports, _customProperties) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _customProperties.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _customProperties.initialize;
    }
  });
});
;define("chat-app-site/initializers/ember-blueprint-data", ["exports", "ember-blueprint-data/initializers/ember-blueprint-data"], function (_exports, _emberBlueprintData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberBlueprintData.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberBlueprintData.initialize;
    }
  });
});
;define("chat-app-site/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("chat-app-site/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("chat-app-site/initializers/export-application-global", ["exports", "ember", "chat-app-site/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("chat-app-site/initializers/gatekeeper-session", ["exports", "ember-cli-gatekeeper/initializers/gatekeeper-session"], function (_exports, _gatekeeperSession) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeperSession.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _gatekeeperSession.initialize;
    }
  });
});
;define("chat-app-site/initializers/mdc-snackbar", ["exports", "ember-cli-mdc-snackbar/initializers/mdc-snackbar"], function (_exports, _mdcSnackbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcSnackbar.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _mdcSnackbar.initialize;
    }
  });
});
;define("chat-app-site/initializers/model-fragments", ["exports", "ember-data-model-fragments", "ember-data-model-fragments/ext"], function (_exports, _emberDataModelFragments, _ext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // Import the full module to ensure monkey-patches are applied before any store
  // instances are created. Sad face for side-effects :(
  var _default = {
    name: 'fragmentTransform',
    after: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("chat-app-site/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("chat-app-site/instance-initializers/typography", ["exports", "ember-cli-mdc-typography/instance-initializers/typography"], function (_exports, _typography) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _typography.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _typography.initialize;
    }
  });
});
;define("chat-app-site/models/account-verification", ["exports", "ember-cli-gatekeeper/models/account-verification"], function (_exports, _accountVerification) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _accountVerification.default;
    }
  });
});
;define("chat-app-site/models/account", ["exports", "ember-cli-gatekeeper/models/account"], function (_exports, _account) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _account.default;
    }
  });
});
;define("chat-app-site/models/message", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let MessageModel = (_class = class MessageModel extends _model.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "text", _descriptor, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "text", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = MessageModel;
});
;define("chat-app-site/models/resource-stat", ["exports", "ember-blueprint-data/models/resource-stat"], function (_exports, _resourceStat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _resourceStat.default;
    }
  });
});
;define("chat-app-site/modifiers/custom-property", ["exports", "ember-cli-custom-properties/modifiers/custom-property"], function (_exports, _customProperty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _customProperty.default;
    }
  });
});
;define("chat-app-site/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("chat-app-site/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("chat-app-site/modifiers/mdc-elevation", ["exports", "ember-cli-mdc-elevation/modifiers/mdc-elevation"], function (_exports, _mdcElevation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcElevation.default;
    }
  });
});
;define("chat-app-site/modifiers/mdc-line-ripple", ["exports", "ember-cli-mdc-line-ripple/modifiers/mdc-line-ripple"], function (_exports, _mdcLineRipple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcLineRipple.default;
    }
  });
});
;define("chat-app-site/modifiers/mdc-ripple", ["exports", "ember-cli-mdc-ripple/modifiers/mdc-ripple"], function (_exports, _mdcRipple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcRipple.default;
    }
  });
});
;define("chat-app-site/modifiers/mdc-theme", ["exports", "ember-cli-mdc-theme/modifiers/mdc-theme"], function (_exports, _mdcTheme) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTheme.default;
    }
  });
});
;define("chat-app-site/modifiers/mdc-typography", ["exports", "ember-cli-mdc-typography/modifiers/mdc-typography"], function (_exports, _mdcTypography) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTypography.default;
    }
  });
});
;define("chat-app-site/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("chat-app-site/router", ["exports", "@ember/routing/router", "chat-app-site/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('about');
    this.route('message', {
      path: '/messages/:id'
    });
    this.route('messages');
    this.route('new');
  });
});
;define("chat-app-site/routes/about", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class AboutRoute extends _route.default {}

  _exports.default = AboutRoute;
});
;define("chat-app-site/routes/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexRoute extends _route.default {
    async model() {
      // Get all comments for the current user.
      return this.store.query('user', {
        user: this.session.currentUser.id
      });
    }

  }

  _exports.default = IndexRoute;
  ;
});
;define("chat-app-site/routes/message", ["exports", "@ember/routing/route", "ember-cli-gatekeeper"], function (_exports, _route, _emberCliGatekeeper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  let MessageRoute = (0, _emberCliGatekeeper.authenticated)(_class = class MessageRoute extends _route.default {
    async model() {
      return this.store.find('message', this.args.message.id);
    }

  }) || _class;

  _exports.default = MessageRoute;
});
;define("chat-app-site/routes/messages", ["exports", "@ember/routing/route", "ember-cli-gatekeeper"], function (_exports, _route, _emberCliGatekeeper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  let MessagesRoute = (0, _emberCliGatekeeper.authenticated)(_class = class MessagesRoute extends _route.default {
    async model() {
      return this.store.findAll('message');
    }

  }) || _class;

  _exports.default = MessagesRoute;
});
;define("chat-app-site/routes/new", ["exports", "@ember/routing/route", "ember-cli-gatekeeper"], function (_exports, _route, _emberCliGatekeeper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  let NewRoute = (0, _emberCliGatekeeper.authenticated)(_class = class NewRoute extends _route.default {}) || _class;

  _exports.default = NewRoute;
});
;define("chat-app-site/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("chat-app-site/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("chat-app-site/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("chat-app-site/serializers/account-verification", ["exports", "ember-cli-gatekeeper/serializers/account-verification"], function (_exports, _accountVerification) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _accountVerification.default;
    }
  });
});
;define("chat-app-site/serializers/account", ["exports", "ember-cli-gatekeeper/serializers/account"], function (_exports, _account) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _account.default;
    }
  });
});
;define("chat-app-site/serializers/application", ["exports", "ember-data", "ember-blueprint-data/mixins/serializers/mongodb"], function (_exports, _emberData, _mongodb) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTSerializer.extend(_mongodb.default, {});

  _exports.default = _default;
});
;define("chat-app-site/serializers/resource-stat", ["exports", "ember-blueprint-data/serializers/resource-stat"], function (_exports, _resourceStat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _resourceStat.default;
    }
  });
});
;define("chat-app-site/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("chat-app-site/services/g-recaptcha-v3", ["exports", "ember-cli-google-recaptcha/services/g-recaptcha-v3"], function (_exports, _gRecaptchaV) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gRecaptchaV.default;
    }
  });
});
;define("chat-app-site/services/g-recaptcha", ["exports", "ember-cli-google-recaptcha/services/g-recaptcha"], function (_exports, _gRecaptcha) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gRecaptcha.default;
    }
  });
});
;define("chat-app-site/services/gatekeeper", ["exports", "ember-cli-gatekeeper/services/gatekeeper"], function (_exports, _gatekeeper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gatekeeper.default;
    }
  });
});
;define("chat-app-site/services/local-storage", ["exports", "@onehilltech/ember-cli-storage/services/local-storage"], function (_exports, _localStorage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _localStorage.default;
    }
  });
});
;define("chat-app-site/services/mdc-textarea-configurator", ["exports", "ember-cli-mdc-textfield/services/mdc-textarea-configurator"], function (_exports, _mdcTextareaConfigurator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextareaConfigurator.default;
    }
  });
});
;define("chat-app-site/services/mdc-textfield-configurator", ["exports", "ember-cli-mdc-textfield/services/mdc-textfield-configurator"], function (_exports, _mdcTextfieldConfigurator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mdcTextfieldConfigurator.default;
    }
  });
});
;define("chat-app-site/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("chat-app-site/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("chat-app-site/services/session-storage", ["exports", "@onehilltech/ember-cli-storage/services/session-storage"], function (_exports, _sessionStorage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sessionStorage.default;
    }
  });
});
;define("chat-app-site/services/session", ["exports", "ember-cli-gatekeeper/services/session"], function (_exports, _session) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _session.default;
    }
  });
});
;define("chat-app-site/services/snackbar", ["exports", "ember-cli-mdc-snackbar/services/snackbar"], function (_exports, _snackbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _snackbar.default;
    }
  });
});
;define("chat-app-site/services/storage", ["exports", "@onehilltech/ember-cli-storage/services/storage"], function (_exports, _storage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _storage.default;
    }
  });
});
;define("chat-app-site/services/store", ["exports", "@ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class MyStore extends _store.default {}

  _exports.default = MyStore;
});
;define("chat-app-site/templates/about", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "hS3TuL8Q",
    "block": "[[[1,[28,[35,0],[\"About\"],null]],[1,\"\\n\"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"What do you want me to say?\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"You clicked the About link, didn't you?\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"You're just here to talk to yourself, anyway.\"]],[]]]]]],[],false,[\"page-title\",\"text-box\"]]",
    "moduleName": "chat-app-site/templates/about.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("chat-app-site/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "bXikB4pV",
    "block": "[[[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[8,[39,0],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"body\"],[12],[1,\"\\n    \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,0,\"footer\"],[12],[1,\"\\n  Built by Kristopher Bright\\n\"],[13]],[],false,[\"nav-bar\",\"component\",\"-outlet\"]]",
    "moduleName": "chat-app-site/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("chat-app-site/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "iecYfsct",
    "block": "[[[1,[28,[35,0],[\"Welcome to ChatApp\"],null]],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\"],[8,[39,2],null,null,null],[1,\"\\nPlaceholder for login\"],[10,\"br\"],[12],[13],[1,\"\\nIf already logged in, user should be taken to new\"],[10,\"br\"],[12],[13],[1,\"\\n\\n\\n\"]],[],false,[\"page-title\",\"gatekeeper-sign-in\",\"gatekeeper-sign-up\"]]",
    "moduleName": "chat-app-site/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("chat-app-site/templates/message", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "5ZuqFN42",
    "block": "[[[1,[28,[35,0],[\"Edit Message\"],null]],[1,\"\\n\"],[8,[39,1],null,[[\"@message\"],[[30,1]]],null],[1,\"\\n\"],[10,0],[14,0,\"back-button\"],[12],[1,\"\\n  \"],[8,[39,2],[[24,0,\"submit-button\"]],[[\"@route\"],[\"messages\"]],[[\"default\"],[[[[1,\"Back\"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@model\"],false,[\"page-title\",\"messages/edit-box\",\"link-to\"]]",
    "moduleName": "chat-app-site/templates/message.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("chat-app-site/templates/messages", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "cKBHFLp/",
    "block": "[[[1,[28,[35,0],[\"Messages\"],null]],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1]],null]],null],null,[[[1,\"  \"],[10,0],[14,0,\"edit-row\"],[12],[1,\"\\n    \"],[8,[39,3],null,[[\"@message\"],[[30,2]]],null],[1,\"\\n    \"],[8,[39,4],[[24,0,\"edit-button\"]],[[\"@route\",\"@model\"],[\"message\",[30,2]]],[[\"default\"],[[[[1,\"Edit\"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[2]],null]],[\"@model\",\"message\"],false,[\"page-title\",\"each\",\"-track-array\",\"message\",\"link-to\"]]",
    "moduleName": "chat-app-site/templates/messages.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("chat-app-site/templates/new", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "FeMM5781",
    "block": "[[[1,[28,[35,0],[\"New Message\"],null]],[1,\"\\n\"],[8,[39,1],null,null,[[\"default\"],[[[],[]]]]],[1,\"\\n\"],[10,0],[14,0,\"gen-text\"],[12],[10,\"h3\"],[12],[1,\"Click \\\"All Messages\\\" to view the history\"],[13],[13]],[],false,[\"page-title\",\"messages/submission-box\"]]",
    "moduleName": "chat-app-site/templates/new.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("chat-app-site/transforms/array", ["exports", "ember-data-model-fragments/transforms/array"], function (_exports, _array) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _array.default;
  _exports.default = _default;
});
;define("chat-app-site/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("chat-app-site/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("chat-app-site/transforms/fragment-array", ["exports", "ember-data-model-fragments/transforms/fragment-array"], function (_exports, _fragmentArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _fragmentArray.default;
  _exports.default = _default;
});
;define("chat-app-site/transforms/fragment", ["exports", "ember-data-model-fragments/transforms/fragment"], function (_exports, _fragment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _fragment.default;
  _exports.default = _default;
});
;define("chat-app-site/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("chat-app-site/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('chat-app-site/config/environment', [], function() {
  var prefix = 'chat-app-site';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("chat-app-site/app")["default"].create({"name":"chat-app-site","version":"0.0.0+eb721bec"});
          }
        
//# sourceMappingURL=chat-app-site.map
