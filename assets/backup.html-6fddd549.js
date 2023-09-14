import{_ as e,a}from"./sqlite3-8909330a.js";import{_ as t,o,c as r,f as d}from"./app-8967e7f1.js";const s={},c=d('<h1 id="备份-恢复" tabindex="-1"><a class="header-anchor" href="#备份-恢复" aria-hidden="true">#</a> 备份&amp;恢复</h1><h2 id="方法1-内置" tabindex="-1"><a class="header-anchor" href="#方法1-内置" aria-hidden="true">#</a> <strong>方法1-内置</strong></h2><p>使用<code>AList</code>后台的内置 <code>备份/恢复</code>选项</p><blockquote><p>备份：进行AList数据进行备份（<mark><strong>不包含索引</strong></mark>）</p><p>恢复：恢复之前备份文件</p><p>覆盖：恢复时选择覆盖会将用户信息进行覆盖</p></blockquote><p><img src="'+e+'" alt=""></p><h2 id="方法2-sqlite3" tabindex="-1"><a class="header-anchor" href="#方法2-sqlite3" aria-hidden="true">#</a> <strong>方法2-sqlite3</strong></h2><p>直接将<code>AList</code>目录下的 data/<code>data.db</code>数据库进行备份，等到了新环境直接进行替换即可(<mark><strong>包含索引数据</strong></mark>)</p><p>现在高版本如果有<code>data.db-shm</code>和<code>data.db-wal</code>这两个文件也要一起进行备份，恢复时也是一起替换</p><p><img src="'+a+'" alt=""></p><h2 id="方法3-其他数据库" tabindex="-1"><a class="header-anchor" href="#方法3-其他数据库" aria-hidden="true">#</a> <strong>方法3-其他数据库</strong></h2><p>其他，如果你使用了 <code>MySQL，Postgres</code> 等非<code>sqlite数据库</code>，请自行解决(<mark><strong>包含索引数据</strong></mark>)</p>',11),n=[c];function i(h,p){return o(),r("div",null,n)}const m=t(s,[["render",i],["__file","backup.html.vue"]]);export{m as default};
