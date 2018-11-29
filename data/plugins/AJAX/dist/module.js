'use strict';

System.register(['./AJAX_ctrl', './lib/ajax.css!'], function (_export, _context) {
  "use strict";

  var AJAXCtrl;
  return {
    setters: [function (_AJAX_ctrl) {
      AJAXCtrl = _AJAX_ctrl.AJAXCtrl;
    }, function (_libAjaxCss) {}],
    execute: function () {
      _export('PanelCtrl', AJAXCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
