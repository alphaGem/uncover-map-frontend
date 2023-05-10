<template>
    <div class="add_info">
        Refresh
        <form v-on:submit.prevent="submitForm">
            <!--
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" v-model="description"></textarea>
            </div>
            -->
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
                title: '',
                description: ''
            }
        },
        methods:
        {
            async submitForm(){
                try {
                    // Send a POST request to the API
                    await axios.post('/api/tasks/', {
                        // title: this.title,
                        // description: this.description
                    });
                    // Reset the title and description field values.
                    this.title = '';
                    this.description = '';
                } catch (error) {
                    // Log the error
                    console.log(error);
                }
            }
        }
    }
</script>
