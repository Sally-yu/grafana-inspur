import echarts from './lib/echarts.min';
import _ from 'lodash';
import dark from  './lib/dark';

export default function link(scope, elem, attrs, ctrl,) {
    const container = elem.find('.echarts-panel');
    ctrl.events.on('render', () => {
        render();
        ctrl.renderingCompleted();
    });

    function render() {
        const codetText=ctrl.panel.code;
        const chartMode=ctrl.panel.ChartMode;

        if (!ctrl.data) return;

        if (!ctrl.map) {
        }


        // console.log('dark:'+JSON.stringify(dark));//json格式，当变量写入到js文件中读取，

        echarts.registerTheme('dark', dark);
        ctrl.map = echarts.init(container[0],'dark');//使用echart官方主题

        console.log('ctrl.data:'+JSON.stringify(ctrl.data));

        //在Echart_Ctrl的data，
        // console.log('code:'+codetText);
        // console.log('chartMode:'+chartMode);
        // console.log('**************'+JSON.stringify(ctrl.data));//传入ctrl的datalist 查询到的所有数据


        var lastData = [];//最后时刻数据
        var allData = [];//全部value time [[[v,t],[v,t],[v,t]...],[[v,t],[v,t],[v,t]...]]
        var legend=[];//每个查询名称

        //处理查询数据库得到的数据
        if (ctrl.data && ctrl.data.length > 0) {
            ctrl.data.forEach((serie) => {
                const lastPoint = serie.datapoints[serie.datapoints.length - 1];  //最后时刻点[value,time]
                const lastValue = _.isArray(lastPoint) ? lastPoint[0] : null; //最后时刻value
                const lastTime = _.isArray(lastPoint) ? lastPoint[1] : null; //最后时刻time

                const target =serie.target;//查询的名称，查询页面可设置

                lastData.push({ "value": lastValue==null ? 100:lastValue, "time": lastTime, "name":target}); //每个serie装一对值和时间
                legend.push(target);
                allData.push(serie.datapoints);//每个查询一个数组
                });
        }

        var valueList=[];//每个查询的值
        var timeList=[];//每个查询的时刻

        //装到值数组和时间数组
        allData.forEach((serie)=>{
            const tempValue=[];
            const tempTime=[];

            serie.forEach((kv)=>{
                tempTime.push(new Date(kv[1]).toLocaleString());
                tempValue.push(kv[0]);
            });
            valueList.push(tempValue);
            timeList.push(tempTime);
        });

        console.log('lastdata:'+JSON.stringify(lastData));
        console.log('legend:'+JSON.stringify(legend));
        console.log('valueList:'+JSON.stringify(valueList));
        console.log('timeList:'+JSON.stringify(timeList));

        var pieSer=[];//饼图series中的data
        lastData.forEach((data)=>{
            pieSer.push({
                value:data['value'],
                name:data['name']
            });
        });

        var lineSer=[];//折线用的series
        for(var i=0;i<legend.length;i++){
            var tempDic={
                name:legend[i],
                type:'line',
                stack: '',
                data:valueList[i],
                areaStyle:ctrl.panel.areaStyle.values? {}:null,//颜色填充
                label: {                     //数值标签
                    normal: {
                        show: ctrl.panel.showLabel.values,
                        position: 'top'
                    }
                },
            };
            lineSer.push(tempDic);
        }

        console.log('linSer:'+JSON.stringify(lineSer));
        //饼图
        var optionPie = {
            title : {
                text: '',
                subtext: '',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: legend,
        
                selected: legend
            },
            series : [
                {
                    name: '占用',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: pieSer,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        //折线图
        var optionLine = {
            title: {
                text: '',
                textStyle: {
                    color: '#ccc'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                // data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                data:legend
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // data: ['周一','周二','周三','周四','周五','周六','周日']
                data:timeList[0]
            },
            yAxis: {
                type: 'value'
            },
            series:lineSer
        };
        
        var optionRadar={

        }


        //选图表类型，页面上可选 editor.tml中
        let option={};
        switch(chartMode){
            case 'line':
            option=optionLine;
            break;
            case 'pie':
            option=optionPie;
            default:
            break;
        }
        
        //清除原图表以刷新
        ctrl.map.clear();
        ctrl.map.setOption(option);

        var opts = {
            width: 'auto',
            height: ctrl.height,
            silent: false
        }

        ctrl.map.resize(opts);


        /*
        if (ctrl.mapCenterMoved) ctrl.map.panToMapCenter();
    
        if (!ctrl.map.legend && ctrl.panel.showLegend) ctrl.map.createLegend();
    
        ctrl.map.drawCircles();
        */

    }
}