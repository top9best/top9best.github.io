function browser(){for(var e=this,t="unknown browser",o=navigator.userAgent,r=[{agent:o.search("Edge"),browser:"Edge"},{agent:o.search("OPR"),browser:"Opera"},{agent:o.search("Opera"),browser:"Opera"},{agent:o.search("Firefox"),browser:"Firefox"},{agent:o.search("Chrome"),browser:"Chrome"},{agent:/CriOS/i.test(o)&&/iphone|ipod|ipad/i.test(o),browser:"Chrome"},{agent:o.search("Safari"),browser:"Safari"},{agent:o.search("MSIE 7"),browser:"IE7"},{agent:o.search("MSIE 8"),browser:"IE8"},{agent:o.search("MSIE 9"),browser:"IE9"},{agent:o.search("MSIE 10"),browser:"IE10"},{agent:o.search("like Gecko"),browser:"IE11"},{agent:o.search("MSIE"),browser:"IE"}],n=0;n<r.length;n++)e[r[n].browser.toLowerCase()]=!1;for(var i=0;i<r.length;i++)if(r[i].agent>0||r[i].agent===!0){e[r[i].browser.toLowerCase()]=!0,t=r[i].browser;break}return t}function render(e,t){document.querySelectorAll("#grid_section img")[t].src=e}function toDataURL(e,t,o){var r=new XMLHttpRequest;r.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result,o)},e.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML='Some error occurred</br><a href="/?back=id">Back to get top9 post again</a>'})},e.readAsDataURL(r.response)},r.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML='Some error occurred</br><a href="/?back=id">Back to get top9 post again</a>'})},r.open("GET",e),r.responseType="blob",r.send()}function createDownloadGrid(e,t){var o=t.cloneNode(!0);o.setAttribute("id","grid_download"),o.style.width="1280px",o.style.height="1280px",o.style.maxWidth="1280px",o.style.maxHeight="1280px",e.appendChild(o);for(var r=o.querySelectorAll("img"),n=0;n<r.length;n++)r[n].classList.remove("preview"),computeGirdPosition(r[n]);return o}function destoryDownloadGrid(){var e=document.querySelector("#grid_download");e.innerHTML="",e.remove()}function computeGirdPosition(e){var t=parseFloat(window.getComputedStyle(e).width,10),o=parseFloat(window.getComputedStyle(e).height,10);if(e.style.position="absolute",console.log(t,o,t-o),t-o<5){var r=parseFloat(window.getComputedStyle(e.parentNode).width,10),n=parseFloat(window.getComputedStyle(e.parentNode).height,10);console.log(r,n),r>n&&(e.style.top="50%",e.style.left="0",e.style.width="100%",e.style.height="auto",o=parseFloat(window.getComputedStyle(e).height,10),e.style.marginTop="-"+o/2+"px"),n>r&&(e.style.top="0",e.style.left="50%",e.style.width="auto",e.style.height="100%",t=parseFloat(window.getComputedStyle(e).width,10),e.style.marginLeft="-"+t/2+"px")}else t>o?(e.style.top="0",e.style.left="50%",e.style.height="100%",e.style.width="auto",t=parseFloat(window.getComputedStyle(e).width,10),e.style.marginLeft="-"+t/2+"px"):o>t&&(e.style.top="50%",e.style.left="0",e.style.marginTop="-"+o/2+"px")}function initDownloadImage(e,t){e.style.width=t+"px",e.style.height=t+"px",e.style.maxWidth=t+"px",e.style.maxHeight=t+"px";for(var o=e.querySelectorAll(".liked_count"),r=0;r<o.length;r++)o[r].style.fontSize="2rem",o[r].querySelector("svg").setAttribute("width","32"),o[r].querySelector("svg").setAttribute("height","32")}function resetDownloadImage(e){e.style.width="calc(100vw - 1rem*2)",e.style.height="calc(100vw - 1rem*2)",e.style.maxWidth="640px",e.style.maxHeight="640px";for(var t=e.querySelectorAll(".liked_count"),o=0;o<t.length;o++)t[o].style.fontSize="1rem",t[o].querySelector("svg").setAttribute("width","16"),t[o].querySelector("svg").setAttribute("height","16")}function downloadURI(){var e="top9_grid.png",t=document.querySelector("canvas").toDataURL({pixelRatio:1});t=t.replace(/^data:image\/[^;]*/,"data:application/octet-stream"),t=t.replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename="+e);var o=document.createElement("a");o.download=e,o.href=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),delete o}function getQueryString(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),o=t.exec(location.search);return null==o?"":decodeURIComponent(o[1].replace(/\+/g," "))}function padding(e){content.innerHTML='<div class="get_msg">Lots of people use now, please visit this url latter</div><a class="get_msg" href="'+host+"/id.html?id="+e+'" target="_blank">'+host+"/id.html?id="+e+"</a>"}function errorCode(e){switch(e){case 0:case"0":console.info("ok");break;case 1:case"1":console.info("padding");break;case 2:case"2":console.info("private"),popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="This Instagram id is private account"});break;case 3:case"3":console.info("job not existing"),popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Some error occurred"});break;case 100:case"100":console.info("no user"),popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="This Instagram id is not exist"})}}function likeSVG(){var e='<svg fill="#ed4956" height="16" viewBox="0 0 48 48" width="16"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';return e}function thousandth(e){if("number"==typeof e&&(e+=""),"string"!=typeof e)return void console.error("argument type error");for(var t=0,o="",r=e.length-1;r>=0;r--)3===t&&(o=","+o,t=0),o=e[r]+o,t++;return o}function initGrid(e,t){var o=t.length,r=[];switch(o){case 1:r=["pure-u-1-1"];break;case 2:r=["pure-u-1-2","pure-u-1-2"];break;case 3:r=["pure-u-1-2","pure-u-1-2","pure-u-1-2","pure-u-1-2"];break;case 4:r=["pure-u-1-2","pure-u-1-2","pure-u-1-2","pure-u-1-2"];break;case 5:r=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 6:r=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 7:r=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 8:r=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 9:r=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"]}for(var n=0;n<o;n++){var i=document.createElement("div");i.classList.add(r[n]),i.classList.add("grid_section"),i.classList.add("grid_section_"+o);var a=document.createElement("div");a.classList.add("grid_wrap");var s=document.createElement("img");s.classList.add("preview"),a.appendChild(s),i.appendChild(a);var c=document.createElement("div");c.setAttribute("class","liked_count vertical_centering"),c.innerHTML=likeSVG()+" "+thousandth(t[n].like_count),i.appendChild(c),e.appendChild(i)}return e}function submitCrawler(){return document.querySelector("form")?(document.querySelector("form input[name=id]").addEventListener("blur",function(e){this.value=this.value.toLowerCase().trim()}),void document.querySelector("form").addEventListener("submit",function(e){e.preventDefault();var t=this,o=new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/),r=document.querySelector("input[name=id]").value.toLowerCase();if(!r)return void popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Please fill Instagram id"});var n=o.test(r);return n?void grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(e){ajax({method:"POST",url:url+r,data:{token:e},response:"json",success:function(e){0==e.code||1==e.code?t.submit():errorCode(e.code)},error:function(e,t){console.error("POST error: "+e,t)}})})}):void popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Please fill valid Instagram id"})})):void console.error("no form")}function loading(e,t){if(e){document.querySelector("body").classList.add("loading_no_scroll");var o=document.createElement("div");o.style="position:fixed;top:0;left:0;width:100%;height:100%;background:#e6e6e6;",o.setAttribute("id","loading_layer");var r=document.createElement("div");r.style="position:absolute;top:50%;left:50%;width:80px;height:20px;margin-left:-40px;margin-top:-10px;",r.innerHTML='<div class="loading loading_run"></div>',o.appendChild(r),document.querySelector("body").appendChild(o)}else{document.querySelector("body").classList.remove("loading_no_scroll");var n=document.querySelector("#loading_layer");n&&(n.outerHTML="",n=null)}}function mobile_share_module(e,t){if(!e)return void console.error("url is require");var o=t&&t.iconLine?t.iconLine:"",r=t&&t.iconLine2x?t.iconLine2x:"",n=t&&t.iconFacebook?t.iconFacebook:"",i=t&&t.iconFacebook2x?t.iconFacebook2x:"",a=t&&t.iconMessenger?t.iconMessenger:"",s=t&&t.iconMessenger2x?t.iconMessenger2x:"",c=t&&t.iconTwitter?t.iconTwitter:"",p=t&&t.iconTwitter2x?t.iconTwitter2x:"",l=t&&t.iconPinterest?t.iconPinterest:"",d=t&&t.iconPinterest2x?t.iconPinterest2x:"",u=t&&t.iconWhatsapp?t.iconWhatsapp:"",h=t&&t.iconWhatsapp2x?t.iconWhatsapp2x:"",g=t&&t.fbAppId?"&app_id="+t.fbAppId:"",m=t&&t.twitterText?"&text="+t.twitterText:"",f=t&&t.twitterRef?"&original_referer="+t.twitterRef:"",x={line:{href:"https://line.naver.jp/R/msg/text/?"+encodeURIComponent(e),icon:o,icon_2x:r},facebook:{href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e),icon:n,icon_2x:i},messenger:{href:"fb-messenger://share/?link="+encodeURIComponent(e)+g,icon:a,icon_2x:s},pinterest:{href:"https://pinterest.com/pin/create/link/?url="+encodeURIComponent(e),icon:l,icon_2x:d},twitter:{href:"https://twitter.com/intent/tweet?url="+encodeURIComponent(e)+m+f,icon:c,icon_2x:p},whatsapp:{href:"whatsapp://send?text="+encodeURIComponent(e),icon:u,icon_2x:h}};return x}function initGet(){function e(r){ajax({method:"GET",url:url+t+"?token="+r,data:{},response:"json",success:function(r){0==r.code?location.href=host+"/id.html?id="+t:(o--,o>0?setTimeout(function(){grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(t){e(t)})})},5e3):padding(t))},error:function(r,n){console.error("POST error: "+r,n),o--,o>0?setTimeout(function(){grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(t){e(t)})})},5e3):padding(t)}})}content.innerHTML='<div class="get_msg animate__animated animate__flash animate__infinite animate__slower">📸 Counting picture...</div><div class="get_msg animate__animated animate__flash animate__infinite animate__slower">❤️ Counting liked...</div><div class="get_msg">Please wait about 1 minute</div>';var t=getQueryString("id"),o=12;recaptcha.onload=function(){grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(t){e(t)})})},recaptcha.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Some error occurred, please try latter"})}}function initId(){function e(e){ajax({method:"GET",url:url+o,data:{},setRequestHeader:{i_token:e},response:"json",success:function(e){loading(!1),errorCode(e.code),0==e.code&&t(e.data)},error:function(e,t){console.error("POST error: "+e,t)}})}function t(e){var t=e.post_list,r=e.total_liked_count,n=e.total_post_count,i='<a class="btn-primary" href="https://instagram.com/'+o+'/" target="_blank">'+o+"</a> Top9 in 2020",a=t.length>8?"Congratulation 🎉":"Ooops! Your posts are a bit less",s={iconLine:"/images/icon_line_32.png",iconLine2x:"/images/icon_line_64.png",iconFacebook:"/images/icon_fb_32.png",iconFacebook2x:"/images/icon_fb_64.png",iconMessenger:"/images/icon_messenger_32.png",iconMessenger2x:"/images/icon_messenger_64.png",iconPinterest:"/images/icon_pinterest_32.png",iconPinterest2x:"/images/icon_pinterest_64.png",iconTwitter:"/images/icon_twitter_32.png",iconTwitter2x:"/images/icon_twitter_64.png",iconWhatsapp:"/images/icon_whatsapp_32.png",iconWhatsapp2x:"/images/icon_whatsapp_64.png"},c=location.href.replace(location.search,"")+"?id="+encodeURIComponent(o)+"&ref=sharing",p=mobile_share_module(c,s),l='<a class="share_link" href="'+p.facebook.href+'" target="_blank"><img src="'+p.facebook.icon+'" srcset="'+p.facebook.icon_2x+" 1.5x, "+p.facebook.icon_2x+" 2x, "+p.facebook.icon_2x+' 3x" alt="Facebook"></a>';l=l+'<a class="share_link" href="'+p.line.href+'" target="_blank"><img src="'+p.line.icon+'" srcset="'+p.line.icon_2x+" 1.5x, "+p.line.icon_2x+" 2x, "+p.line.icon_2x+' 3x" alt="LINE"></a>',l=l+'<a class="share_link" href="'+p.pinterest.href+'" target="_blank"><img src="'+p.pinterest.icon+'" srcset="'+p.pinterest.icon_2x+" 1.5x, "+p.pinterest.icon_2x+" 2x, "+p.pinterest.icon_2x+' 3x" alt="Pinterest"></a>',l=l+'<a class="share_link" href="'+p.twitter.href+'" target="_blank"><img src="'+p.twitter.icon+'" srcset="'+p.twitter.icon_2x+" 1.5x, "+p.twitter.icon_2x+" 2x, "+p.twitter.icon_2x+' 3x" alt="Twitter"></a>',device.mobile()&&(l=l+'<a class="share_link" href="'+p.messenger.href+'" target="_blank"><img src="'+p.messenger.icon+'" srcset="'+p.messenger.icon_2x+" 1.5x, "+p.messenger.icon_2x+" 2x, "+p.messenger.icon_2x+' 3x" alt="Messenger"></a>',l=l+'<a class="share_link" href="'+p.whatsapp.href+'" target="_blank"><img src="'+p.whatsapp.icon+'" srcset="'+p.whatsapp.icon_2x+" 1.5x, "+p.whatsapp.icon_2x+" 2x, "+p.whatsapp.icon_2x+' 3x" alt="WhatsApp"></a>',l+='<a id="share_share" class="share_link" href="javascript:void(0)" target="_blank"><img src="/images/icon_share_32.png" srcset="/images/icon_share_64.png 1.5x, /images/icon_share_64.png 2x, /images/icon_share_64.png 3x" alt="WhatsApp"></a>'),content.innerHTML="<h2>"+i+"</h2><h3>"+a+"</h3><article>You get "+thousandth(r)+" ❤️ & "+thousandth(n)+' 📸 in 2020!</article><section id="grid_section" class="pure-g"></section><section id="content_download" class="pure-g"><div class="pure-u-1 pure-u-sm-1-2"><button class="btn-download" id="download">Download Image</button><p>If you can\'t download, please open this page in browser</p></div><div class="pure-u-1 pure-u-sm-1-2">'+l+'</div></section><h3>Get your Instagram top 9 in 2020!</h3><form class="pure-g" action="/get.html" method="get"><div class="pure-u-2-3"><input class="" type="text" name="id" placeholder="Input your Instagram id"></div><div class="pure-u-1-3"><button class="btn-primary">CONTINUE</button></div></form>';var d=document.createDocumentFragment();document.querySelector("#grid_section").appendChild(initGrid(d,t)),device.mobile()&&document.querySelector("#share_share").addEventListener("click",function(){var e={title:"This is my top 9 liked post in 2020",text:"This is my top 9 liked post in 2020! "+thousandth(r)+" ❤️ & "+thousandth(n)+" 📸   #top9of2020",url:c};navigator.share(e).then(function(){console.log("Shared successfully")})["catch"](function(e){console.error("Share Error:",e)})});for(var u=0;u<t.length;u++)toDataURL(t[u].url,render,u);document.querySelector("#download").addEventListener("click",function(e){e.preventDefault(),gtag("event","download",{event_category:"download",event_label:o,value:1}),loading(!0);var t=document.querySelector("#grid_section"),r=1280,n=0,i=0,a=!0;device.ios()||"Safari"==browser()?(t=createDownloadGrid(content,document.querySelector("#grid_section")),r=parseFloat(window.getComputedStyle(t).width,10),n=t.offsetLeft,i=t.offsetTop,a=!1):initDownloadImage(t,r),html2canvas(t,{allowTaint:!0,useCORS:!0,foreignObjectRendering:a,width:r,height:r,x:n,y:i,scale:1,scrollX:0,scrollY:0}).then(function(e){document.body.appendChild(e),downloadURI(),e.classList.add("hide"),device.ios()||"Safari"==browser()?destoryDownloadGrid():resetDownloadImage(t),setTimeout(function(){loading(!1)},1200)})}),submitCrawler()}content.classList.add("top9"),loading(!0);var o=decodeURIComponent(getQueryString("id"));Object.keys(source).length?(t(source),loading(!1)):(recaptcha.onload=function(){grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(t){e(t)})})},recaptcha.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Some error occurred, please try latter"})})}function initIndex(){var e=document.createElement("script");e.src="https://www.instagram.com/embed.js",e.setAttribute("async",""),document.querySelector("head").appendChild(e);var t='<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CISjAgCn1Mk/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="13" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CISjAgCn1Mk/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> 在 Instagram 查看這則貼文</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CISjAgCn1Mk/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Chander Shiu（@chandershiu）分享的貼文</a></p></div></blockquote>';content.classList.add("index"),content.innerHTML='<article>You can input your Instagram id to check most liked top 9 post in 2020!</article><section id="hash_tag"><a class="btn-primary" href="https://www.instagram.com/explore/tags/top9of2020/" target="_blank">#top9of2020</a></section><section><form class="pure-g" action="/get.html" method="get"><div class="pure-u-3-4"><input class="" type="text" name="id" placeholder="Input your Instagram id"></div><div class="pure-u-1-4"><button class="btn-primary">CONTINUE</button></div></form><h2>User posted in Instagram</h2><section id="user_post">'+t+"</section></section>",submitCrawler()}!function(){function e(e){function t(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function o(e){if(!e)return"";var t="";for(var o in e)t=t+o+"="+encodeURIComponent(e[o])+"&";return t=t.substr(0,t.length-1)}var r,n,i,a,s,c;if(!e)return console.error("not set arguments");if(r=e,!r.method)return console.error("not set method");if(n=r.method,!r.url)return console.error("not set url");if(i=r.url,!r.success)return console.error("not set success callback");if(c=r.success,a=r.data||"","GET"===r.method&&a&&!t(a)&&(i=i+"?"+o(a)),"undefined"!=typeof XDomainRequest){var p=location.host,l=i.replace("https://","").replace("http://","");if(l=l.slice(0,l.indexOf("/")),0===i.indexOf("//")||l!==p){var d=new XDomainRequest;return d.open(n,i),d.onprogress=function(){},d.ontimeout=function(){},d.onerror=function(){},d.onload=function(){c(JSON.parse(d.responseText))},void setTimeout(function(){d.send()},0)}}if(s=new XMLHttpRequest,s.open(n,i),r.setRequestHeader)for(var u in r.setRequestHeader)s.setRequestHeader(u,r.setRequestHeader[u]);r.withCredentials&&(s.withCredentials=!0),"GET"!==r.method&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(o(a)),s.onreadystatechange=function(){if(4===s.readyState)if(200===s.status){var e;switch(r.response){case"json":e=JSON.parse(s.responseText);break;case"xml":e=s.responseXML;break;default:e=JSON.parse(s.responseText)}c(e)}else{if(!r.error)return console.error("xhr.status",s.status);r.error(s.status,s.responseText)}}}window.ajax=e}(),function(){var e=function(e){function t(e){e&&e(r),r.classList.add("popup_hide"),document.body.classList.remove("popup_show")}function o(e,o){e&&e(r),r.classList.remove("popup_hide"),document.body.classList.add("popup_show");r.childNodes;r.querySelector(".popup_close")&&r.querySelector(".popup_close").addEventListener("click",function(){t(o)})}if(!e.dom)return void console.error("popup: hide function not set dom object");var r=e.dom;e.width&&(r.querySelector(".popup_container").style.width=e.width),e.height&&(r.querySelector(".popup_container").style.height=e.height),e.minWidth&&(r.querySelector(".popup_container").style.minWidth=e.minWidth),e.minHeight&&(r.querySelector(".popup_container").style.minHeight=e.minHeight),e.maxWidth&&(r.querySelector(".popup_container").style.maxWidth=e.maxWidth),e.maxHeight&&(r.querySelector(".popup_container").style.maxHeight=e.maxHeight),r.addEventListener("mousedown",function(o){t(e.dosomethingClose)}),r.querySelector(".popup_container").addEventListener("mousedown",function(e){e.stopPropagation()}),r.querySelector(".popup_close")&&r.querySelector(".popup_close").addEventListener("click",function(){t(e.dosomethingClose)}),this.show=o,this.hide=t};window.popup=e}();var recaptcha=document.createElement("script");recaptcha.src="https://www.google.com/recaptcha/api.js?render=6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",document.querySelector("head").append(recaptcha);var router=location.pathname,content=document.querySelector("#content"),url="https://api.top9.best/v1/ig/",host="https://top9.best";switch(router){case"/":case"/index.html":initIndex();break;case"/get":case"/get.html":initGet();break;case"/id":case"/id.html":case"/mock.html":initId();break;default:location.href="/404.html"}var popupDialog=new popup({dom:document.querySelector("#popup"),minWidth:"300px",minHeight:"160px",dosomethingClose:function(e){e.querySelector(".popup_content").innerHTML=""}});document.querySelector("#popup_close").addEventListener("click",function(){popupDialog.hide()});