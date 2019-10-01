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

### 基础

| 算法                    | 触发     |
|-------------------------|----------|
| 二分查找:第一个大于     | first_g  |
| 二分查找:第一个大于等于 | first_ge |


### 树与图

| 算法          | 触发        | 解释          |
|---------------|-------------|---------------|
| 普通向量星    | `xlx`       |               |
| 向量星,类写法 | `xlx_class` |               |
| 向量星,网络流 | `xlxw`      | 边从0开始计数 |
| 并查集        | `bcj`       |               |
