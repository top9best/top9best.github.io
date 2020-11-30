function initIndex () {
  content.innerHTML = '<section>' +
    '<form class="pure-g" action="/get.html" method="get">' +
    '<div class="pure-u-2-3">' +
    '<input class="" type="text" name="id" placeholder="Input your Instagram id">' +
    '</div>' +
    '<div class="pure-u-1-3">' +
    '<button class="btn-primary">CONTINUE</button>' +
    '</div>' +
    '</form>' +
    '</section>';
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var _this = this;
    var id = document.querySelector('input[name=id]').value;
    if (!id) {
      popupDialog.show(function (dom) {
        dom.querySelector('.popup_content').innerHTML = 'Please fill Instagram id';
      });
    }

    ajax({
      method: 'POST',
      url: url + id,
      data: {
      },
      response: 'json',
      success: function (res) {
        console.log(res);
        if (res.code == 0 || res.code == 1) {
          _this.submit();
        }
      },
      error: function (status, res) {
        console.error('POST error: ' + status, res);
      }
    });
  })
}
