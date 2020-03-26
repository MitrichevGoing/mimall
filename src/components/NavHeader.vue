<template>
    <div class="header">
      <div class="nav-topbar">
          <div class="container">
              <div class="topbar-menu">
                  <a href="javascript:;">小米商城</a>
                  <a href="javascript:;">MUI</a>
                  <a href="javascript:;">云服务</a>
                  <a href="javascript:;">协议规则</a>
              </div>
              <div class="topbar-user">
                  <a href="javascript:;" v-if="username">{{username}}</a>
                  <a href="javascript:;" v-if="!username" @click="login()">登录</a>
                  <a href="javascript:;" v-if="username">我的订单</a>
                  <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span>购物车</a>
              </div>
          </div>
      </div>
      <div class="nav-header">
          <div class="container">
              <div class="header-logo">
                  <a href="/#/index"></a>
              </div>
              <div class="header-menu">
                  <div class="item-menu">
                      <span>小米手机</span>
                      <div class="children">
                          <ul>
                              <li class="product" v-for="(item, index) in phoneList" :key="index">
                                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                      <div class="pro-img">
                                        <img :src="item.mainImage" alt="item.subtitle">
                                      </div>
                                      <div class="pro-name">{{item.name}}</div>
                                      <div class="pro-price">{{item.price | currency}}</div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                   <div class="item-menu">
                      <span>红米手机</span>
                      <div class="children">
                          <ul>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/398311b2e6f47ac324ba0421a0ac1b80.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacd6a3d8440b7a038e9778702bd6db6.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ee0af37bbd2f5a83c799e87dd791037.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a9734e0314fec470ff6912a8a92da5e6.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                   <div class="item-menu">
                      <span>电视</span>
                      <div class="children">
                          <ul>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg" alt="">
                                      </div>
                                      <div class="pro-name">Redmi 红米电视 70英寸</div>
                                      <div class="pro-price">3199元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf72a3e9a6e799cb71ecfa7d80465351.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                              <li class="product">
                                  <a href="" target="_blank">
                                      <div class="pro-img">
                                          <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bd922870295a97a0972eaba5af92129e.jpg" alt="">
                                      </div>
                                      <div class="pro-name">小米CC9</div>
                                      <div class="pro-price">1799元</div>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="header-search">
                  <div class="wrapper">
                      <input type="text" name="keyword">
                      <a href="javascript:;"></a>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'nav-header',
    data() {
        return {
            username: 'jackma',
            phoneList: []
        }
    },
    filters: {
        currency(val) {
            if(!val) return '0.00';
            return '￥' + val.toFixed(2) + '元';
        }
    },
    mounted(){
        this.getProductList();
    },
    methods:{
        login(){
            this.$router.push('/login');
        },
        getProductList(){
            this.axios.get("/products",10012)
            .then(res => {
                console.log(res);
                let list = res.list;
                if(list.length >=6){
                    this.phoneList = list.slice(0,6);
                }
            })
            .catch(err => {
                console.error(err); 
            })
        },
        goToCart(){
            this.$router.push('/cart');
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/base.scss';
    @import '../assets/scss/mixin.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container{
                // width:1226px;
                // margin-right: auto;
                // margin-left: auto;
                @include flex();
                a{
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart{
                    width:110px;
                    background-color: $colorA;
                    text-align: center;
                    color:$colorG;
                    .icon-cart{
                        @include bgImg(16px,12px,'../../public/images/icon-cart-checked.png');
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                position: relative;
                height: 112px;
                @include flex();
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: $colorA;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content: ' ';
                            @include bgImg(55px,55px,'../../public/images/mi-logo.png');
                            background-size: 55px;
                            transition: margin .2s;
                        }
                        
                        &::after{
                            content: ' ';
                            @include bgImg(55px,55px,'../../public/images/mi-home.png');
                            background-size: 55px;
                        }

                        &:hover::before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color:#333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0, 0.11);
                            z-index: 10;
                            transition:all .5s;
                            background-color: #fff;
                            .product{
                                position: relative;
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img {
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                   height: 137px; 
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price{
                                    color: $colorA;
                                }
                                &:before{
                                    content: '';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    height: 100px;
                                    width: 1px;
                                    border-left: 1px solid $colorF;
                                }
                                &:last-child::before{
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border:1px solid #e0e0e0;
                        display: flex;
                        align-items: center;
                        input{
                            border:none;
                            box-sizing: border-box;
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            display: inline-block;
                            width:18px;
                            height: 18px;
                            background: url('../../public/images/icon-search.png');
                            background-size: contain;
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>