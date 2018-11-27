import { MetricsPanelCtrl } from 'app/plugins/sdk';
import echarts from './lib/echarts.min';
import EchartREnder from './EchartRender';
import _ from 'lodash';
import TimeSeries from 'app/core/time_series2';


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

// const mapValueDefaults = {北京:null,天津:null,上海:null,重庆:null,河北:null,山西:null,辽宁:null,吉林:null,黑龙江:null,江苏:null,浙江:null,安徽:null,福建:null,江西:null,山东:null,河南:null,湖北:null,湖南:null,广东:null,海南:null,四川:null,贵州:null,云南:null,陕西:null,甘肃:null,青海:null,台湾:null,内蒙古:null,广西:null,西藏:null,宁夏:null,新疆:null,香港:null,澳门:null};


export class EchartCtrl extends MetricsPanelCtrl {

  constructor($scope, $injector) {

    super($scope, $injector);
    _.defaults(this.panel, panelDefaults);

    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));

    // this.mapValue = mapValueDefaults;

  }

  onDataReceived(dataList) {
    if (!dataList) return;

    const data = [];

    //this.series = dataList.map(this.seriesHandler.bind(this));
    // this.setValues(data);
    this.data = dataList;
    this.render(this.data);
  }

  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/grafana-Echart-Demo/editor.html', 2);  //使用plugins.json中的ID找html

  }


  //html中直接绑定的事件
  changeThresholds() {

    //this.updateThresholdData();
    this.render();
  }

  updateThresholdData() {

    this.data.thresholds = this.panel.thresholds.split(',').map((strValue) => {
      return Number(strValue.trim());
    });
    while (_.size(this.panel.dataColors) > _.size(this.data.thresholds) + 1) {
      // too many colors. remove the last one.
      this.panel.dataColors.pop();
    }
    while (_.size(this.panel.dataColors) < _.size(this.data.thresholds) + 1) {
      // not enough colors. add one.
      const newColor = 'rgba(50, 172, 45, 0.97)';
      this.panel.dataColors.push(newColor);
    }
  }

  setValues(data) {
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



  seriesHandler(seriesData) {
    console.log('seriesData:'+JSON.stringify(seriesData));
    const series = new TimeSeries({
      datapoints: seriesData.datapoints,
      alias: seriesData.target,
    });

    series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
    return series;
  }



  link(scope, elem, attrs, ctrl) {

    EchartREnder(scope, elem, attrs, ctrl);
  }
}
EchartCtrl.templateUrl = 'module.html';