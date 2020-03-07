# 脚本规范标准

## 文件名字

在Windows下开发，以`.jsx`为后缀--如果使用.js后缀的话，可能会由Windows Scripting Host(WSH)来执行，而不是CS 脚本解析器。防冲突！

## 文件开头
直接打开Ps运行js脚本?
```
#target photoshop
```

## 引用文件
```
#include json2.js
```
