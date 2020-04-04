# rSnip

code snippets for noier

提供给noier的代码片段

## 安装

基于:

- vim/neovim
- [vim-plug](https://github.com/junegunn/vim-plug)
  - 其他的vim插件管理插件,例如[Vundle.vim](https://github.com/VundleVim/Vundle.vim)
- [UltiSnips](https://github.com/SirVer/ultisnips)

vim中配置,具体查看[vim-plug](https://github.com/junegunn/vim-plug#example)中的配置方法

```
Plug 'SirVer/ultisnips'
Plug 'Rainboylvx/rSnip'
```

安装
```
:PlugInstall
```

## 基础语法 snippets

## 算法 snippets

### 常用

| 描述           | 触发   | 位置                 |
|----------------|--------|----------------------|
| 条件编译:debug | debug  | base/debug.snippets  |
| 常用宏         | def    | base/define.snippets |
| 快读           | read   | base/快读.snippets   |
| 超级快读       | fastio | base/快读.snippets   |

### 基础

 | 算法                    | 触发     | 位置                           |
 |-------------------------|----------|--------------------------------|
 | 二分查找:第一个大于     | first_g  | base/二分.snippets             |
 | 二分查找:第一个大于等于 | first_ge | base/二分.snippets             |
 | 4个方向                 | fx4      | algorithm/search/base.snippets |
 | 8个方向                 | fx8      | algorithm/search/base.snippets |
 | 方向-类                 | fx_class | algorithm/search/base.snippets |
 | 是否在地图内            | in_map   | algorithm/search/base.snippets |
 | 离散化                  | lsh      | base/离散化.snippets           |

## 数据结构

| 算法          | 触发        | 解释                           |
|---------------|-------------|--------------------------------|
| 普通向量星    | `xlx`       | data_structure/向量星.snippets |
| 向量星,类写法 | `xlx_class` |                                |
| 向量星,网络流 | `xlxw`      | 边从0开始计数                  |

### 树与图

| 算法   | 触发  | 位置                           |
|--------|-------|--------------------------------|
| 并查集 | `bcj` | data_structure/并查集.snippets |

## 算法-图

| 算法       | 触发         | 位置                            |
|------------|--------------|---------------------------------|
| 极大团计数 | `jidatuan`   | algorithm/graph/极大团.snippets |
| 强连通分量 | `tarjan_qlt` | algorithm/graph/tarjan.snippets |

## 数论

| 算法       | 触发           | 位置                         |
|------------|----------------|------------------------------|
| gcd        | gcd            | math/gcd.snippets            |
| exgcd      | exgcd          | math/gcd.snippets            |
| 线性欧拉筛 | euler_prime    | math/euler_function.snippets |
| 欧拉函数   | euler_function | math/euler_function.snippets |
