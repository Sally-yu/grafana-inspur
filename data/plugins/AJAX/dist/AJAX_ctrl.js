'use strict';

System.register(['app/plugins/sdk', 'lodash', './render'], function (_export, _context) {
  "use strict";

  var MetricsPanelCtrl, _, IframeRender, _createClass, panelDefaults, AJAXCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_render) {
      IframeRender = _render.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      panelDefaults = {
        backgroundColor: '#63696e',
        itemNormalColor: '#2d3339',
        itemBorderColor: '#404a59',
        itemEmphasisColor: '#2a333d',
        labelColor: '#f5f5f5',
        labelEmphasisColor: '#f5896b',
        dataColors: ['#83fa52', '#f6630e', '#f60e48'],
        thresholds: '0,10',
        thresholdTextColor: '#f5f5f5',
        unit: 'ms'
      };

      _export('AJAXCtrl', AJAXCtrl = function (_MetricsPanelCtrl) {
        _inherits(AJAXCtrl, _MetricsPanelCtrl);

        function AJAXCtrl($scope, $injector, $sce) {
          _classCallCheck(this, AJAXCtrl);

          var _this = _possibleConstructorReturn(this, (AJAXCtrl.__proto__ || Object.getPrototypeOf(AJAXCtrl)).call(this, $scope, $injector, $sce));

          _.defaults(_this.panel, panelDefaults);
          _this.events.on('data-received', _this.onDataReceived.bind(_this));
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          return _this;
        }

        _createClass(AJAXCtrl, [{
          key: 'onDataReceived',
          value: function onDataReceived(dataList) {
            console.log('onDataRec');
            this.updateIframe();
          }
        }, {
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            console.log('onInitEdit');
            this.addEditorTab('Options', 'public/plugins/' + this.pluginId + '/editor.html', 2); //使用plugins.json中的ID找html
          }
        }, {
          key: 'updateIframe',
          value: function updateIframe() {
            console.log('UpdateIframe');

            this.render();
          }
        }, {
          key: 'link',
          value: function link(scope, elem, attrs, ctrl, sce) {
            console.log('Link');
            IframeRender(scope, elem, attrs, ctrl);
          }
        }]);

        return AJAXCtrl;
      }(MetricsPanelCtrl));

      _export('AJAXCtrl', AJAXCtrl);

      AJAXCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=AJAX_ctrl.js.map
