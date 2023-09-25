<template>
    <div>
        <div class="info_list_content">
            <h1>友善信息库</h1>
            <el-row>
            <el-col :span="5"></el-col>

            <el-col :span="14">
            <el-form  :inline="true" :model="form">
                <el-form-item label="搜索关键词">
                    <el-input v-model="form.keywords"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getData">查询</el-button>
                </el-form-item>
            </el-form>
            <el-divider />
            <el-table :data="infos" :stripe="true">
                <el-table-column label="姓名">
                    <template #default="scope">
                        <router-link :to="'/detail/'+scope.row.id" target="_blank">
                            {{ scope.row.name }}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="professionalType" label="专业类型"/>
                <el-table-column prop="attitudeType" label="态度"/>
                <el-table-column prop="province" label="省份"/>
                <el-table-column prop="city" label="城市"/>
                <el-table-column prop="hospital" label="医院"/>
            </el-table>
            <el-pagination layout="prev, pager, next" :total="item_count" v-model:current-page="form.page" @current-change="getData"/>
            </el-col>
            <el-col :span="5"></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>

    import axios from 'axios'
    export default {
        components: {
        },
        data(){
            return {
                infos: [],
                form : {
                    'keywords': '',
                    'page': '',
                },
                item_count: 0,
            }
        },
        methods: {
            async getData() {
                try {
                    // fetch tasks
                    const response = await axios.postForm('/api/query/',this.form);
                    // set the data returned as tasks
                    this.infos = response.data; 
                    const item_count_response = await axios.postForm('/api/item_count/',this.form);
                    // set the data returned as tasks
                    this.item_count = item_count_response.data;
                } catch (error) {
                    // log the error
                    console.log(error);
                }
            },
        },
        
        created() {
            // Fetch tasks on page load
            this.getData();
        },
        mounted() {
            // called before any tests are run
            window.addEventListener('error', e => {
                console.log(e.message)
                if (e.message.includes('ResizeObserver') || e.message === 'Script error.') {
                    const resizeObserverErrDiv = document.getElementById(
                    'webpack-dev-server-client-overlay-div'
                    )
                    const resizeObserverErr = document.getElementById(
                    'webpack-dev-server-client-overlay'
                    )
                    if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                    }
                    if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                    }
                }
            })
        }
    }
</script>
