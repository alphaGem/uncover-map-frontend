<template>
    <div>
        <div class="info_list_content">
            <h1>列表</h1>
            <el-table :data="infos" :stripe="true">
                <el-table-column label="姓名">
                    <template #default="scope">
                        <router-link :to="'/detail/'+scope.row.id">
                            {{ scope.row.name }}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="professionalType" label="专业类型"/>
                <el-table-column prop="attitudeType" label="态度"/>
            </el-table>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                infos: [],
            }
        },
        methods: {
            async getData() {
                try {
                    // fetch tasks
                    const response = await axios.get('/api/tasks/');
                    // set the data returned as tasks
                    this.infos = response.data; 
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
    }
</script>
