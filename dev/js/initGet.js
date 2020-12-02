function initGet () {
  content.innerHTML = '<div class="get_msg animate__animated animate__flash animate__infinite animate__slower">📸 Counting picture...</div>' +
    '<div class="get_msg animate__animated animate__flash animate__infinite animate__slower">❤️ Counting liked...</div>' +
    '<div class="get_msg">Please wait about 1 minute</div>';
  var id = getQueryString('id');
  var counter = 60 / 5;

  recaptcha.onload = function () {
    grecaptcha.ready(function () {
      grecaptcha.execute('6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ', { action: 'submit' }).then(function (token) {
        polling(token);
      });
    });
  };

  recaptcha.onerror = function () {
    popupDialog.show(function (dom) {
      dom.querySelector('.popup_content').innerHTML = 'Some error occurred, please try latter';
    });
  };

  function polling (token) {
    ajax({
      method: 'GET',
      url: url + id + '?token=' + token,
      data: {
      },
      response: 'json',
      success: function (res) {
        if (res.code == 0) {
          location.href = host + '/id.html?id=' + id;
        } else {
          counter--;
          if (counter > 0) {
            setTimeout(function () {
              grecaptcha.ready(function () {
                grecaptcha.execute('6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ', { action: 'submit' }).then(function (token) {
                  polling(token);
                });
              });
            }, 5000);
          } else {
            padding(id);
          }
        }
      },
      error: function (status, res) {
        console.error('POST error: ' + status, res);
        counter--;
        if (counter > 0) {
          setTimeout(function () {
            grecaptcha.ready(function () {
              grecaptcha.execute('6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ', { action: 'submit' }).then(function (token) {
                polling(token);
              });
            });
          }, 5000);
        } else {
          padding(id);
        }
      }
    });
  }
}
