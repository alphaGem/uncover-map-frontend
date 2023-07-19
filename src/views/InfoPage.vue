<template>
    <div>
        <div class="info_content">
            <el-row>
            <el-col :span="5"></el-col>
            <el-col :span="14">
            <el-descriptions title="信息" :column="1">
                <el-descriptions-item label="姓名">{{ info.name }}</el-descriptions-item>
                <el-descriptions-item label="专业类型">{{ info.professionalType }}</el-descriptions-item>
                <el-descriptions-item label="态度">{{ info.attitudeType }}</el-descriptions-item>
                <el-descriptions-item label="是否通过志愿者走访验证">{{ info.isVerify }}</el-descriptions-item>
                
                <el-descriptions-item label="省份">{{ info.province }}</el-descriptions-item>
                <el-descriptions-item label="城市">{{ info.city }}</el-descriptions-item>
                <el-descriptions-item label="医院">{{ info.hospital }}</el-descriptions-item>
                <el-descriptions-item label="部门">{{ info.department }}</el-descriptions-item>
                <el-descriptions-item label="地址">{{ info.address }}</el-descriptions-item>
                <el-descriptions-item label="位置">{{ info.position }}</el-descriptions-item>
                <el-descriptions-item label="经度">{{ info.longtitude }}</el-descriptions-item>
                <el-descriptions-item label="纬度">{{ info.latitude }}</el-descriptions-item>
                <el-descriptions-item label="联系方式">{{ info.contacts }}</el-descriptions-item>
                <el-descriptions-item label="评价">{{ info.comment }}</el-descriptions-item>
            </el-descriptions>
            </el-col>
            <el-col :span="5"></el-col>
        </el-row>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                id: -1,
                info: {},
            }
        },
        methods: {
            async fetchData() {
                try {
                    // fetch tasks
                    const response = await axios.get('/api/tasks/'+String(this.id));
                    // set the data returned as tasks
                    this.info = response.data; 
                } catch (error) {
                    // log the error
                    console.log(error);
                }
            },
        },
        created() {
            this.id=Number(this.$route.params.id)
            this.fetchData()
        }
    }
</script>
