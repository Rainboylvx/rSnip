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

## 使用

**数据结构**

| 数据结构   | 触发     |
|------------|----------|
| 链式前向星 | linkList |

## 使用

|算法|触发|位置|
|----|----|----|
|kahn,求拓扑排序|kahn|algorithm/graph/kahn|
|Description|prim|algorithm/graph/mst|
|kruskal算法|kruskal|algorithm/graph/mst|
|次小生成树|sec_mst|algorithm/graph/mst|
|tarjan-强连通分量|tarjan_qlt|algorithm/graph/tarjan|
|割点|udg_tarjan_cut_node|algorithm/graph/tarjan|
|割边|udg_tarjan_bridge|algorithm/graph/tarjan|
|边双|udg_tarjan_e_bcc|algorithm/graph/tarjan|
|点双|udg_tarjan_n_bcc|algorithm/graph/tarjan|
|割点，割边，点双，边双4合1 tarjan|udg_tarjan|algorithm/graph/tarjan|
|拓扑排序-stack|topOrder|algorithm/graph/topOrder|
|spfa|spfa|algorithm/graph/最短路|
|spfa找图种正负环|spfa_dfs|algorithm/graph/最短路|
|优先队列优化的Dijkstra|dijkstra|algorithm/graph/最短路|
|极大团计数|jidatuan|algorithm/graph/极大团|
|树上倍增|bz_lca|algorithm/graph/树上倍增|
|树链剖分-点权|hpsn|algorithm/graph/树链剖分|
|树链剖分-边权|hpse|algorithm/graph/树链剖分|
|4个方向|fx4|algorithm/search/base|
|8个方向|fx8|algorithm/search/base|
|方向-类|fx_class|algorithm/search/base|
|in_map|in_map|algorithm/search/base|
|01bfs|01bfs|algorithm/search/bfs|
|ac自动机|ac|algorithm/string/Aho-Corasick|
|字符串hash|hash|algorithm/string/hash|
|kmp算法|kmp|algorithm/string/kmp|
|trie树|trie|algorithm/string/trie|
|换行 printf\n|prn|base/base|
|代码模板-简单|ssn|base/base|
|代码模板-复杂|sn|base/base|
|maxn|maxn|base/base|
|double max|double_max|base/base|
|struct|st|base/base|
|#define DEBUG|ifd|base/debug|
|#ifdef DEBUG|debug|base/debug|
|define|def|base/define|
|define for|deff|base/define|
|dinic最大流算法|dinic|base/dinic|
|标准命名空间|usingRandom|base/random|
|二分|ef|base/二分|
|三分算法|ef3|base/二分|
|yht:优化头|youhuatou|base/优化|
|向量星->网络流|xlxw|base/向量星_网络流|
|init初始化函数|init|base/常用函数|
|rmax 最大值函数|rma|base/常用函数|
|rmin 最小值函数|rmi|base/常用函数|
|输出二进制|p_bin|base/常用函数|
|快读|read|base/快读|
|超级快读|fastio|base/快读|
|快速幂取余|qsm|base/快速幂|
|快速幂取余|quick_pow|base/快速幂|
|离散化|lsh|base/离散化|
|作者信息|author_info|c|
|#include|in|c|
|main()|main|c|
|freopen|fr|c|
|freopen stdout|fw|c|
|printf|pr|c|
|scanf|sc|c|
|return 0|re|c|
|输出对应二进制的函数|p_bin|c|
|标准命名空间|using|cpp|
|Description|rmq|data_structure/RMQ|
|数组实现的队列|queue_base_on_array|data_structure/queue|
|向量星|xlx|data_structure/向量星|
|Each edge from head u|ee|data_structure/向量星|
|向量星-类|xlx_class|data_structure/向量星|
|并查集|bcj|data_structure/并查集|
|树状数组|bit|data_structure/树状数组|
|二维BIT|BIT_2D|data_structure/树状数组|
|线段树，单点更新|sgt_one|data_structure/线段树|
|线段树，区间更新|sgt_range|data_structure/线段树|
|动态开点线段树|dsgt|data_structure/线段树|
|权值线段树|vsgt|data_structure/线段树|
|线性欧拉筛|euler_prime|math/euler_function|
|欧拉函数|euler_function|math/euler_function|
|gcd-递归|gcd|math/gcd|
|exgcd|exgcd|math/gcd|
|combine|combine|utils/combine|
