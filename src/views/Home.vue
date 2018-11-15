<template>
    <div ref="my-e" style="width: 100%;height:400px;">
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                treeData: {}
            }
        },
        methods: {
            initE() {
                let myChart = echarts.init(this.$refs['my-e'])
                let option = {
                    tooltip: {
                        trigger: 'item',
                        triggerOn: 'mousemove'
                    },
                    series: [
                        {
                            type: 'tree',
                            data: [this.treeData],
                            left: '2%',
                            right: '2%',
                            top: '8%',
                            bottom: '20%',
                            symbol: 'emptyCircle',
                            expandAndCollapse: true,

                            label: {
                                normal: {
                                    position: 'top',
                                    rotate: -90,
                                    verticalAlign: 'middle',
                                    align: 'right',
                                    fontSize: 9
                                }
                            },

                            leaves: {
                                label: {
                                    normal: {
                                        position: 'bottom',
                                        rotate: -90,
                                        verticalAlign: 'middle',
                                        align: 'left'
                                    }
                                }
                            },

                            animationDurationUpdate: 750
                        }
                    ]
                }
                myChart.setOption(option)
            }
        },
        mounted() {
            this.treeData = {
                name: 'f',
                value: 1,
                link: 'https://ele.me',
                children: [
                    {
                        name: 'a',
                        value: 1,
                        link: 'https://ele.me',
                        children: [
                            {
                                name: 'a-a',
                                link: 'https://ele.me',
                                value: 2
                            },
                            {
                                name: 'a-b',
                                link: 'https://ele.me',
                                value: 2
                            }
                        ]
                    },
                    {
                        name: 'b',
                        value: 1,
                        link: 'https://ele.me',
                        children: [
                            {
                                name: 'b-a',
                                link: 'https://ele.me',
                                value: 2
                            },
                            {
                                name: 'b-b',
                                link: 'https://ele.me',
                                value: 2
                            }
                        ]
                    },
                    {
                        name: 'c',
                        value: 3,
                        link: 'https://ele.me',
                        children: [
                            {
                                name: 'c-a',
                                link: 'https://ele.me',
                                value: 4
                            },
                            {
                                name: 'c-b',
                                link: 'https://ele.me',
                                value: 2
                            }
                        ]
                    },
                    {
                        name: 'd',
                        value: 3,
                        link: 'https://ele.me',
                        children: [
                            {
                                name: 'd-a',
                                link: 'https://ele.me',
                                value: 4
                            },
                            {
                                name: 'd-b',
                                link: 'https://ele.me',
                                value: 2
                            }
                        ]
                    }
                ]
            }
            this.initE()
        }
    }
</script>
