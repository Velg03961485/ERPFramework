
import BackImg from '@/assets/img/backImg.jpeg'

export default {
    name: "login",
    data(){
        return{
            BackImg:BackImg,
            windHeight:'',

            formLogin:{
                name:'',
                pwdWord:'',
            },
            rules: {
                name: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
                ],
                pwdWord: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
                ],
            }
        }
    },
    created() {
        console.log('页面')
        this.$data.windHeight = document.documentElement.clientHeight + 'px';
    },
    mounted: function () {
        const that = this
        window.onresize = () => {
            return (() => {
                window.fullHeight = document.documentElement.clientHeight
                that.windHeight = window.fullHeight + 'px'
            })()
        };

    },
    methods:{

        submitForm (formLogin) {
            this.$refs[formLogin].validate(valid => {
                if(!valid) {
                    console.log(111)
                    return;
                }
                console.log(222, this.formLogin)
                this.loading = true;
                this.$store
                    .dispatch("LoginByuserName", this.formLogin)
                    .then(() => {
                        this.loading = false;
                        this.$router.push({ path: "/index" });
                        console.log("调用成果");
                    })
                    .catch(() => {
                        this.loading = false;
                    });
            });
        }

    },
}