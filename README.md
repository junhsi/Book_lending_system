# Book-lending-system
Springboot + Vue + MySQL 的全端圖書借閱系統

## Vue

- 目前進度 : 已將登入介面&登入後介面的 UI 設計好
- 還未完成 : 登入系統
- 使用 port : 8080

## Springboot

- 目前進度 : 嘗試串接 MySQL
- 使用 port : 8181

## MySQL
- MySQL 採用 Docker 架設
- 使用 MySQL workbench 可視化工具，新增資料表
- 使用 port : 3306

- docker pull mysql
- docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=1234 -d mysql

![](https://imgur.com/pgbrVy2.png)
