<template>
    <div class="home">
        <ve-tree :data="chartData"></ve-tree>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                chartData: {
                    columns: ['name', 'value'],
                    rows: [
                        {
                            name: 'tree1',
                            value: []
                        }
                    ]
                }
            }
        },
        components: {},
        created() {
            this.chartData.rows[0].value[0] = {
                name: 'f',
                value: 1,
                link: 'https://ele.me',
                children: [
                    {
                        name: 'abc',
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
                        name: 'csw',
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
                    }
                ]
            }
        }
    }
</script>
