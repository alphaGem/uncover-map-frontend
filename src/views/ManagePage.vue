<template>
    <div>
        <el-form  :inline="true" :model="form">
                <el-form-item label="Username">
                    <el-input v-model="form.user"/>
                </el-form-item>

                <el-form-item label="Password">
                    <el-input v-model="form.password"/>
                </el-form-item>
            </el-form>
        <el-button @click="importData">Import from excel</el-button>
        <el-button @click="exportData">Export to excel</el-button>
    </div>
</template>
<script>

    import axios from 'axios'
    import { ElMessage } from 'element-plus';
    export default {
        components: {
        },
        data(){
            return {
                infos: [],
                form : {
                    'user': '',
                    'password': '', 
                },
                item_count: 0,
            }
        },
        methods: {
            async importData() {
                try {
                    await axios.postForm('/api/import/',this.form);
                    ElMessage({
                                showClose: true,
                                message: 'Import!',
                                type: 'success',
                            })
                }
                catch(error) {
                    ElMessage({
                                showClose: true,
                                message: '没有权限',
                                type: 'error',
                            })
                    console.log(error)
                }
                
            },
            async exportData() {
                try {
                    await axios.postForm('/api/export/',this.form);
                    ElMessage({
                                showClose: true,
                                message: 'Export!',
                                type: 'success',
                            })
                }
                catch(error) {
                    ElMessage({
                                showClose: true,
                                message: '没有权限',
                                type: 'error',
                            })
                    console.log(error)
                }
            },
        },
        
        created() {
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
