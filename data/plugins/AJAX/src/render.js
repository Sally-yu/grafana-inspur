import _ from 'lodash';
///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import {MetricsPanelCtrl} from 'app/plugins/sdk';
import $ from 'jquery';
import kbn from 'app/core/utils/kbn';
import appEvents from 'app/core/app_events';
import moment from 'moment';


export default function link(scope, elem, attrs, ctrl,sce) {
    ctrl.events.on('render', () => {
        render();
        ctrl.renderingCompleted();
    });
    function render() {
        const url=ctrl.panel.url;
        console.log('url:'+url);
        // scope.url = sce.trustAsResourceUrl(url);
        let dom=elem.find('.ctrl-panel-iframe')[0];
        dom.src=url;
                console.log('dom:'+dom);

    }
}