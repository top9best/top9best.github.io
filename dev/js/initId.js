function initId () {
  content.classList.add('top9');
  // if (!Object.keys(source).length) {
  //   popupDialog.show(function (dom) {
  //     dom.querySelector('.popup_content').innerHTML = 'Some error occurred(This top9 not found)';
  //   });
  //   return;
  // }

  loading(true);
  var id = decodeURIComponent(getQueryString('id'));

  if (Object.keys(source).length) {
    initData(source);
    loading(false);
  } else {

    recaptcha.onload = function () {
      grecaptcha.ready(function () {
        grecaptcha.execute('6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ', { action: 'submit' }).then(function (token) {
          getData(token);
        });
      });
    };

    recaptcha.onerror = function () {
      popupDialog.show(function (dom) {
        dom.querySelector('.popup_content').innerHTML = 'Some error occurred, please try latter';
      });
    };
  }


  function getData (token) {
    ajax({
      method: 'GET',
      url: url + id,
      data: {
      },
      setRequestHeader: {
        'i_token': token
      },
      response: 'json',
      success: function (res) {
        loading(false);
        errorCode(res.code);
        if (res.code == 0) {

          initData(res.data);
        } else {
        }
      },
      error: function (status, res) {
        console.error('POST error: ' + status, res);
      }
    });
  }

  function initData (source) {

    var postList = source.post_list;
    var totalLikedCount = source.total_liked_count;
    var totalPostCount = source.total_post_count;
    var title = (postList.length > 8) ? 'Congratulation 🎉' : 'Ooops! Your posts are a bit less';

    var imgUrl = {
      'iconLine': '/images/icon_line_32.png',
      'iconLine2x': '/images/icon_line_64.png',
      'iconFacebook': '/images/icon_fb_32.png',
      'iconFacebook2x': '/images/icon_fb_64.png',
      'iconMessenger': '/images/icon_messenger_32.png',
      'iconMessenger2x': '/images/icon_messenger_64.png',
      'iconPinterest': '/images/icon_pinterest_32.png',
      'iconPinterest2x': '/images/icon_pinterest_64.png',
      'iconTwitter': '/images/icon_twitter_32.png',
      'iconTwitter2x': '/images/icon_twitter_64.png',
      'iconWhatsapp': '/images/icon_whatsapp_32.png',
      'iconWhatsapp2x': '/images/icon_whatsapp_64.png'
    };

    var share = mobile_share_module(location.href.replace(location.search, '') + '?id=' + encodeURIComponent(id) + '&ref=sharing', imgUrl);
    var shareDom = '<a class="share_link" href="' + share.facebook.href + '" target="_blank"><img src="' + share.facebook.icon + '" srcset="' + share.facebook.icon_2x + ' 1.5x, ' + share.facebook.icon_2x + ' 2x, ' + share.facebook.icon_2x + ' 3x" alt="Facebook"></a>';
    shareDom = shareDom + '<a class="share_link" href="' + share.line.href + '" target="_blank"><img src="' + share.line.icon + '" srcset="' + share.line.icon_2x + ' 1.5x, ' + share.line.icon_2x + ' 2x, ' + share.line.icon_2x + ' 3x" alt="LINE"></a>';
    shareDom = shareDom + '<a class="share_link" href="' + share.pinterest.href + '" target="_blank"><img src="' + share.pinterest.icon + '" srcset="' + share.pinterest.icon_2x + ' 1.5x, ' + share.pinterest.icon_2x + ' 2x, ' + share.pinterest.icon_2x + ' 3x" alt="Pinterest"></a>';
    shareDom = shareDom + '<a class="share_link" href="' + share.twitter.href + '" target="_blank"><img src="' + share.twitter.icon + '" srcset="' + share.twitter.icon_2x + ' 1.5x, ' + share.twitter.icon_2x + ' 2x, ' + share.twitter.icon_2x + ' 3x" alt="Twitter"></a>';
    if (device.mobile()) {
      shareDom = shareDom + '<a class="share_link" href="' + share.messenger.href + '" target="_blank"><img src="' + share.messenger.icon + '" srcset="' + share.messenger.icon_2x + ' 1.5x, ' + share.messenger.icon_2x + ' 2x, ' + share.messenger.icon_2x + ' 3x" alt="Messenger"></a>';
      shareDom = shareDom + '<a class="share_link" href="' + share.whatsapp.href + '" target="_blank"><img src="' + share.whatsapp.icon + '" srcset="' + share.whatsapp.icon_2x + ' 1.5x, ' + share.whatsapp.icon_2x + ' 2x, ' + share.whatsapp.icon_2x + ' 3x" alt="WhatsApp"></a>';
    }

    content.innerHTML = '<h2>' + title + '</h2>' +
      '<article>You get ' + thousandth(totalLikedCount) + ' ❤️ & ' + thousandth(totalPostCount) + ' 📸 in 2020!</article>' +
      '<section id="grid_section" class="pure-g"></section>' +
      '<section id="content_download" class="pure-g">' +
      '<div class="pure-u-1 pure-u-sm-1-2">' +
      '<button class="btn-download" id="download">Download Image</button>' +
      '</div>' +
      '<div class="pure-u-1 pure-u-sm-1-2">' +
      shareDom +
      '</div>' +
      '</section>' +
      '<h3>Get your Instagram top 9 in 2020!</h3>' +
      '<form class="pure-g" action="/get.html" method="get">' +
      '<div class="pure-u-2-3">' +
      '<input class="" type="text" name="id" placeholder="Input your Instagram id">' +
      '</div>' +
      '<div class="pure-u-1-3">' +
      '<button class="btn-primary">CONTINUE</button>' +
      '</div>' +
      '</form>' +
      '';
    var fragment = document.createDocumentFragment();

    document.querySelector('#grid_section').appendChild(initGrid(fragment, postList));

    for (var i = 0; i < postList.length; i++) {
      toDataURL(postList[i]['url'], render, i);
    }

    document.querySelector('#download').addEventListener('click', function (e) {
      e.preventDefault();
      loading(true);
      var grid = document.querySelector("#grid_section");
      var size = parseFloat(window.getComputedStyle(grid).width, 10);

      html2canvas(grid, {
        allowTaint: true,
        useCORS: true,
        foreignObjectRendering: false,
        width: size,
        height: size,
        x: grid.offsetLeft,
        y: grid.offsetTop,
        scale: 2,
        scrollX: 0,
        scrollY: 0
      }).then(function (canvas) {
        document.body.appendChild(canvas);
        downloadURI();
        canvas.classList.add('hide');
        // delay
        setTimeout(function () {
          loading(false);
        }, 1200);
      });
    });

    submitCrawler();
  }

}
