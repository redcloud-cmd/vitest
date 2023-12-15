# 1.创建vite项目
# 2.初始化项目，安装vitest
# 3.写测试案例，在package.json文件中加“test”：“vitest”。再使用pnpm test运行测试
## 3.1 三种配置vitest方法，
    1. 在vite.config.ts 文件中增加  /// <reference types="vitest" />。在defineConfig配置中增加test：{globlas：true}
    2. 在vitest.config.ts文件中增加test：{globlas：true}  。弊端：vitest.config.ts配置文件比vite.config.ts配置文件执行权限高，vite包含对vue文件处理，但是vitest没有
    3. 代码洁癖者：重新新建一个vitestConfig文件，然后将该文件放到vite.config.ts文件中。
## 3.2 按照上面方法配置，但是全局vitest还是无效
    解决：查看测试代码路径是否在tsconfig.json的include名单里。
    
 