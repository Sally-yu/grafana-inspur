import echarts from './lib/echarts.min';
import _ from 'lodash';
import dark from  './lib/dark';
import $ from 'jquery';

export default function link(scope, elem, attrs, ctrl,) {
    const container = elem.find('.echarts-panel');
    ctrl.events.on('render', () => {
        render();
        ctrl.renderingCompleted();
    });


    function render() {
        const codetText=ctrl.panel.code;
        const chartMode=ctrl.panel.ChartMode;//echarts图类型，线饼雷达等
        const decimal=ctrl.panel.decimal;//保留小数位

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
                var lastValue;
                if(decimal>=0&&decimal<20){
                    lastValue= _.isArray(lastPoint) ? parseFloat(parseFloat(lastPoint[0]).toFixed(decimal)) : null; //最后时刻value
                }else{
                    lastValue= _.isArray(lastPoint) ? lastPoint[0] : null; //最后时刻value
                }
                
                const lastTime = _.isArray(lastPoint) ? lastPoint[1] : null; //最后时刻time

                const target =serie.target;//查询的名称，查询页面可设置

                lastData.push({ "value": lastValue==null ? 0:lastValue, "time": lastTime, "name":target}); //每个serie装一对值和时间
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
                if(decimal>=0&&decimal<20){
                    tempValue.push(parseFloat(parseFloat(kv[0]).toFixed(decimal)));
                }else{
                    tempValue.push(kv[0]);
                }
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
        
        //雷达图
        var optionRadar= {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 'right',
                data:['某软件','某主食手机','某水果手机','某国产手机']
            },
            
            //底环
            radar: [
                {
                    indicator: [
                        {text: '品牌', max: 100},
                        {text: '内容', max: 100},
                        {text: '可用性', max: 100},
                        {text: '功能', max: 100},
                        {text: '创新', max: 100}
                    ],
                    center: ['50%','50%'],
                    radius: 120
                    
                },
                // {
                //     indicator: [
                //         {text: '外观', max: 100},
                //         {text: '拍照', max: 100},
                //         {text: '系统', max: 100},
                //         {text: '性能', max: 100},
                //         {text: '屏幕', max: 100},
                //         {text: '发热', max: 100},
                //         {text: '待机', max: 100},
                //     ],
                //     radius: 160,
                //     center: ['75%','50%'],
                // },
            ],
            
            
            //数据
            series: [
                {
                    type: 'radar',
                     tooltip: {
                        trigger: 'item'
                    },
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data: [
                        {
                            value: [60,73,85,60,39],
                            name: '某软件'
                        }
                    ]
                },
                // {
                //     type: 'radar',
                    
                //     radarIndex: 1,
                //     data: [
                //         {
                //             value: [50, 80, 90, 95, 65,100,70],
                //             name: '某主食手机'
                //         },
                //         {
                //             value: [95, 80, 95, 90, 93,80,60],
                //             name: '某水果手机'
                //         },
                //         {
                //             value: [85, 95, 90, 90, 80,90,85],
                //             name: '某国产手机'
                //         }
                //     ]
                // },
                
            ]
        };
        


        //选图表类型，页面上可选 editor.tml中
        let option={};
        switch(chartMode){
            case 'line':
            option=optionLine;
            break;
            case 'pie':
            option=optionPie;
            break;
            case 'radar':
            option=optionRadar;
            break;
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