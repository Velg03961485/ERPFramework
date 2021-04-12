
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

    },
}