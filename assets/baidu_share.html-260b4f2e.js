import{_ as p,a as g,b as f}from"./bd_share_test-ae4567cb.js";import{_ as m,a as b,b as _}from"./motrix-ua-d5f435d9.js";import{_ as w,r,o as y,c as k,b as e,e as t,a as o,w as i,f as a}from"./app-8967e7f1.js";const x={},v=a('<h1 id="baiduyun-share-link" tabindex="-1"><a class="header-anchor" href="#baiduyun-share-link" aria-hidden="true">#</a> BaiduYun Share Link</h1><p>Driver for BaiduYun share link, supports downloading but not uploading, using an unofficial api.</p><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> <strong>Settings</strong></h2><ol><li><p>You need to set <strong>surl</strong> and <strong>pwd</strong> to browse the directory, and you need to set BDUSS to download.</p></li><li><p><strong>surl</strong> is the part before <code>?</code> after the sharing address <code>pan.baidu.com/s/</code>, <strong>pwd</strong> fill in the 4-digit extraction code, and leave blank if there is no extraction code.</p></li><li><p><strong>surl</strong> and <strong>pwd</strong> can be filled in with any account, but the account of the <strong><code>BDUSS</code></strong> parameter must use <mark><strong>Baidu Super SVIP member</strong></mark></p></li></ol><p><img src="'+p+'" alt=""></p><p>BDUSS is extracted from the cookie</p>',6),q={href:"http://pandownload.net/faq/cookie.html",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"BDUSS=",-1),A=e("li",null,[e("p",null,[t("Method 2"),e("sup",null,"recommended"),t(":")]),e("ul",null,[e("li",null,[e("img",{src:g,alt:"1",style:{zoom:"30%"}})])])],-1),B=a('<h2 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id" aria-hidden="true">#</a> <strong>Root folder file_id</strong></h2><p>The root folder to be mounted, the default is <code>/</code></p><p>If you want to mount other folders, please see the example below</p><p><img src="'+f+'" alt=""></p><h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> <strong>QA</strong></h2><table><thead><tr><th>setting</th><th>error message</th><th>tips</th></tr></thead><tbody><tr><td>surl</td><td><code>{&quot;errno&quot;:2,&quot;errtype&quot;:0}</code></td><td>invalid share link</td></tr><tr><td>pwd</td><td><code>{&quot;errno&quot;:-130,&quot;errtype&quot;:&quot;mispwd-9&quot;}</code></td><td>invalid password</td></tr><tr><td>BDUSS</td><td><code>{&quot;errno&quot;:9019,&quot;errmsg&quot;:&quot;need verify&quot;}</code></td><td>invalid BDUSS, get a new one</td></tr><tr><td>UA</td><td><code>{&quot;error_code&quot;:31326,&quot;error_msg&quot;:&quot;user is not authorized, hitcode:119&quot;}</code></td><td>invalid user-agent, set a non-browser UA(ex. netdisk) or use web proxy</td></tr><tr><td>down</td><td>Failed init storage: 200 OK; {&quot;errno&quot;:-130,&quot;</td><td>The content shared by this link may not be accessible because it involves infringement, pornography, vulgarity and other information!</td></tr></tbody></table><h2 id="developing" tabindex="-1"><a class="header-anchor" href="#developing" aria-hidden="true">#</a> <strong>Developing</strong></h2>',7),U={href:"https://github.com/yuantuo666/baiduwp-php",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"We have developed the folder viewing and file downloading function, further developments are welcome.",-1),I=e("p",null,"Since we don't have an official document, there might be some compatible problems. You can give feedback on github.",-1),D=e("p",null,"We can't break those limits from Baidu and you should follow the official laws.",-1),O=e("h3",{id:"add-user-agent-usage-example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#add-user-agent-usage-example","aria-hidden":"true"},"#"),t(),e("strong",null,'Add "User-Agent" usage example')],-1),T={class:"hint-container danger"},Y=a('<p class="hint-container-title">If you don&#39;t know how to set &quot;User-Agent&quot; see here</p><p><mark>The following methods are limited to Baidu super member users</mark></p><p><mark>Prompt again The following methods are limited to Baidu super member users</mark></p><p>It will only be useful if a member finishes modifying <strong><code>&quot;User-Agent&quot;</code></strong> (choose official and 302)</p><p>If you don’t change <strong><code>&quot;User-Agent&quot;</code></strong>, you can enable <mark>Web Agent</mark>, the disadvantage is that you need to build an Alist machine for transfer, that is to say, you need a large broadband to help you transfer</p>',5),z=e("ul",null,[e("li",null,"The advantage of using a browser plug-in to modify is that it can be played directly online, of course, downloading is also possible.")],-1),W={href:"https://www.bilibili.com/video/BV1UA4y1X7J8",target:"_blank",rel:"noopener noreferrer"},E={href:"https://youtu.be/PP6b0WSzYMc",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,[e("img",{src:m,alt:"alist"})],-1),C=e("ol",null,[e("li",null,[e("p",null,[t("First follow the figure below to set the "),e("strong",null,[e("code",null,'user-agent" ')]),t(", and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well")])]),e("li",null,[e("p",null,[t("Then open the third button option in the lower right corner ("),e("strong",null,"Open the check box"),t("), and then go to the list to select the file we want to download")])]),e("li",null,[e("p",null,"Select the files we need to download. After selecting, there will be a row of buttons. Select the second option on the right. One is sent to Aria2.")])],-1),Q=e("p",null,[t("If you use the webpage to modify the "),e("strong",null,[e("code",null,"user-agent")]),t(", you do not need to configure the "),e("code",null,"UA"),t(" of "),e("mark",null,[e("strong",null,"Aria2")]),t(", and you can download it directly to Aria2")],-1),F=e("p",null,[e("img",{src:b,alt:"alist"})],-1),N=e("ol",null,[e("li",null,[t("First follow the figure below to set the "),e("strong",null,[e("code",null,'user-agent" ')]),t(", and then click the button option in the lower right corner, click ** gear ** (local settings) to configure the parameters well")]),e("li",null,[t("Then open the third button option in the lower right corner ("),e("strong",null,"Open the check box"),t("), and then go to the list to select the file we want to download")]),e("li",null,"Select the files we need to download. After selecting, there will be a row of buttons. Select the second option on the right. One is sent to Aria2.")],-1),P=e("p",null,[t("If you use the webpage to modify the "),e("strong",null,[e("code",null,"user-agent")]),t(", you do not need to configure the "),e("code",null,"UA"),t(" of "),e("mark",null,[e("strong",null,"Motrix")]),t(", and you can download it directly to Aria2")],-1),X={href:"https://motrix.app/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/agalwood/Motrix",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,[e("img",{src:_,alt:"alist"})],-1),L=e("h3",{id:"the-default-download-method-used",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-default-download-method-used","aria-hidden":"true"},"#"),t(),e("strong",null,"The default download method used")],-1);function R(G,J){const n=r("ExternalLinkIcon"),l=r("Badge"),h=r("Mermaid"),c=r("Tabs");return y(),k("div",null,[v,e("ul",null,[e("li",null,[e("p",null,[t("Method 1: "),e("a",q,[t("Reference Tutorial"),o(n)]),t(" (the prefix "),S,t(" is not required in this project).")])]),A]),B,e("p",null,[t("The api is from "),e("a",U,[t("github.com/yuantuo666/baiduwp-php"),o(n)]),t(", an unofficial project.")]),M,I,D,O,e("div",T,[Y,o(c,{id:"168",data:[{title:"Web plugin"},{title:"Aria2"},{title:"Motrix"}],"tab-id":"ua"},{tab0:i(({title:d,value:s,isActive:u})=>[z,e("p",null,[t("Example "),o(l,{text:"1",type:"info",vertical:"middle"}),t(": If you really don’t know it, you can take a look at an example on the web page: "),e("strong",null,[e("a",W,[t("https://www.bilibili.com/video/BV1UA4y1X7J8"),o(n)])])]),e("p",null,[t("Example "),o(l,{text:"2",type:"info",vertical:"middle"}),t(": Another plugin method covering 360, Chrome, Edge: "),e("strong",null,[e("a",E,[t("https://youtu.be/PP6b0WSzYMc"),o(n)])])]),V]),tab1:i(({title:d,value:s,isActive:u})=>[C,Q,F]),tab2:i(({title:d,value:s,isActive:u})=>[N,P,e("ul",null,[e("li",null,[t("Motrix Download link："),e("a",X,[t("Motrix Official website"),o(n)]),t("，"),e("a",K,[t("Motrix-GitHub"),o(n)])])]),H,L,o(h,{id:"mermaid-247",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})]),_:1})])])}const ee=w(x,[["render",R],["__file","baidu_share.html.vue"]]);export{ee as default};
