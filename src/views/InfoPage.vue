<template>
    <div>
        <div class="info_content">
            <h1>信息</h1>
            
            <ul class="info">
                <h2>{{ info.name }}</h2>
                <p>{{ info.professionalType }}</p>
                <p>{{ info.attitude }}</p>
                <p>是否通过志愿者走访验证：{{ info.isVerify }}</p>
                <p>{{ info.hospital }}</p>
                <p>{{ info.position }}</p>
                <p>{{ info.department }}</p>
                <p>{{ info.province }}</p>
                <p>{{ info.city }}</p>
                <p>{{ info.address }}</p>
                <p>{{ info.longtitude }}</p>
                <p>{{ info.latitude }}</p>
                <p>{{ info.contacts }}</p>
                <p>{{ info.comment }}</p>
            </ul>
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
