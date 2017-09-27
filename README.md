# mongo-vs-mysql
Try to test mongo and mysql.
# 版本及环境
操作系统：  windows 7
硬件环境： （只做对比，mongodb和mysql都装在同一台机器上）
mongodb：  3.2.5
mysql：    5.7 

# Data-demo
Data-demo 是一个Spring Boot的项目， 通过Spring Boot的CommandLineRunner来批量动态插入1000,020 条数据。

数据结构采用常用的产品和类目的多对多的设计。 
#### Category数据如下：


id | code | name  
---|-----|----
'1'| 'cate-1'| 'Category 1'
'2'| 'cate-2'| 'Category 2'
'3'| 'cate-3'| 'Category 3'
'4'| 'cate-4'| 'Category 4'
#### Product 数据如下
id | code | name  | price
-- | ---- | ----- | -----
'1'| 'p-0'| 'product 0'| '19'
'2'| 'p-1'| 'product 1'| '19'
'3'| 'p-2'| 'product 2'| '19'
 ...|  ... |  ...          |...
'1000000'| 'p-999999'| 'product 999999'| '19'
'1000001'| 'pp-0'| 'iphone'| '19'
'1000002'| 'pp-1'| 'iphone'| '19'
'1000003'| 'pp-2'| 'iphone'| '19'
'1000004'| 'pp-3'| 'iphone'| '19'
'1000005'| 'pp-4'| 'iphone'| '19'
'1000006'| 'pp-5'| 'iphone'| '19'
'1000007'| 'pp-6'| 'iphone'| '19'
'1000008'| 'pp-7'| 'iphone'| '19'
'1000009'| 'pp-8'| 'iphone'| '19'
'1000010'| 'pp-9'| 'iphone'| '19'
'1000011'| 'pp-10'| 'iphone'| '19'
'1000012'| 'pp-11'| 'iphone'| '19'
'1000013'| 'pp-12'| 'iphone'| '19'
'1000014'| 'pp-13'| 'iphone'| '19'
'1000015'| 'pp-14'| 'iphone'| '19'
'1000016'| 'pp-15'| 'iphone'| '19'
'1000017'| 'pp-16'| 'iphone'| '19'
'1000018'| 'pp-17'| 'iphone'| '19'
'1000019'| 'pp-18'| 'iphone'| '19'
'1000020'| 'pp-19'| 'iphone'| '19'	

最后的二十行是用来方便查询验证的。

#### Product_Category
中间mapping的表格


# express-mongoose-microservice-api-boilerplate
Nodejs+express+mongoose+ to test mongodb. 从项目git@github.com:choelea/express-mongoose-microservice-api-boilerplate.git 复制过来。
运行命令`npm run  produceTestData` 可以初始化1000,020 条产品数据到mongodb。 数据类似mysql的产品数据：

#### 产品 Product
```
{
	"_id": "59cb4952d44efa2eb45d4bf7",
	"code": "pp-0",
	"name": "ihpone",
	"price": 19,
	"__v": 0,
	"categories": [
		"cate-1",
		"cate-4"
	]
}
```


### 测试脚本：
db.getCollection('products').find({categories:'cate-4'})  半秒
db.getCollection('products').find({categories:{$in:['cate-4','cate-5']}}) 八秒

``` sql
SELECT * FROM  product p where name='iphone';
SELECT * FROM  product p inner join product_category pc inner join category c on p.id=pc.product_id and pc.category_id=c.id where c.code ='cate-4';  超快，时间可以忽略
SELECT * FROM  product p inner join product_category pc inner join category c on p.id=pc.product_id and pc.category_id=c.id where c.code ='cate-4' or c.code='cate-5'; 历时6妙多
SELECT * FROM  product p inner join product_category pc inner join category c on p.id=pc.product_id and pc.category_id=c.id where c.code  in ('cate-4','iphone');历时6妙多
```


https://stackoverflow.com/questions/9702643/mysql-vs-mongodb-1000-reads

