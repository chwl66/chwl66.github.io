import{_ as g,a as h,b as y,c as x,d as p,e as _,f,g as u}from"./nas-fd8b9ab1.js";import{_ as b,r as s,o as w,c as m,b as t,e,a as n,w as r,f as o}from"./app-8967e7f1.js";const v={},k=o('<h1 id="webdav" tabindex="-1"><a class="header-anchor" href="#webdav" aria-hidden="true">#</a> WebDav</h1><h3 id="webdav-config" tabindex="-1"><a class="header-anchor" href="#webdav-config" aria-hidden="true">#</a> <strong>WebDAV config</strong></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Url</td><td>http[s]://domain:port/dav/</td></tr><tr><td>Host</td><td>domain</td></tr><tr><td>Path</td><td>dav</td></tr><tr><td>Scheme</td><td>http/https</td></tr><tr><td>Port</td><td>Same as web port</td></tr><tr><td>Username</td><td>Same as web username</td></tr><tr><td>Password</td><td>Same as web password</td></tr></tbody></table><p>Can&#39;t fill in? <a href="#webdav-fill-in-example">Click to view Fill in Example</a></p><h3 id="webdav-support" tabindex="-1"><a class="header-anchor" href="#webdav-support" aria-hidden="true">#</a> <strong>WebDav Support</strong></h3><table><thead><tr><th>Storage strategy</th><th style="text-align:center;">list</th><th style="text-align:center;">download</th><th style="text-align:center;">mkdir</th><th style="text-align:center;">rename</th><th style="text-align:center;">move</th><th style="text-align:center;">copy</th><th style="text-align:center;">upload</th></tr></thead><tbody><tr><td>LocalStorage</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>AliyunDirve</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Onedrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>189Cloud</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>GoogleDrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>123pan</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>FTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>SFTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>PikPak</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>S3</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>USS</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>WebDAV</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Teambition</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Mediatrack</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>139yun</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>YandexDisk</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>BaiduNetdisk</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Quark</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr></tbody></table><h2 id="software-that-can-be-used-to-mount-webdav" tabindex="-1"><a class="header-anchor" href="#software-that-can-be-used-to-mount-webdav" aria-hidden="true">#</a> <strong>Software that can be used to mount WebDav</strong></h2>',7),A=t("strong",null,"Windows",-1),S={href:"https://potplayer.daum.net/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},N={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.onecommander.com/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://mountainduck.io/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.netdrive.net/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.aimp.ru/",target:"_blank",rel:"noopener noreferrer"},M=t("strong",null,"Android",-1),W={href:"https://www.aliyundrive.com/s/cf3p39UXkxa",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},E={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526",target:"_blank",rel:"noopener noreferrer"},X={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.lonelycatgames.com/apps/xplore",target:"_blank",rel:"noopener noreferrer"},B=t("strong",null,"IOS",-1),H={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},O=t("strong",null,"电视TV",-1),G={href:"https://www.aliyundrive.com/s/cf3p39UXkxa",target:"_blank",rel:"noopener noreferrer"},j={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526",target:"_blank",rel:"noopener noreferrer"},J=t("li",null,[e("If you only look at Ali, you can use Ali's official cooperation "),t("ul",null,[t("li",null,"Huanshi store-Alibaba cloud disk TV version, online disk player-Alibaba cloud disk TV version")])],-1),Q=t("strong",null,"Mac",-1),R={href:"https://zh.okaapps.com/product/1659622164",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://mountainduck.io/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.netdrive.net/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},Z=t("strong",null,"Linux",-1),$={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},tt=t("strong",null,"Notes",-1),et={href:"https://joplinapp.org/",target:"_blank",rel:"noopener noreferrer"},nt=o('<p>If there is a suitable addition, please add~</p><h3 id="webdav-fill-in-example" tabindex="-1"><a class="header-anchor" href="#webdav-fill-in-example" aria-hidden="true">#</a> <strong>WebDav fill-in example</strong></h3><p>Give a few examples of filling in <strong><code>WebDav</code></strong>, the account password is the account password of your AList user</p><p>This is basically the way of writing, and the way of writing may be different for different software. If there is no separate path option, it is normal to add the <code>/dav</code> option after the site</p><p>The different buttons at the top below can be clicked to view</p>',5),lt=t("p",null,[t("img",{src:g,alt:"webdav"})],-1),rt=t("p",null,[t("img",{src:h,alt:"webdav"})],-1),dt=t("div",{class:"image-preview"},[t("img",{src:y}),t("img",{src:x})],-1),at=t("p",null,[t("img",{src:p,alt:"webdav"})],-1),it=t("p",null,[t("img",{src:_,alt:"webdav"})],-1),st=t("p",null,[t("img",{src:f,alt:"webdav"})],-1),ot=t("p",null,[t("img",{src:u,alt:"webdav"})],-1),ct=t("p",null,null,-1);function gt(ht,yt){const l=s("ExternalLinkIcon"),c=s("Tabs");return w(),m("div",null,[k,t("ol",null,[t("li",null,[A,t("ul",null,[t("li",null,[t("a",S,[e("Potplayer"),n(l)]),e("，"),t("a",D,[e("kmplayer"),n(l)]),e("，RaiDrive，"),t("a",N,[e("kodi"),n(l)]),e("，"),t("a",T,[e("OneCommander"),n(l)]),e("，"),t("a",V,[e("Mountain Duck"),n(l)]),e("，"),t("a",I,[e("netdrive"),n(l)]),e("❌，"),t("a",P,[e("rclone"),n(l)]),e(", "),t("a",F,[e("AIMP"),n(l)])])])]),t("li",null,[M,t("ul",null,[t("li",null,[t("a",W,[e("Nplayer"),n(l)]),e("，"),t("a",U,[e("kmplayer"),n(l)]),e("，ES File Manager，"),t("a",E,[e("kodi"),n(l)]),e("，"),t("a",C,[e("nova nova magic change"),n(l)]),e("，"),t("a",X,[e("reex"),n(l)]),e("，cx File Manager，Solid Explorer, "),t("a",L,[e("X-plore File Manager"),n(l)])])])]),t("li",null,[B,t("ul",null,[t("li",null,[e("Nplayer，"),t("a",H,[e("kmplayer"),n(l)]),e("，infuse，Fileball File Manager")])])]),t("li",null,[O,t("ul",null,[t("li",null,[t("a",G,[e("Nplayer"),n(l)]),e("，"),t("a",j,[e("kodi"),n(l)]),e("，"),t("a",z,[e("nova nova magic change"),n(l)])]),J])]),t("li",null,[Q,t("ul",null,[t("li",null,[t("a",R,[e("VidHub"),n(l)]),e(", IINA，"),t("a",Y,[e("Mountain Duck"),n(l)]),e("，infuse，"),t("a",q,[e("netdrive"),n(l)]),e("，"),t("a",K,[e("rclone"),n(l)])])])]),t("li",null,[Z,t("ul",null,[t("li",null,[e("davfs2，"),t("a",$,[e("rclone"),n(l)])])])]),t("li",null,[tt,t("ul",null,[t("li",null,[t("a",et,[e("Joplin "),n(l)])])])])]),nt,n(c,{id:"698",data:[{title:"Nplayer"},{title:"reex"},{title:"ES"},{title:"Infuse"},{title:"Fileball"},{title:"Potplayer"},{title:"nas"}],"tab-id":"WebDav"},{tab0:r(({title:d,value:a,isActive:i})=>[lt]),tab1:r(({title:d,value:a,isActive:i})=>[rt]),tab2:r(({title:d,value:a,isActive:i})=>[dt]),tab3:r(({title:d,value:a,isActive:i})=>[at]),tab4:r(({title:d,value:a,isActive:i})=>[it]),tab5:r(({title:d,value:a,isActive:i})=>[st]),tab6:r(({title:d,value:a,isActive:i})=>[ot,ct]),_:1})])}const _t=b(v,[["render",gt],["__file","webdav.html.vue"]]);export{_t as default};
