function render(e,t){document.querySelectorAll("#grid_section img")[t].src=e}function toDataURL(e,t,n){var o=new XMLHttpRequest;o.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result,n)},e.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML='Some error occurred</br><a href="/?back=id">Back to get top9 post again</a>'})},e.readAsDataURL(o.response)},o.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML='Some error occurred</br><a href="/?back=id">Back to get top9 post again</a>'})},o.open("GET",e),o.responseType="blob",o.send()}function downloadURI(){var e="top9_grid.png",t=document.querySelector("canvas").toDataURL({pixelRatio:1});t=t.replace(/^data:image\/[^;]*/,"data:application/octet-stream"),t=t.replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename="+e);var n=document.createElement("a");n.download=e,n.href=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),delete n}function getQueryString(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null==n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function padding(e){content.innerHTML='<div class="get_msg">Lots of people use now, please visit this url latter</div><a class="get_msg" href="'+host+"/id/"+e+'" target="_blank">'+host+"/id/"+e+"</a>"}function errorCode(e){switch(e){case 0:case"0":console.info("ok");break;case 1:case"1":console.info("padding");break;case 2:case"2":console.info("private"),popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="This Instagram id is private account"});break;case 3:case"3":console.info("job not existing"),popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Some error occurred"});break;case 100:case"100":console.info("no user"),popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="This Instagram id is not exist"})}}function likeSVG(){var e='<svg fill="#ed4956" height="16" viewBox="0 0 48 48" width="16"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';return e}function thousandth(e){if("number"==typeof e&&(e+=""),"string"!=typeof e)return void console.error("argument type error");for(var t=0,n="",o=e.length-1;o>=0;o--)3===t&&(n=","+n,t=0),n=e[o]+n,t++;return n}function initGrid(e,t){var n=t.length,o=[];switch(n){case 1:o=["pure-u-1-1"];break;case 2:o=["pure-u-1-2","pure-u-1-2"];break;case 3:o=["pure-u-1-2","pure-u-1-2","pure-u-1-2","pure-u-1-2"];break;case 4:o=["pure-u-1-2","pure-u-1-2","pure-u-1-2","pure-u-1-2"];break;case 5:o=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 6:o=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 7:o=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 8:o=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 9:o=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"]}for(var r=0;r<n;r++){var i=document.createElement("div");i.classList.add(o[r]),i.classList.add("grid_section"),i.classList.add("grid_section_"+n);var a=document.createElement("img");i.appendChild(a);var c=document.createElement("div");c.setAttribute("class","liked_count vertical_centering"),c.innerHTML=likeSVG()+" "+thousandth(t[r].like_count),i.appendChild(c),e.appendChild(i)}return e}function submitCrawler(){return document.querySelector("form")?void document.querySelector("form").addEventListener("submit",function(e){e.preventDefault();var t=this,n=document.querySelector("input[name=id]").value;n||popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Please fill Instagram id"}),grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(e){ajax({method:"POST",url:url+n,data:{token:e},response:"json",success:function(e){console.log(e),0!=e.code&&1!=e.code||t.submit()},error:function(e,t){console.error("POST error: "+e,t)}})})})}):void console.error("no form")}function loading(e,t){if(e){document.querySelector("body").classList.add("loading_no_scroll");var n=document.createElement("div");n.style="position:fixed;top:0;left:0;width:100%;height:100%;background:#e6e6e6;",n.setAttribute("id","loading_layer");var o=document.createElement("div");o.style="position:absolute;top:50%;left:50%;width:80px;height:20px;margin-left:-40px;margin-top:-10px;",o.innerHTML='<div class="loading loading_run"></div>',n.appendChild(o),document.querySelector("body").appendChild(n)}else{document.querySelector("body").classList.remove("loading_no_scroll");var r=document.querySelector("#loading_layer");r&&(r.outerHTML="",r=null)}}function mobile_share_module(e,t){if(!e)return void console.error("url is require");console.log(t);var n=t&&t.iconLine?t.iconLine:"",o=t&&t.iconLine2x?t.iconLine2x:"",r=t&&t.iconFacebook?t.iconFacebook:"",i=t&&t.iconFacebook2x?t.iconFacebook2x:"",a=t&&t.iconMessenger?t.iconMessenger:"",c=t&&t.iconMessenger2x?t.iconMessenger2x:"",s=t&&t.iconTwitter?t.iconTwitter:"",u=t&&t.iconTwitter2x?t.iconTwitter2x:"",p=t&&t.iconPinterest?t.iconPinterest:"",l=t&&t.iconPinterest2x?t.iconPinterest2x:"",d=t&&t.iconWhatsapp?t.iconWhatsapp:"",h=t&&t.iconWhatsapp2x?t.iconWhatsapp2x:"",m=t&&t.fbAppId?"&app_id="+t.fbAppId:"",g=t&&t.twitterText?"&text="+t.twitterText:"",f=t&&t.twitterRef?"&original_referer="+t.twitterRef:"",_={line:{href:"https://line.naver.jp/R/msg/text/?"+encodeURIComponent(e),icon:n,icon_2x:o},facebook:{href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e),icon:r,icon_2x:i},messenger:{href:"fb-messenger://share/?link="+encodeURIComponent(e)+m,icon:a,icon_2x:c},pinterest:{href:"https://pinterest.com/pin/create/link/?url="+encodeURIComponent(e),icon:p,icon_2x:l},twitter:{href:"https://twitter.com/intent/tweet?url="+encodeURIComponent(e)+g+f,icon:s,icon_2x:u},whatsapp:{href:"whatsapp://send?text="+encodeURIComponent(e),icon:d,icon_2x:h}};return _}function initGet(){function e(o){ajax({method:"GET",url:url+t+"?token="+o,data:{},response:"json",success:function(r){0==r.code?location.href=host+"/id/"+t:(n--,n>0?setTimeout(function(){e(o)},5e3):padding(t))},error:function(r,i){console.error("POST error: "+r,i),n--,n>0?setTimeout(function(){e(o)},5e3):padding(t)}})}content.innerHTML='<div class="get_msg animate__animated animate__flash animate__infinite animate__slower">📸 Counting picture...</div><div class="get_msg animate__animated animate__flash animate__infinite animate__slower">❤️ Counting liked...</div><div class="get_msg">Please wait about 1 minute</div>',console.log(getQueryString("id"));var t=getQueryString("id"),n=12;setTimeout(function(){grecaptcha.ready(function(){grecaptcha.execute("reCAPTCHA_site_key",{action:"submit"}).then(function(t){e(t)})})},1800)}function initId(){if(content.classList.add("top9"),!Object.keys(source).length)return void popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Some error occurred(This top9 not found)"});var e=source.post_list,t=source.total_liked_count,n=source.total_post_count,o=e.length>8?"Congratulation 🎉":"Ooops! Your posts are a bit less",r={iconLine:"/images/icon_line_32.png",iconLine2x:"/images/icon_line_64.png",iconFacebook:"/images/icon_fb_32.png",iconFacebook2x:"/images/icon_fb_64.png",iconMessenger:"/images/icon_messenger_32.png",iconMessenger2x:"/images/icon_messenger_64.png",iconPinterest:"/images/icon_pinterest_32.png",iconPinterest2x:"/images/icon_pinterest_64.png",iconTwitter:"/images/icon_twitter_32.png",iconTwitter2x:"/images/icon_twitter_64.png",iconWhatsapp:"/images/icon_whatsapp_32.png",iconWhatsapp2x:"/images/icon_whatsapp_64.png"},i=mobile_share_module(location.href.replace(location.search,"")+"?ref=sharing",r);console.log(i);var a='<a class="share_link" href="'+i.facebook.href+'" target="_blank"><img src="'+i.facebook.icon+'" srcset="'+i.facebook.icon_2x+" 1.5x, "+i.facebook.icon_2x+" 2x, "+i.facebook.icon_2x+' 3x" alt="Facebook"></a>';a=a+'<a class="share_link" href="'+i.line.href+'" target="_blank"><img src="'+i.line.icon+'" srcset="'+i.line.icon_2x+" 1.5x, "+i.line.icon_2x+" 2x, "+i.line.icon_2x+' 3x" alt="LINE"></a>',a=a+'<a class="share_link" href="'+i.pinterest.href+'" target="_blank"><img src="'+i.pinterest.icon+'" srcset="'+i.pinterest.icon_2x+" 1.5x, "+i.pinterest.icon_2x+" 2x, "+i.pinterest.icon_2x+' 3x" alt="Pinterest"></a>',a=a+'<a class="share_link" href="'+i.twitter.href+'" target="_blank"><img src="'+i.twitter.icon+'" srcset="'+i.twitter.icon_2x+" 1.5x, "+i.twitter.icon_2x+" 2x, "+i.twitter.icon_2x+' 3x" alt="Twitter"></a>',device.mobile()&&(a=a+'<a class="share_link" href="'+i.messenger.href+'" target="_blank"><img src="'+i.messenger.icon+'" srcset="'+i.messenger.icon_2x+" 1.5x, "+i.messenger.icon_2x+" 2x, "+i.messenger.icon_2x+' 3x" alt="Messenger"></a>',a=a+'<a class="share_link" href="'+i.whatsapp.href+'" target="_blank"><img src="'+i.whatsapp.icon+'" srcset="'+i.whatsapp.icon_2x+" 1.5x, "+i.whatsapp.icon_2x+" 2x, "+i.whatsapp.icon_2x+' 3x" alt="WhatsApp"></a>'),content.innerHTML="<h2>"+o+"</h2><article>You get "+thousandth(t)+" ❤️ & "+thousandth(n)+' 📸 in 2020!</article><section id="grid_section" class="pure-g"></section><section id="content_download" class="pure-g"><div class="pure-u-1 pure-u-sm-1-2"><button class="btn-download" id="download">Download Image</button></div><div class="pure-u-1 pure-u-sm-1-2">'+a+'</div></section><h3>Get your Instagram top 9 in 2020!</h3><form class="pure-g" action="/get.html" method="get"><div class="pure-u-2-3"><input class="" type="text" name="id" placeholder="Input your Instagram id"></div><div class="pure-u-1-3"><button class="btn-primary">CONTINUE</button></div></form>';var c=document.createDocumentFragment();document.querySelector("#grid_section").appendChild(initGrid(c,e));for(var s=0;s<e.length;s++)toDataURL(e[s].url,render,s);document.querySelector("#download").addEventListener("click",function(e){e.preventDefault(),loading(!0);var t=document.querySelector("#grid_section"),n=1200;t.style.width=n+"px",t.style.height=n+"px",t.style.maxWidth=n+"px",t.style.maxHeight=n+"px",html2canvas(t,{allowTaint:!0,useCORS:!0,foreignObjectRendering:!0,width:n,height:n,x:0,y:0,scale:1,scrollX:0,scrollY:0}).then(function(e){document.body.appendChild(e),downloadURI(),t.style.width="100vw",t.style.height="100vw",t.style.maxWidth="",t.style.maxHeight="",setTimeout(function(){loading(!1)},1200)})}),submitCrawler()}function initIndex(){content.innerHTML='<section><form class="pure-g" action="/get.html" method="get"><div class="pure-u-2-3"><input class="" type="text" name="id" placeholder="Input your Instagram id"></div><div class="pure-u-1-3"><button class="btn-primary">CONTINUE</button></div></form></section>',submitCrawler()}!function(){function e(e){function t(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function n(e){if(!e)return"";var t="";for(var n in e)t=t+n+"="+encodeURIComponent(e[n])+"&";return t=t.substr(0,t.length-1)}var o,r,i,a,c,s;if(!e)return console.error("not set arguments");if(o=e,!o.method)return console.error("not set method");if(r=o.method,!o.url)return console.error("not set url");if(i=o.url,!o.success)return console.error("not set success callback");if(s=o.success,a=o.data||"","GET"===o.method&&a&&!t(a)&&(i=i+"?"+n(a)),"undefined"!=typeof XDomainRequest){var u=location.host,p=i.replace("https://","").replace("http://","");if(p=p.slice(0,p.indexOf("/")),0===i.indexOf("//")||p!==u){var l=new XDomainRequest;return l.open(r,i),l.onprogress=function(){},l.ontimeout=function(){},l.onerror=function(){},l.onload=function(){s(JSON.parse(l.responseText))},void setTimeout(function(){l.send()},0)}}if(c=new XMLHttpRequest,c.open(r,i),o.setRequestHeader)for(var d in o.setRequestHeader)c.setRequestHeader(d,o.setRequestHeader[d]);o.withCredentials&&(c.withCredentials=!0),"GET"!==o.method&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(n(a)),c.onreadystatechange=function(){if(4===c.readyState)if(200===c.status){var e;switch(o.response){case"json":e=JSON.parse(c.responseText);break;case"xml":e=c.responseXML;break;default:e=JSON.parse(c.responseText)}s(e)}else{if(!o.error)return console.error("xhr.status",c.status);o.error(c.status,c.responseText)}}}window.ajax=e}(),function(){var e=function(e){function t(e){e&&e(o),o.classList.add("popup_hide"),document.body.classList.remove("popup_show")}function n(e,n){e&&e(o),o.classList.remove("popup_hide"),document.body.classList.add("popup_show");o.childNodes;o.querySelector(".popup_close")&&o.querySelector(".popup_close").addEventListener("click",function(){t(n)})}if(!e.dom)return void console.error("popup: hide function not set dom object");var o=e.dom;e.width&&(o.querySelector(".popup_container").style.width=e.width),e.height&&(o.querySelector(".popup_container").style.height=e.height),e.minWidth&&(o.querySelector(".popup_container").style.minWidth=e.minWidth),e.minHeight&&(o.querySelector(".popup_container").style.minHeight=e.minHeight),e.maxWidth&&(o.querySelector(".popup_container").style.maxWidth=e.maxWidth),e.maxHeight&&(o.querySelector(".popup_container").style.maxHeight=e.maxHeight),o.addEventListener("mousedown",function(n){t(e.dosomethingClose)}),o.querySelector(".popup_container").addEventListener("mousedown",function(e){e.stopPropagation()}),o.querySelector(".popup_close")&&o.querySelector(".popup_close").addEventListener("click",function(){t(e.dosomethingClose)}),this.show=n,this.hide=t};window.popup=e}();var recaptcha=document.createElement("script");recaptcha.src="https://www.google.com/recaptcha/api.js?render=6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",document.querySelector("head").append(recaptcha);var router=location.pathname,content=document.querySelector("#content"),url="https://api.top9.best/v1/ig/",host="https://top9.best";switch(router){case"/":case"/index.html":initIndex();break;case"/get":case"/get.html":initGet();break;default:router.indexOf("/id/")!=-1?initId():location.href="/404.html"}var popupDialog=new popup({dom:document.querySelector("#popup"),minWidth:"300px",minHeight:"160px",dosomethingClose:function(e){e.querySelector(".popup_content").innerHTML=""}});document.querySelector("#popup_close").addEventListener("click",function(){popupDialog.hide()});