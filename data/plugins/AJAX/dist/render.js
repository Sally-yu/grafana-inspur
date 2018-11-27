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
            // scope.url = sce.trustAsResourceUrl(url);
            $('.ctrl-panel-iframe').attr('src', url);
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
