function browser(){for(var e=this,t="unknown browser",o=navigator.userAgent,n=[{agent:o.search("Edge"),browser:"Edge"},{agent:o.search("OPR"),browser:"Opera"},{agent:o.search("Opera"),browser:"Opera"},{agent:o.search("Firefox"),browser:"Firefox"},{agent:o.search("Chrome"),browser:"Chrome"},{agent:/CriOS/i.test(o)&&/iphone|ipod|ipad/i.test(o),browser:"Chrome"},{agent:o.search("Safari"),browser:"Safari"},{agent:o.search("MSIE 7"),browser:"IE7"},{agent:o.search("MSIE 8"),browser:"IE8"},{agent:o.search("MSIE 9"),browser:"IE9"},{agent:o.search("MSIE 10"),browser:"IE10"},{agent:o.search("like Gecko"),browser:"IE11"},{agent:o.search("MSIE"),browser:"IE"}],r=0;r<n.length;r++)e[n[r].browser.toLowerCase()]=!1;for(var i=0;i<n.length;i++)if(n[i].agent>0||n[i].agent===!0){e[n[i].browser.toLowerCase()]=!0,t=n[i].browser;break}return t}function render(e,t){document.querySelectorAll("#grid_section img")[t].src=e}function toDataURL(e,t,o){var n=new XMLHttpRequest;n.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result,o)},e.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML='Some error occurred</br><a href="/?back=id">Back to get top9 post again</a>'})},e.readAsDataURL(n.response)},n.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML='Some error occurred</br><a href="/?back=id">Back to get top9 post again</a>'})},n.open("GET",e),n.responseType="blob",n.send()}function createDownloadGrid(e,t){var o=t.cloneNode(!0);o.setAttribute("id","grid_download"),o.style.width="1280px",o.style.height="1280px",o.style.maxWidth="1280px",o.style.maxHeight="1280px",e.appendChild(o);for(var n=o.querySelectorAll("img"),r=0;r<n.length;r++)n[r].classList.remove("preview"),computeGirdPosition(n[r]);return o}function destoryDownloadGrid(){var e=document.querySelector("#grid_download");e.innerHTML="",e.remove()}function computeGirdPosition(e){var t=parseFloat(window.getComputedStyle(e).width,10),o=parseFloat(window.getComputedStyle(e).height,10);if(e.style.position="absolute",console.log(t,o,t-o),t-o<5){var n=parseFloat(window.getComputedStyle(e.parentNode).width,10),r=parseFloat(window.getComputedStyle(e.parentNode).height,10);console.log(n,r),n>r&&(e.style.top="50%",e.style.left="0",e.style.width="100%",e.style.height="auto",o=parseFloat(window.getComputedStyle(e).height,10),e.style.marginTop="-"+o/2+"px"),r>n&&(e.style.top="0",e.style.left="50%",e.style.width="auto",e.style.height="100%",t=parseFloat(window.getComputedStyle(e).width,10),e.style.marginLeft="-"+t/2+"px")}else t>o?(e.style.top="0",e.style.left="50%",e.style.height="100%",e.style.width="auto",t=parseFloat(window.getComputedStyle(e).width,10),e.style.marginLeft="-"+t/2+"px"):o>t&&(e.style.top="50%",e.style.left="0",e.style.marginTop="-"+o/2+"px")}function downloadURI(){var e="top9_grid.png",t=document.querySelector("canvas").toDataURL({pixelRatio:1});t=t.replace(/^data:image\/[^;]*/,"data:application/octet-stream"),t=t.replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename="+e);var o=document.createElement("a");o.download=e,o.href=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),delete o}function getQueryString(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),o=t.exec(location.search);return null==o?"":decodeURIComponent(o[1].replace(/\+/g," "))}function padding(e){content.innerHTML='<div class="get_msg">Lots of people use now, please visit this url latter</div><a class="get_msg" href="'+host+"/id.html?id="+e+'" target="_blank">'+host+"/id.html?id="+e+"</a>"}function errorCode(e){switch(e){case 0:case"0":console.info("ok");break;case 1:case"1":console.info("padding");break;case 2:case"2":console.info("private"),popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="This Instagram id is private account"});break;case 3:case"3":console.info("job not existing"),popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Some error occurred"});break;case 100:case"100":console.info("no user"),popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="This Instagram id is not exist"})}}function likeSVG(){var e='<svg fill="#ed4956" height="16" viewBox="0 0 48 48" width="16"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';return e}function thousandth(e){if("number"==typeof e&&(e+=""),"string"!=typeof e)return void console.error("argument type error");for(var t=0,o="",n=e.length-1;n>=0;n--)3===t&&(o=","+o,t=0),o=e[n]+o,t++;return o}function initGrid(e,t){var o=t.length,n=[];switch(o){case 1:n=["pure-u-1-1"];break;case 2:n=["pure-u-1-2","pure-u-1-2"];break;case 3:n=["pure-u-1-2","pure-u-1-2","pure-u-1-2","pure-u-1-2"];break;case 4:n=["pure-u-1-2","pure-u-1-2","pure-u-1-2","pure-u-1-2"];break;case 5:n=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 6:n=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 7:n=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 8:n=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"];break;case 9:n=["pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3","pure-u-1-3"]}for(var r=0;r<o;r++){var i=document.createElement("div");i.classList.add(n[r]),i.classList.add("grid_section"),i.classList.add("grid_section_"+o);var a=document.createElement("div");a.classList.add("grid_wrap");var c=document.createElement("img");c.classList.add("preview"),a.appendChild(c),i.appendChild(a);var s=document.createElement("div");s.setAttribute("class","liked_count vertical_centering"),s.innerHTML=likeSVG()+" "+thousandth(t[r].like_count),i.appendChild(s),e.appendChild(i)}return e}function submitCrawler(){return document.querySelector("form")?(document.querySelector("form input[name=id]").addEventListener("blur",function(e){this.value=this.value.toLowerCase().trim()}),void document.querySelector("form").addEventListener("submit",function(e){e.preventDefault();var t=this,o=new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/),n=document.querySelector("input[name=id]").value.toLowerCase();if(!n)return void popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Please fill Instagram id"});var r=o.test(n);return r?void grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(e){ajax({method:"POST",url:url+n,data:{token:e},response:"json",success:function(e){0==e.code||1==e.code?t.submit():errorCode(e.code)},error:function(e,t){console.error("POST error: "+e,t)}})})}):void popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Please fill valid Instagram id"})})):void console.error("no form")}function loading(e,t){if(e){document.querySelector("body").classList.add("loading_no_scroll");var o=document.createElement("div");o.style="position:fixed;top:0;left:0;width:100%;height:100%;background:#e6e6e6;",o.setAttribute("id","loading_layer");var n=document.createElement("div");n.style="position:absolute;top:50%;left:50%;width:80px;height:20px;margin-left:-40px;margin-top:-10px;",n.innerHTML='<div class="loading loading_run"></div>',o.appendChild(n),document.querySelector("body").appendChild(o)}else{document.querySelector("body").classList.remove("loading_no_scroll");var r=document.querySelector("#loading_layer");r&&(r.outerHTML="",r=null)}}function mobile_share_module(e,t){if(!e)return void console.error("url is require");var o=t&&t.iconLine?t.iconLine:"",n=t&&t.iconLine2x?t.iconLine2x:"",r=t&&t.iconFacebook?t.iconFacebook:"",i=t&&t.iconFacebook2x?t.iconFacebook2x:"",a=t&&t.iconMessenger?t.iconMessenger:"",c=t&&t.iconMessenger2x?t.iconMessenger2x:"",s=t&&t.iconTwitter?t.iconTwitter:"",u=t&&t.iconTwitter2x?t.iconTwitter2x:"",p=t&&t.iconPinterest?t.iconPinterest:"",l=t&&t.iconPinterest2x?t.iconPinterest2x:"",d=t&&t.iconWhatsapp?t.iconWhatsapp:"",h=t&&t.iconWhatsapp2x?t.iconWhatsapp2x:"",g=t&&t.fbAppId?"&app_id="+t.fbAppId:"",m=t&&t.twitterText?"&text="+t.twitterText:"",f=t&&t.twitterRef?"&original_referer="+t.twitterRef:"",w={line:{href:"https://line.naver.jp/R/msg/text/?"+encodeURIComponent(e),icon:o,icon_2x:n},facebook:{href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e),icon:r,icon_2x:i},messenger:{href:"fb-messenger://share/?link="+encodeURIComponent(e)+g,icon:a,icon_2x:c},pinterest:{href:"https://pinterest.com/pin/create/link/?url="+encodeURIComponent(e),icon:p,icon_2x:l},twitter:{href:"https://twitter.com/intent/tweet?url="+encodeURIComponent(e)+m+f,icon:s,icon_2x:u},whatsapp:{href:"whatsapp://send?text="+encodeURIComponent(e),icon:d,icon_2x:h}};return w}function initGet(){function e(n){ajax({method:"GET",url:url+t+"?token="+n,data:{},response:"json",success:function(n){0==n.code?location.href=host+"/id.html?id="+t:(o--,o>0?setTimeout(function(){grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(t){e(t)})})},5e3):padding(t))},error:function(n,r){console.error("POST error: "+n,r),o--,o>0?setTimeout(function(){grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(t){e(t)})})},5e3):padding(t)}})}content.innerHTML='<div class="get_msg animate__animated animate__flash animate__infinite animate__slower">📸 Counting picture...</div><div class="get_msg animate__animated animate__flash animate__infinite animate__slower">❤️ Counting liked...</div><div class="get_msg">Please wait about 1 minute</div>';var t=getQueryString("id"),o=12;recaptcha.onload=function(){grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(t){e(t)})})},recaptcha.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Some error occurred, please try latter"})}}function initId(){function e(e){ajax({method:"GET",url:url+o,data:{},setRequestHeader:{i_token:e},response:"json",success:function(e){loading(!1),errorCode(e.code),0==e.code&&t(e.data)},error:function(e,t){console.error("POST error: "+e,t)}})}function t(e){var t=e.post_list,n=e.total_liked_count,r=e.total_post_count,i=t.length>8?"Congratulation 🎉":"Ooops! Your posts are a bit less",a={iconLine:"/images/icon_line_32.png",iconLine2x:"/images/icon_line_64.png",iconFacebook:"/images/icon_fb_32.png",iconFacebook2x:"/images/icon_fb_64.png",iconMessenger:"/images/icon_messenger_32.png",iconMessenger2x:"/images/icon_messenger_64.png",iconPinterest:"/images/icon_pinterest_32.png",iconPinterest2x:"/images/icon_pinterest_64.png",iconTwitter:"/images/icon_twitter_32.png",iconTwitter2x:"/images/icon_twitter_64.png",iconWhatsapp:"/images/icon_whatsapp_32.png",iconWhatsapp2x:"/images/icon_whatsapp_64.png"},c=mobile_share_module(location.href.replace(location.search,"")+"?id="+encodeURIComponent(o)+"&ref=sharing",a),s='<a class="share_link" href="'+c.facebook.href+'" target="_blank"><img src="'+c.facebook.icon+'" srcset="'+c.facebook.icon_2x+" 1.5x, "+c.facebook.icon_2x+" 2x, "+c.facebook.icon_2x+' 3x" alt="Facebook"></a>';s=s+'<a class="share_link" href="'+c.line.href+'" target="_blank"><img src="'+c.line.icon+'" srcset="'+c.line.icon_2x+" 1.5x, "+c.line.icon_2x+" 2x, "+c.line.icon_2x+' 3x" alt="LINE"></a>',s=s+'<a class="share_link" href="'+c.pinterest.href+'" target="_blank"><img src="'+c.pinterest.icon+'" srcset="'+c.pinterest.icon_2x+" 1.5x, "+c.pinterest.icon_2x+" 2x, "+c.pinterest.icon_2x+' 3x" alt="Pinterest"></a>',s=s+'<a class="share_link" href="'+c.twitter.href+'" target="_blank"><img src="'+c.twitter.icon+'" srcset="'+c.twitter.icon_2x+" 1.5x, "+c.twitter.icon_2x+" 2x, "+c.twitter.icon_2x+' 3x" alt="Twitter"></a>',device.mobile()&&(s=s+'<a class="share_link" href="'+c.messenger.href+'" target="_blank"><img src="'+c.messenger.icon+'" srcset="'+c.messenger.icon_2x+" 1.5x, "+c.messenger.icon_2x+" 2x, "+c.messenger.icon_2x+' 3x" alt="Messenger"></a>',s=s+'<a class="share_link" href="'+c.whatsapp.href+'" target="_blank"><img src="'+c.whatsapp.icon+'" srcset="'+c.whatsapp.icon_2x+" 1.5x, "+c.whatsapp.icon_2x+" 2x, "+c.whatsapp.icon_2x+' 3x" alt="WhatsApp"></a>'),content.innerHTML="<h2>"+i+"</h2><article>You get "+thousandth(n)+" ❤️ & "+thousandth(r)+' 📸 in 2020!</article><section id="grid_section" class="pure-g"></section><section id="content_download" class="pure-g"><div class="pure-u-1 pure-u-sm-1-2"><button class="btn-download" id="download">Download Image</button></div><div class="pure-u-1 pure-u-sm-1-2">'+s+'</div></section><h3>Get your Instagram top 9 in 2020!</h3><form class="pure-g" action="/get.html" method="get"><div class="pure-u-2-3"><input class="" type="text" name="id" placeholder="Input your Instagram id"></div><div class="pure-u-1-3"><button class="btn-primary">CONTINUE</button></div></form>';var u=document.createDocumentFragment();document.querySelector("#grid_section").appendChild(initGrid(u,t));for(var p=0;p<t.length;p++)toDataURL(t[p].url,render,p);document.querySelector("#download").addEventListener("click",function(e){e.preventDefault(),loading(!0);var t=createDownloadGrid(content,document.querySelector("#grid_section")),o=parseFloat(window.getComputedStyle(t).width,10);html2canvas(t,{allowTaint:!0,useCORS:!0,foreignObjectRendering:!1,width:o,height:o,x:t.offsetLeft,y:t.offsetTop,scale:1,scrollX:0,scrollY:0}).then(function(e){document.body.appendChild(e),downloadURI(),e.classList.add("hide"),destoryDownloadGrid(),setTimeout(function(){loading(!1)},1200)})}),submitCrawler()}content.classList.add("top9"),loading(!0);var o=decodeURIComponent(getQueryString("id"));Object.keys(source).length?(t(source),loading(!1)):(recaptcha.onload=function(){grecaptcha.ready(function(){grecaptcha.execute("6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",{action:"submit"}).then(function(t){e(t)})})},recaptcha.onerror=function(){popupDialog.show(function(e){e.querySelector(".popup_content").innerHTML="Some error occurred, please try latter"})})}function initIndex(){content.innerHTML='<article>You can input your Instagram id to check most liked top 9 post in 2020!</article><section id="hash_tag"><a class="btn-primary" href="https://www.instagram.com/explore/tags/top9of2020/" targrt="_blank">#top9of2020</a></section><section><form class="pure-g" action="/get.html" method="get"><div class="pure-u-2-3"><input class="" type="text" name="id" placeholder="Input your Instagram id"></div><div class="pure-u-1-3"><button class="btn-primary">CONTINUE</button></div></form></section>',submitCrawler()}!function(){function e(e){function t(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function o(e){if(!e)return"";var t="";for(var o in e)t=t+o+"="+encodeURIComponent(e[o])+"&";return t=t.substr(0,t.length-1)}var n,r,i,a,c,s;if(!e)return console.error("not set arguments");if(n=e,!n.method)return console.error("not set method");if(r=n.method,!n.url)return console.error("not set url");if(i=n.url,!n.success)return console.error("not set success callback");if(s=n.success,a=n.data||"","GET"===n.method&&a&&!t(a)&&(i=i+"?"+o(a)),"undefined"!=typeof XDomainRequest){var u=location.host,p=i.replace("https://","").replace("http://","");if(p=p.slice(0,p.indexOf("/")),0===i.indexOf("//")||p!==u){var l=new XDomainRequest;return l.open(r,i),l.onprogress=function(){},l.ontimeout=function(){},l.onerror=function(){},l.onload=function(){s(JSON.parse(l.responseText))},void setTimeout(function(){l.send()},0)}}if(c=new XMLHttpRequest,c.open(r,i),n.setRequestHeader)for(var d in n.setRequestHeader)c.setRequestHeader(d,n.setRequestHeader[d]);n.withCredentials&&(c.withCredentials=!0),"GET"!==n.method&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(o(a)),c.onreadystatechange=function(){if(4===c.readyState)if(200===c.status){var e;switch(n.response){case"json":e=JSON.parse(c.responseText);break;case"xml":e=c.responseXML;break;default:e=JSON.parse(c.responseText)}s(e)}else{if(!n.error)return console.error("xhr.status",c.status);n.error(c.status,c.responseText)}}}window.ajax=e}(),function(){var e=function(e){function t(e){e&&e(n),n.classList.add("popup_hide"),document.body.classList.remove("popup_show")}function o(e,o){e&&e(n),n.classList.remove("popup_hide"),document.body.classList.add("popup_show");n.childNodes;n.querySelector(".popup_close")&&n.querySelector(".popup_close").addEventListener("click",function(){t(o)})}if(!e.dom)return void console.error("popup: hide function not set dom object");var n=e.dom;e.width&&(n.querySelector(".popup_container").style.width=e.width),e.height&&(n.querySelector(".popup_container").style.height=e.height),e.minWidth&&(n.querySelector(".popup_container").style.minWidth=e.minWidth),e.minHeight&&(n.querySelector(".popup_container").style.minHeight=e.minHeight),e.maxWidth&&(n.querySelector(".popup_container").style.maxWidth=e.maxWidth),e.maxHeight&&(n.querySelector(".popup_container").style.maxHeight=e.maxHeight),n.addEventListener("mousedown",function(o){t(e.dosomethingClose)}),n.querySelector(".popup_container").addEventListener("mousedown",function(e){e.stopPropagation()}),n.querySelector(".popup_close")&&n.querySelector(".popup_close").addEventListener("click",function(){t(e.dosomethingClose)}),this.show=o,this.hide=t};window.popup=e}();var recaptcha=document.createElement("script");recaptcha.src="https://www.google.com/recaptcha/api.js?render=6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ",document.querySelector("head").append(recaptcha);var router=location.pathname,content=document.querySelector("#content"),url="https://api.top9.best/v1/ig/",host="https://top9.best";switch(router){case"/":case"/index.html":initIndex();break;case"/get":case"/get.html":initGet();break;case"/id":case"/id.html":case"/mock.html":initId();break;default:location.href="/404.html"}var popupDialog=new popup({dom:document.querySelector("#popup"),minWidth:"300px",minHeight:"160px",dosomethingClose:function(e){e.querySelector(".popup_content").innerHTML=""}});document.querySelector("#popup_close").addEventListener("click",function(){popupDialog.hide()});