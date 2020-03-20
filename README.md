# mimall

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Cookie、localStorage、sessionStorage 区别
* 存储大小: Cookie4K、Storage5M
* 有效期: Cookie拥有有效期，Storage永久存储
* Cookie会发送到服务器端，存储在内存中，Storage只储存在浏览器端
* 路径: Cookie有路径限制，Storage只存储在域名下
* API: Cookie没有特定的API， Storage有对应的API

### 为什么封装Storage?
* Storage本身有API，但是只是简单的k.v形式
* Storage只存储字符串，需要人工装换成json对象
* Storage只能一次性清空，不能单个清空