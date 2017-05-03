# A simple nodejs program
## express + sequelize + mysql + lodash
## Usage

```js
module.exports = {
  sequelize: {
    options: {
      define: {
        timestamps: false
      },
      timezone: '+08:00',
      pool: {
        max: 5, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
      }
    }
  }
};
```

```sh
git clone https://github.com/wjfc/nodeJs_sample.git
# install dev
npm install
node index.js
```