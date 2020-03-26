<template>
    <div>
        <div class="footer">
            <div class="footer-logo">
                <a href="/#/index"></a>
                <p>小米商城</p>
            </div>
            <div class="footer-link">
                <a href="https://www.mi.com/" target="_blank">米家</a>
                <a href="https://www.mi.com/">米家</a>
                <a href="https://www.mi.com/">米家</a>
                <a href="https://www.mi.com/">米家</a>
                <a href="https://www.mi.com/">米家</a>
            </div>
            <div class="copyright">
                © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav-footer'
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/base.scss';
    @import '../assets/scss/mixin.scss';
    .footer{
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        .footer-logo{
            margin: 46px;
            margin-bottom: 31px;
            a{
                margin-bottom: 13px;
                @include bgImg(53px,36px,'../../public/images/logo-footer.png');
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
                margin-bottom: 10px;
                &:before{
                    content: '';
                    width: 1px;
                    height: 16px;
                    right: 0;
                    margin-left: 4px;
                    margin-right: 4px;
                    border-left: 1px solid #999999;
                }
                &:first-child:before{
                   display: none; 
                }
            }
        }
    }
</style>

