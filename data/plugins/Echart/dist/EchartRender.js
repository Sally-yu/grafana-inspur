'use strict';

System.register(['./lib/echarts.min', 'lodash', './lib/dark', 'jquery'], function (_export, _context) {
    "use strict";

    var echarts, _, dark, $;

    function link(scope, elem, attrs, ctrl) {
        var container = elem.find('.echarts-panel');
        ctrl.events.on('render', function () {
            render();
            ctrl.renderingCompleted();
        });

        function render() {
            var codetText = ctrl.panel.code;
            var chartMode = ctrl.panel.ChartMode; //echarts图类型，线饼雷达等
            var decimal = ctrl.panel.decimal; //保留小数位
            var postion = ctrl.panel.position; //饼图legend位置
            var orient = ctrl.panel.orient; //饼图legend方向


            if (!ctrl.data) return;

            if (!ctrl.map) {}

            // console.log('dark:'+JSON.stringify(dark));//json格式，当变量写入到js文件中读取，

            echarts.registerTheme('dark', dark);
            ctrl.map = echarts.init(container[0], 'dark'); //使用echart官方主题

            console.log('ctrl.data:' + JSON.stringify(ctrl.data));

            //在Echart_Ctrl的data，
            // console.log('code:'+codetText);
            // console.log('chartMode:'+chartMode);
            // console.log('**************'+JSON.stringify(ctrl.data));//传入ctrl的datalist 查询到的所有数据


            var lastData = []; //最后时刻数据
            var allData = []; //全部value time [[[v,t],[v,t],[v,t]...],[[v,t],[v,t],[v,t]...]]
            var legend = []; //每个查询名称

            //处理查询数据库得到的数据
            if (ctrl.data && ctrl.data.length > 0) {
                ctrl.data.forEach(function (serie) {
                    var lastPoint = serie.datapoints[serie.datapoints.length - 1]; //最后时刻点[value,time]
                    var lastValue;
                    if (decimal >= 0 && decimal < 20) {
                        lastValue = _.isArray(lastPoint) ? parseFloat(parseFloat(lastPoint[0]).toFixed(decimal)) : null; //最后时刻value
                    } else {
                        lastValue = _.isArray(lastPoint) ? lastPoint[0] : null; //最后时刻value
                    }

                    var lastTime = _.isArray(lastPoint) ? lastPoint[1] : null; //最后时刻time

                    var target = serie.target; //查询的名称，查询页面可设置

                    lastData.push({ "value": lastValue == null ? 100 : lastValue, "time": lastTime, "name": target }); //每个serie装一对值和时间
                    legend.push(target);
                    allData.push(serie.datapoints); //每个查询一个数组
                });
            }

            var valueList = []; //每个查询的值
            var timeList = []; //每个查询的时刻

            //装到值数组和时间数组
            allData.forEach(function (serie) {
                var tempValue = [];
                var tempTime = [];

                serie.forEach(function (kv) {
                    tempTime.push(new Date(kv[1]).toLocaleString());
                    if (decimal >= 0 && decimal < 20) {
                        tempValue.push(parseFloat(parseFloat(kv[0]).toFixed(decimal)));
                    } else {
                        tempValue.push(kv[0]);
                    }
                });
                valueList.push(tempValue);
                timeList.push(tempTime);
            });

            console.log('lastdata:' + JSON.stringify(lastData));
            console.log('legend:' + JSON.stringify(legend));
            console.log('valueList:' + JSON.stringify(valueList));
            console.log('timeList:' + JSON.stringify(timeList));

            var pieSer = []; //饼图series中的data
            lastData.forEach(function (data) {
                pieSer.push({
                    value: data['value'],
                    name: data['name']
                });
            });

            var lineSer = []; //折线用的series
            for (var i = 0; i < legend.length; i++) {
                var tempDic = {
                    name: legend[i],
                    type: 'line',
                    stack: '',
                    data: valueList[i],
                    areaStyle: ctrl.panel.areaStyle.values ? {} : null, //颜色填充
                    label: { //数值标签
                        normal: {
                            show: ctrl.panel.showLabel.values,
                            position: 'top'
                        }
                    }
                };
                lineSer.push(tempDic);
            }

            //饼图
            var optionPie = {
                title: {
                    text: '',
                    subtext: '',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: orient,
                    left: postion,
                    data: legend,

                    selected: legend
                },
                series: [{
                    name: '占用',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: pieSer,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
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
                    data: legend
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
                    data: timeList[0]
                },
                yAxis: {
                    type: 'value'
                },
                series: lineSer
            };

            //雷达图
            var optionRadar = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    x: 'right',
                    data: ['某软件', '某主食手机', '某水果手机', '某国产手机'],
                    orient: orient,
                    left: postion

                },

                //底环
                radar: [{
                    indicator: [{ text: '品牌', max: 100 }, { text: '内容', max: 100 }, { text: '可用性', max: 100 }, { text: '功能', max: 100 }, { text: '创新', max: 100 }],
                    center: ['50%', '50%'],
                    radius: 120

                }],

                //数据
                series: [{
                    type: 'radar',
                    tooltip: {
                        trigger: 'item'
                    },
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [{
                        value: [60, 73, 85, 60, 39],
                        name: '某软件'
                    }]
                }]
            };

            var optionMap = {};

            //横向柱状图
            var optionBar = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                    orient: orient,
                    left: postion
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                series: [{
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                }, {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                }, {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                }, {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                }, {
                    name: '搜索引擎',
                    type: 'bar',
                    stack: '',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                }]

                //自定义代码
            };var optionCus = codetText ? JSON.parse(codetText) : null;

            //选图表类型，页面上可选 editor.tml中
            var option = {};
            switch (chartMode) {
                case 'line':
                    option = optionLine;
                    break;
                case 'pie':
                    option = optionPie;
                    break;
                case 'radar':
                    option = optionRadar;
                    break;
                case 'map':
                    option = optionMap;
                    break;
                case 'bar':
                    option = optionBar;
                    break;

                case 'custom':
                    //自定义的内容，按照编写的json格式
                    option = optionCus;
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
            };

            ctrl.map.resize(opts);

            /*
            if (ctrl.mapCenterMoved) ctrl.map.panToMapCenter();
                  if (!ctrl.map.legend && ctrl.panel.showLegend) ctrl.map.createLegend();
                  ctrl.map.drawCircles();
            */
        }
    }

    _export('default', link);

    return {
        setters: [function (_libEchartsMin) {
            echarts = _libEchartsMin.default;
        }, function (_lodash) {
            _ = _lodash.default;
        }, function (_libDark) {
            dark = _libDark.default;
        }, function (_jquery) {
            $ = _jquery.default;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=EchartRender.js.map
