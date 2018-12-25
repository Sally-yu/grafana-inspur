import _ from 'lodash';
///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import { MetricsPanelCtrl } from 'app/plugins/sdk';
import $ from 'jquery';
import kbn from 'app/core/utils/kbn';
import appEvents from 'app/core/app_events';
import moment from 'moment';


export default function link(scope, elem, attrs, ctrl, sce) {
    ctrl.events.on('render', () => {
        render();
        ctrl.renderingCompleted();
    });



    function render() {
        const url = ctrl.panel.url;
        console.log('url:' + url);
        console.log('UpdateIframe');
        // scope.url = sce.trustAsResourceUrl(url);
        let dom = elem.find('.ctrl-panel-iframe')[0];
        //重要： 普通url请在末尾加/，例如 https://www.baidu.com/ 
        if (dom.src!=url) {  //禁止自动刷新，仅替换链接时可刷新
            dom.src = url;
        }
        console.log('dom:' + dom);
    }
}