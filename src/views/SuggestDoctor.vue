<template>
    <el-row>
    <el-col :span="5"/>
    <el-col  :span="14">
    <el-form ref="formRef" :model="form" label-position="top" :rules="rules">
        <el-space fill>
        <el-form-item label="投稿对象姓名" prop="name">
            <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="职业类型" prop="jobType">
            <el-radio-group v-model="form.jobType">
                <el-radio :label=0>医生</el-radio>
                <el-radio :label=1>心理咨询师</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="所属医院或机构" prop="hospital">
            <el-alert type="info" :closable="false">
                若投稿对象为医生，请填写所属医院；若为心理咨询师，请填写机构/工作室名称，若无请填写“无”。
            </el-alert>
            <el-input v-model="form.hospital" type="textarea"/>
        </el-form-item>
        <el-form-item label="专业分类/科室" prop="department">
            <el-alert type="info" :closable="false">
                <div align="left">
                “<b>心理咨询</b>”指可以对一般心理问题进行咨询的心理咨询师；
                “<b>心理科</b>”指医嘱下的心理咨询和心理治疗科室；
                “<b>精神科</b>”指进行精神障碍诊断和药物治疗科室；
                “<b>易性症证明</b>”指可以开具跨儿可能需要的易性症诊断证明；
                “<b>HRT</b>”指可以开具跨儿可能需要的激素替代治疗的指导或处方；
                “<b>SRS</b>”指可以实施跨儿可能需要的性别重置手术；“其它”指上述分类中没有提到的医院科室。
                </div>
            </el-alert>
            <el-checkbox-group v-model="form.department">
                <el-checkbox label="心理咨询" />
                <el-checkbox label="心理科" />
                <el-checkbox label="精神科" />
                <el-checkbox label="易性症证明"/>
                <el-checkbox label="HRT"/>
                <el-checkbox label="SRS"/>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="态度类型" prop="attitudeType">
            <el-checkbox-group v-model="form.attitudeType">
                <el-checkbox label="友同" />
                <el-checkbox label="友跨" />
                <el-checkbox label="恐同" />
                <el-checkbox label="恐跨" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="您的详细经历" prop="experience">
            <el-alert type="info" :closable="false">
            请描述您与投稿对象的就诊/咨询或接触经历，可以包含对态度、语言和行为等方面的描述。
            </el-alert>
            <el-input v-model="form.experience" type="textarea"/>
        </el-form-item>
        <el-form-item label="职称/从业资质" prop="jobQualification">
            <el-alert type="info" :closable="false">
            投稿对象若为医生，请填写其职称；若为心理咨询师，请填写其从业资质。
            </el-alert>
            <el-input v-model="form.jobQualification"/>
        </el-form-item>
        <el-form-item label="通讯地址" prop="address">
            <el-input v-model="form.address"/>
        </el-form-item>
        <el-form-item label="详细信息" prop="info">
            <el-alert type="info" :closable="false">
            请填写您投稿对象的详情页面链接或其它详细信息（包括公开的联系方式等）。
            </el-alert>
            <el-input v-model="form.info"/>
        </el-form-item>
        <el-form-item label="您的称呼" prop="nickname">
            <el-alert type="info" :closable="false">
            如果愿意，可以留下您的昵称或姓名。
            </el-alert>
            <el-input v-model="form.nickname"/>
        </el-form-item>
        <el-form-item label="您的联系方式" prop="contact">
            <el-alert type="info" :closable="false">
            小程序运营人员可能会联系您以核实信息。请留下您的联系信息，并标明是手机、微信、qq、邮箱或其它方式。如果不希望留下联系方式，也可在此说明。
            </el-alert>
            <el-input v-model="form.contact"/>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="submitSuggestion">提交</el-button>
        </el-form-item>
        </el-space>
    </el-form>
    </el-col>
    <el-col :span="5"/>
    </el-row>
</template>
<script>
import { ElMessage } from 'element-plus';
import axios from 'axios';
    export default {
        components: {
        },
        setup()
        {
        },
        data(){
            return {
                form: {
                    'name': '',
                    'jobType': 0,
                    'hospital': '',
                    'department': [],
                    'attitudeType': [],
                    'experience': '',
                    'jobQualification': '',
                    'address': '',
                    'info': '',
                    'nickname': '',
                    'contact': '',
                },
                rules: {
                    'name': [{required: true, message: '需要填写', trigger: 'change',}],
                    'jobType': [{required: true, message: '需要填写',trigger: 'change',}],
                    'hospital': [{required: true, message: '需要填写',trigger: 'change',}],
                    'department': [{required: true, message: '需要填写',trigger: 'change',}],
                    'attitudeType': [{required: true, message: '需要填写',trigger: 'change',}],
                    'experience': [{required: true, message: '需要填写',trigger: 'change',}],
                    'jobQualification': [],
                    'address': [{required: true,  message: '需要填写',trigger: 'change',}],
                    'info': [],
                    'nickname': [],
                    'contact': [{required: true, message: '需要填写', trigger: 'change',}],
                },
                item_count: 0,
            }
        },
        methods: {
            submitSuggestion () {
                this.$refs.formRef.validate(async (valid)  => {
                    if (valid) {
                        try {
                            // fetch tasks
                            await axios.postForm('/api/suggest/',this.form);
                            ElMessage({
                                showClose: true,
                                message: '已提交',
                                type: 'success',
                            })
                        } catch (error) {
                            // log the error
                            ElMessage({
                                showClose: true,
                                message: '提交失败',
                                type: 'error',
                            })
                            console.log(error);
                        }
                    } else {
                        ElMessage({
                            showClose: true,
                            message: '有表单必填项未填写',
                            type: 'error',
                        })
                    }
                })
            }
        },
        created() {
        },
    }
</script>
