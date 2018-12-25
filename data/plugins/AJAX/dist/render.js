'use strict';

System.register(['lodash', 'app/plugins/sdk', 'jquery', 'app/core/utils/kbn', 'app/core/app_events', 'moment'], function (_export, _context) {
    "use strict";

    var _, MetricsPanelCtrl, $, kbn, appEvents, moment;

    function link(scope, elem, attrs, ctrl, sce) {
        ctrl.events.on('render', function () {
            render();
            ctrl.renderingCompleted();
        });

        function render() {
            var url = ctrl.panel.url;
            console.log('url:' + url);
            console.log('UpdateIframe');
            // scope.url = sce.trustAsResourceUrl(url);
            var dom = elem.find('.ctrl-panel-iframe')[0];
            //重要： 普通url请在末尾加/，例如 https://www.baidu.com/ 
            if (dom.src != url) {
                //禁止自动刷新，仅替换链接时可刷新
                dom.src = url;
            }
            console.log('dom:' + dom);
        }
    }

    _export('default', link);

    return {
        setters: [function (_lodash) {
            _ = _lodash.default;
        }, function (_appPluginsSdk) {
            MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
        }, function (_jquery) {
            $ = _jquery.default;
        }, function (_appCoreUtilsKbn) {
            kbn = _appCoreUtilsKbn.default;
        }, function (_appCoreApp_events) {
            appEvents = _appCoreApp_events.default;
        }, function (_moment) {
            moment = _moment.default;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=render.js.map
