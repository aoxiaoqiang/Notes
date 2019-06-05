```shell
# 远程连接
mysql -h 39.104.25.195 -u test -p
```

```shell
# 创建新用户
mysql -u root -p 

USE mysql;
CREATE USER "test"@"localhost" IDENTIFIED BY "654321"; # 本地登录 
CREATE USER "test"@"%" IDENTIFIED BY "654321"; # 远程登录 
quit 
mysql -utest -p #测试是否创建成功


# 删除账号及权限
drop user 用户名@"%"; 
drop user 用户名@ localhost;

# 删除用户
mysql -u root -p 
Delete FROM mysql.user Where User="test" and Host="localhost"; 
flush privileges; 
drop database testDB;

# 修改账号密码
mysql -u root -p 
update mysql.user set authentication_string=password("123456") where User="test" and Host="%"; 
flush privileges;




# 创建测试数据库
create database testDB; 
create database testDB default charset utf8 collate utf8_general_ci;

# 为用户添加权限
# 所有权限
grant all privileges on testDB.* to "test"@"%" identified by "654321";
flush privileges; #刷新系统权限表

# 指定部分权限给用户
grant select,update on testDB.* to "test"@"%" identified by "654321"; 
flush privileges; # 刷新系统权限表

# 授权test用户拥有所有数据库的某些权限
grant select, delete, update, create, drop on . to test@"%" identified by "test"; 
```