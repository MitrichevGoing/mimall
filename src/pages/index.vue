<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <div class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="'/#/product/' + sub.id">
                      <img :src="sub.img" alt="" />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="'/#/product/' + sub.id">
                      <img :src="sub.img" alt="" />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 显示器 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">健康 儿童</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音箱</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </div>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product' + item.id"><img :src="item.img" alt=""/></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img :src="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da490f93d7936ce625047f72d6bad569.jpg?w=2452&h=240"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?w=468&h=1228"
                alt=""
              />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <div class="item-img">
                  <img :src="item.img" alt="" />
                </div>
                <div class="item-info">
                  <h2>{{ item.name }}</h2>
                  <p>{{ item.des }}</p>
                  <p class="price" @click="addCart(item.id)">{{ item.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal 
      title="提示" 
      sureText="查看购物车" 
      btnType="1" 
      modalType="middle"
      :showModal="showModal"
      v-on:submit="goToCart"
      v-on:cancel="showModal=false"
    >
    <template v-slot:body>
      <p>商品添加成功!</p>
    </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import Modal from "./../components/Modal";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal
  },
  data() {
    return {
      swiperOption: {
        autoPlay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.94
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fc04d87f0d08783b15538563bb4a1d4.jpg?w=2452&h=920"
        },
        {
          id: "43",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25025f1ebb643fcf7f35aae636aa630.jpg?w=2452&h=920"
        },
        {
          id: "44",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bd4174b8c5aad67a64864a5716ad152.jpg?w=2452&h=920"
        },
        {
          id: "45",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?w=2452&h=920"
        },
        {
          id: "46",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fc04d87f0d08783b15538563bb4a1d4.jpg?w=2452&h=920"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 31,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 32,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 33,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          }
        ],
        [
          {
            id: 30,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 31,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 32,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 33,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          }
        ],
        [
          {
            id: 30,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 31,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 32,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 33,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          }
        ],
        [
          {
            id: 30,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 31,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 32,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 33,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          }
        ],
        [
          {
            id: 30,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 31,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 32,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 33,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          }
        ],
        [
          {
            id: 30,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 31,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 32,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          },
          {
            id: 33,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg",
            name: "Redmi K30 Pro"
          }
        ]
      ],
      adsList: [
        {
          id: 33,
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bc54a61b927dd8c54ddd39a0acf0254.jpg?w=632&h=340"
        },
        {
          id: 34,
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/94c74e01afe50a86c3a87ff030b85781.jpg?w=632&h=340"
        },
        {
          id: 35,
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/94c74e01afe50a86c3a87ff030b85781.jpg?w=632&h=340"
        },
        {
          id: 36,
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"
        }
      ],
      phoneList: [
        [
          {
            id: 50,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg",
            name: "小米10",
            des: "骁龙855",
            price: 3999
          },
          {
            id: 50,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg",
            name: "小米10",
            des: "骁龙855",
            price: 3999
          },
          {
            id: 50,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg",
            name: "小米10",
            des: "骁龙855",
            price: 3999
          },
          {
            id: 50,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg",
            name: "小米10",
            des: "骁龙855",
            price: 3999
          }
        ],
        [
          {
            id: 50,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg",
            name: "小米10",
            des: "骁龙855",
            price: 3999
          },
          {
            id: 50,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg",
            name: "小米10",
            des: "骁龙855",
            price: 3999
          },
          {
            id: 50,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg",
            name: "小米10",
            des: "骁龙855",
            price: 3999
          },
          {
            id: 50,
            img:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg",
            name: "小米10",
            des: "骁龙855",
            price: 3999
          }
        ]
      ],
      showModal:false,
    };
  },
  methods:{
    addCart(){
      this.showModal = true;
      return;
    //  this.axios.post("/carts",{
    //    productId: id,
    //    selected: true
    //  })
    //  .then(res => {
    //    console.log(res)
    //  })
    //  .catch(err => {
    //    console.error(err); 
    //  })
    },
    goToCart(){
      this.$router.push('/cart');
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      height: 460px;
      width: 264px;
      z-index: 9;
      padding: 20px 0;
      box-sizing: border-box;
      background-color: #55585a7a;
      .menu-wrap {
        .menu-item {
          height: 42px;
          line-height: 42px;
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          a {
            display: block;
            position: relative;
            font-size: 16px;
            color: $colorJ;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: "";
              @include bgImg(10px, 15px, "../../public/images/icon-arrow.png");
            }
          }
          .children {
            width: 962px;
            height: 460px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            display: none;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                z-index: 100;
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 32px;
                height: 34px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 460px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      img {
        width: 296px;
        height: 170px;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    a {
      img {
        width: 100%;
      }
    }
  }
  .product-box {
    padding: 30px 0 50px;
    background-color: $colorJ;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: #333333;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            transition: all 0.4s;
            &:hover {
              cursor: pointer;
              box-shadow: 0 3px 10px #888;
            }
            span {
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: 14px;
                color: $colorB;
                line-height: 14px;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(
                    22px,
                    22px,
                    "../../public/images/icon-cart-hover.png"
                  );
                  content: " ";
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
