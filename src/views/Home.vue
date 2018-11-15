<template>
    <div>
        <h2>Battle Of Miner Power !</h2>
        <div style="margin-top: 100px">
            <div ref="my-e" style="width: 100%;height:100%;">
            </div>
        </div>
    </div>
</template>

<script>
    let mainBlockHash
    const data2 = {
        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
        "blockHeight": 550188,
        "minePool": "BTC.com",
        "chainDiffculty": "28.28T",
        "children": [
            {
                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                "blockHeight": 550188,
                "minePool": "BTC.com",
                "chainDiffculty": "28.28T",
                "children": [
                    {
                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                        "blockHeight": 550188,
                        "minePool": "BTC.com",
                        "chainDiffculty": "28.28T"
                    },
                    {
                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                        "blockHeight": 550188,
                        "minePool": "BTC.com",
                        "chainDiffculty": "28.28T",
                        "children": [
                            {
                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                "blockHeight": 550188,
                                "minePool": "BTC.com",
                                "chainDiffculty": "28.28T",
                                "children": [
                                    {
                                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                        "blockHeight": 550188,
                                        "minePool": "BTC.com",
                                        "chainDiffculty": "28.28T",
                                        "children": [
                                            {
                                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                "blockHeight": 550188,
                                                "minePool": "BTC.com",
                                                "chainDiffculty": "28.28T",
                                                "children": [
                                                    {
                                                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                        "blockHeight": 550188,
                                                        "minePool": "BTC.com",
                                                        "chainDiffculty": "28.28T",
                                                        "children": [
                                                            {
                                                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                "blockHeight": 550188,
                                                                "minePool": "BTC.com",
                                                                "chainDiffculty": "28.28T",
                                                                "children": [
                                                                    {
                                                                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                        "blockHeight": 550188,
                                                                        "minePool": "BTC.com",
                                                                        "chainDiffculty": "28.28T",
                                                                        "children": [
                                                                            {
                                                                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                "blockHeight": 550188,
                                                                                "minePool": "BTC.com",
                                                                                "chainDiffculty": "28.28T",
                                                                                "children": [
                                                                                    {
                                                                                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                        "blockHeight": 550188,
                                                                                        "minePool": "BTC.com",
                                                                                        "chainDiffculty": "28.28T",
                                                                                        "children": [
                                                                                            {
                                                                                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                "blockHeight": 550188,
                                                                                                "minePool": "BTC.com",
                                                                                                "chainDiffculty": "28.28T",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                        "blockHeight": 550188,
                                                                                                        "minePool": "BTC.com",
                                                                                                        "chainDiffculty": "28.28T",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                                "blockHeight": 550188,
                                                                                                                "minePool": "BTC.com",
                                                                                                                "chainDiffculty": "28.28T",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                                        "blockHeight": 550188,
                                                                                                                        "minePool": "BTC.com",
                                                                                                                        "chainDiffculty": "28.28T",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                                                "blockHeight": 550188,
                                                                                                                                "minePool": "BTC.com",
                                                                                                                                "chainDiffculty": "28.28T",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                                                        "blockHeight": 550188,
                                                                                                                                        "minePool": "BTC.com",
                                                                                                                                        "chainDiffculty": "28.28T",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                                                                "blockHeight": 550188,
                                                                                                                                                "minePool": "BTC.com",
                                                                                                                                                "chainDiffculty": "28.28T",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                                                                        "blockHeight": 550188,
                                                                                                                                                        "minePool": "BTC.com",
                                                                                                                                                        "chainDiffculty": "28.28T",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                                                                                "blockHeight": 550188,
                                                                                                                                                                "minePool": "BTC.com2",
                                                                                                                                                                "chainDiffculty": "28.28T",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
                                                                                                                                                                        "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                                                                                        "blockHeight": 550188,
                                                                                                                                                                        "minePool": "BTC1.com",
                                                                                                                                                                        "chainDiffculty": "28.28T",
                                                                                                                                                                        "children": [
                                                                                                                                                                            {
                                                                                                                                                                                "blockHash": "00000000000000000009f3ff707615878f142bb4c13a50f7162418d107f1f60e",
                                                                                                                                                                                "blockHeight": 550188,
                                                                                                                                                                                "minePool": "BTC4.com",
                                                                                                                                                                                "chainDiffculty": "28.28T"
                                                                                                                                                                            }
                                                                                                                                                                        ]
                                                                                                                                                                    }
                                                                                                                                                                ]
                                                                                                                                                            }
                                                                                                                                                        ]
                                                                                                                                                    }
                                                                                                                                                ]
                                                                                                                                            }
                                                                                                                                        ]
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    const recursionData = (data) => {
            data.name = data.height
            data.value = `diffculty: ${data.chainDifficulty} Pool: ${data.minePool}`
            if (data.tiphash) {
                mainBlockHash = data.tiphash
            }
            if ((data.children) && data.children.length !== -1) {
                    data.children.forEach((item) => {
                        recursionData(item)
                    })
                } else {
                console.log('mainBlockHash', mainBlockHash)
                if (data.blockHash && mainBlockHash && mainBlockHash === data.blockHash) {
                    data.value += ` Main Chain`
                }
            }
            return data
          }
    export default {
        name: 'home',
        data() {
            return {
                treeData: {},
            }
        },
        watch: {
            treeData () {
                this.initE()
            }
        },
        methods: {
            initE() {
                let myChart = echarts.init(this.$refs['my-e'])
                let option = {
                    tooltip: {
                        trigger: 'item',
                        triggerOn: 'mousemove',
                        formatter: '{c}'
                    },
                    series: [
                        {
                            type: 'tree',
                            initialTreeDepth: -1,
                            data: [this.treeData],
                            expandAndCollapse: true,
                            layout: 'orthogonal',
                            position: 'top',
                            left: "2%",
                            right: "2%",
                            top: "8%",
                            bottom: "20%",
                            symbol: "roundRect",
                            symbolSize: [5, 5],
                            symbolKeepAspect: true,
                            roam: 'move',
                            expandAndCollapse: true,
                            distance: 5,
                            itemStyle: {
                                color: '#fff'
                            },
                            lineStyle: {
                                curveness: 1,
                                width: 1
                            },
                            label: {
                                position: 'bottom',
                                align: 'center',
                                fontSize: 12,
                            },


                            animationDurationUpdate: 750
                        }
                    ]
                }
                myChart.setOption(option)
            },
            getData() {
                this.$axios.get('/getdata').then(response =>{
                    this.treeData = recursionData(response)
                }).catch(error=>{
                    console.log(error)
                })
            },
        },
        mounted() {
            this.getData()
            setInterval(() => {
                this.getData()
            }, 2000)
        }
    }
</script>
