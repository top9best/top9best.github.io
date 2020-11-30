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
  submitCrawler();
  // document.querySelector('form').addEventListener('submit', function (e) {
  //   e.preventDefault();
  //   var _this = this;
  //   var id = document.querySelector('input[name=id]').value;
  //   if (!id) {
  //     popupDialog.show(function (dom) {
  //       dom.querySelector('.popup_content').innerHTML = 'Please fill Instagram id';
  //     });
  //   }
  //   grecaptcha.ready(function () {
  //     grecaptcha.execute('6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ', { action: 'submit' }).then(function (token) {
  //       ajax({
  //         method: 'POST',
  //         url: url + id,
  //         data: {
  //           'token': token
  //         },
  //         response: 'json',
  //         success: function (res) {
  //           console.log(res);
  //           if (res.code == 0 || res.code == 1) {
  //             _this.submit();
  //           }
  //         },
  //         error: function (status, res) {
  //           console.error('POST error: ' + status, res);
  //         }
  //       });
  //     });
  //   });
  // });
}
