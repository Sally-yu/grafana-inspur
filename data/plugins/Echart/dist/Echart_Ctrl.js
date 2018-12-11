'use strict';

System.register(['app/plugins/sdk', './lib/echarts.min', './EchartRender', 'lodash', 'app/core/utils/kbn', 'app/core/time_series2'], function (_export, _context) {
  "use strict";

  var MetricsPanelCtrl, echarts, EchartREnder, _, kbn, TimeSeries, _createClass, panelDefaults, EchartCtrl;

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  return {
    setters: [function (_appPluginsSdk) {
      MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
    }, function (_libEchartsMin) {
      echarts = _libEchartsMin.default;
    }, function (_EchartRender) {
      EchartREnder = _EchartRender.default;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_appCoreUtilsKbn) {
      kbn = _appCoreUtilsKbn.default;
    }, function (_appCoreTime_series) {
      TimeSeries = _appCoreTime_series.default;
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

      panelDefaults = _defineProperty({
        backgroundColor: '#63696e',
        itemNormalColor: '#2d3339',
        itemBorderColor: '#404a59',
        itemEmphasisColor: '#2a333d',
        labelColor: '#f5f5f5',
        labelEmphasisColor: '#f5896b',
        dataColors: ['#83fa52', '#f6630e', '#f60e48'],
        thresholds: '0,10',
        thresholdTextColor: '#f5f5f5',
        unit: 'ms',
        decimal: 2,
        ChartMode: 'line',
        TableMode: 'time',
        showLabel: {
          values: true
        },
        areaStyle: {
          values: true
        },
        barStack: {
          values: false
        },
        barLabel: {
          values: false
        },
        asRing: {
          values: false
        },
        position: 'center',
        orient: 'horizontal',
        axis: 'y for value'
      }, 'unit', 'short');

      _export('EchartCtrl', EchartCtrl = function (_MetricsPanelCtrl) {
        _inherits(EchartCtrl, _MetricsPanelCtrl);

        function EchartCtrl($scope, $injector) {
          _classCallCheck(this, EchartCtrl);

          var _this = _possibleConstructorReturn(this, (EchartCtrl.__proto__ || Object.getPrototypeOf(EchartCtrl)).call(this, $scope, $injector));

          _.defaults(_this.panel, panelDefaults);
          _this.setUnitFormat({ value: _this.panel.unit || 'short' });

          _this.events.on('data-received', _this.onDataReceived.bind(_this));
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));

          // this.mapValue = mapValueDefaults;

          return _this;
        }

        _createClass(EchartCtrl, [{
          key: 'onDataReceived',
          value: function onDataReceived(dataList) {
            if (!dataList) return;

            var data = [];

            //this.series = dataList.map(this.seriesHandler.bind(this));
            // this.setValues(data);
            this.data = dataList;
            this.render(this.data);
          }
        }, {
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.addEditorTab('Options', 'public/plugins/grafana-Echart-Demo/editor.html', 2); //使用plugins.json中的ID找html
            this.unitFormats = kbn.getUnitFormats();
          }
        }, {
          key: 'setUnitFormat',
          value: function setUnitFormat(subItem) {
            var _this2 = this;

            this.panel.unit = subItem.value;
            this.panel.itemName = [subItem.value, subItem.value];
            this.panel.subDomainTitleFormat = {
              empty: '{date}',
              filled: { format: function format(options) {
                  return _this2.formatValue(options.count, options) + ' ' + options.connector + ' ' + options.date;
                } }
            };
            this.panel.legendTitleFormat = {
              lower: { format: function format(options) {
                  return 'less than ' + _this2.formatValue(options.min, options);
                } },
              upper: { format: function format(options) {
                  return 'more than ' + _this2.formatValue(options.max, options);
                } },
              inner: { format: function format(options) {
                  return 'between ' + _this2.formatValue(options.down, options) + ' and ' + _this2.formatValue(options.up, options);
                } }
            };
            this.render();
          }
        }, {
          key: 'changeThresholds',
          value: function changeThresholds() {

            //this.updateThresholdData();
            this.render();
          }
        }, {
          key: 'updateThresholdData',
          value: function updateThresholdData() {

            this.data.thresholds = this.panel.thresholds.split(',').map(function (strValue) {
              return Number(strValue.trim());
            });
            while (_.size(this.panel.dataColors) > _.size(this.data.thresholds) + 1) {
              // too many colors. remove the last one.
              this.panel.dataColors.pop();
            }
            while (_.size(this.panel.dataColors) < _.size(this.data.thresholds) + 1) {
              // not enough colors. add one.
              var newColor = 'rgba(50, 172, 45, 0.97)';
              this.panel.dataColors.push(newColor);
            }
          }
        }, {
          key: 'setValues',
          value: function setValues(data) {
            // if (this.series && this.series.length > 0) {

            //   let lastkv = [];//最后时刻value time
            //   let allkv = [];//全部value time [[[v,t],[v,t],[v,t]...],[[v,t],[v,t],[v,t]...]]
            //   this.series.forEach((serie) => {
            //     const lastPoint = serie.datapoints[serie.datapoints.length - 1];  //最后时刻点[value,time]
            //     const lastValue = _.isArray(lastPoint) ? lastPoint[0] : null; //最后时刻value
            //     const lastTime = _.isArray(lastPoint) ? lastPoint[1] : null; //最后时刻time

            //     lastkv.push({ value: lastValue, time: lastTime }); //每个serie装一对值和时间
            //     const kvs = [];
            //     serie.datapoints.forEach((point) => {
            //       kvs.push([point[0], point[1]]);
            //     });
            //     allkv.push(kvs);
            //   });
            //   data.push(lastkv);
            //   data.push(allkv);
            // }

          }
        }, {
          key: 'seriesHandler',
          value: function seriesHandler(seriesData) {
            console.log('seriesData:' + JSON.stringify(seriesData));
            var series = new TimeSeries({
              datapoints: seriesData.datapoints,
              alias: seriesData.target
            });

            series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
            return series;
          }
        }, {
          key: 'link',
          value: function link(scope, elem, attrs, ctrl) {

            EchartREnder(scope, elem, attrs, ctrl);
          }
        }]);

        return EchartCtrl;
      }(MetricsPanelCtrl));

      _export('EchartCtrl', EchartCtrl);

      EchartCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=Echart_Ctrl.js.map
