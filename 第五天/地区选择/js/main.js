
const vm = new Vue({
    el: '#app',
    data: {
        select1: '2',
        select2: '',
        select3: '',
        province: [
            {
                provinceName: '北京',
                provinceId: '1',
                city: [
                    {
                        cityName: '北京市',
                        cityId: '11',
                        area: [
                            {
                                areaName: '昌平区',
                                areaId: '111'
                            },
                            {
                                areaName: '朝阳区',
                                areaId: '112'
                            },
                            {
                                areaName: '东城区',
                                areaId: '113'
                            },
                        ]
                    }
                ]
            },
            {
                provinceName: '江苏省',
                provinceId: '2',
                city: [
                    {
                        cityName: '常州市',
                        cityId: '21',
                        area: [
                            {
                                areaName: '金坛区',
                                areaId: '211'
                            },
                            {
                                areaName: '天宁区',
                                areaId: '212'
                            }
                        ]
                    },
                    {
                        cityName: '苏州市',
                        cityId: '22',
                        area: [
                            {
                                areaName: '常熟市',
                                areaId: '221'
                            },
                            {
                                areaName: '姑苏区',
                                areaId: '222'
                            },
                            {
                                areaName: '虎丘区',
                                areaId: '223'
                            },
                            {
                                areaName: '工业园区',
                                areaId: '224'
                            },
                            {
                                areaName: '吴中区',
                                areaId: '225'
                            }
                        ]
                    }
                ]
            },
            {
                provinceName: '安徽省',
                provinceId: '3',
                city: [
                    {
                        cityName: '安庆市',
                        cityId: '31',
                        area: [
                            {
                                areaName: '大观区',
                                areaId: '311'
                            },
                            {
                                areaName: '怀宁县',
                                areaId: '312'
                            }
                        ]
                    },
                    {
                        cityName: '亳州市',
                        cityId: '32',
                        area: [
                            {
                                areaName: '涡阳县',
                                areaId: '321'
                            },
                            {
                                areaName: '蒙城县',
                                areaId: '322'
                            },
                            {
                                areaName: '其他区',
                                areaId: '323'
                            }
                        ]
                    },
                    {
                        cityName: '合肥市',
                        cityId: '33',
                        area: [
                            {
                                areaName: '包河区',
                                areaId: '331'
                            },
                            {
                                areaName: '长丰县',
                                areaId: '332'
                            },
                            {
                                areaName: '肥东县',
                                areaId: '333'
                            },
                            {
                                areaName: '肥西县',
                                areaId: '334'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    computed: {
        getCity() {
            const cityList = this.province.filter(item => item.provinceId === this.select1)[0].city;
            this.select2 = cityList[0].cityId;
            return cityList;
        },
        getArea() {
            const areaList = this.getCity.filter(item => item.cityId === this.select2)[0].area;
            this.select3 = areaList[0].areaId;
            return areaList;
        }
    }
});



























