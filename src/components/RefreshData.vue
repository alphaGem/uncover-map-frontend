<template>
    <div class="add_info">
        刷新数据
        <form v-on:submit.prevent="submitForm">
            <div class="form-group">
                <button type="submit">Refresh</button>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
            }
        },
        methods:
        {
            async submitForm(){
                try {
                    // Send a POST request to the API
                    await axios.post('/api/tasks/', {});
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>
