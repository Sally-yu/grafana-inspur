import { MetricsPanelCtrl } from 'app/plugins/sdk';
import _ from 'lodash';
import IframeRender from './render';

const panelDefaults = {
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


export class AJAXCtrl extends MetricsPanelCtrl {

  constructor($scope, $injector,$sce) {
    
    super($scope, $injector ,$sce);
    _.defaults(this.panel, panelDefaults);
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
  }

  onDataReceived(dataList) {
    console.log('onDataRec');
    this.updateIframe();
  }

  onInitEditMode() {
    console.log('onInitEdit');
    this.addEditorTab('Options', 'public/plugins/'+this.pluginId+'/editor.html', 2);  //使用plugins.json中的ID找html
  }

  updateIframe(){
    console.log('UpdateIframe');  

    this.render();
  }


  link(scope, elem, attrs, ctrl,sce) {
    console.log('Link');
    IframeRender(scope, elem, attrs, ctrl);
  }
}
AJAXCtrl.templateUrl = 'module.html';