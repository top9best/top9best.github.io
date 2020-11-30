function initGet () {
  content.innerHTML = '<div class="get_msg animate__animated animate__flash animate__infinite animate__slower">📸 Counting picture...</div>' +
    '<div class="get_msg animate__animated animate__flash animate__infinite animate__slower">❤️ Counting liked...</div>' +
    '<div class="get_msg">Please wait about 1 minute</div>';
  console.log(getQueryString('id'));
  var id = getQueryString('id');
  var counter = 60 / 5;
  polling();
  function polling () {
    ajax({
      method: 'GET',
      url: url + id,
      data: {
      },
      response: 'json',
      success: function (res) {
        if (res.code == 0) {
          location.href = host + '/id/' + id + '.html';
        } else {
          counter--;
          if (counter > 0) {
            setTimeout(function () {
              polling();
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
            polling();
          }, 5000);
        } else {
          padding(id);
        }
      }
    });
  }
}
