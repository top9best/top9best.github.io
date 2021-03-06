var recaptcha = document.createElement('script');
recaptcha.src = 'https://www.google.com/recaptcha/api.js?render=6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ';
document.querySelector('head').append(recaptcha);

var router = location.pathname;
var content = document.querySelector('#content');
var url = 'https://api.top9.best/v1/ig/';
var host = 'https://top9.best';
switch (router) {
  case '/':
  case '/index.html':
    initIndex();
    break;
  case '/get':
  case '/get.html':
    initGet();
    break;
  case '/id':
  case '/id.html':
  case '/mock.html':
    initId();
    break;
  default:
    location.href = '/404.html';
    break;
}

var popupDialog = new popup({
  dom: document.querySelector('#popup'),
  minWidth: '300px',
  minHeight: '160px',
  dosomethingClose: function (dom) {
    dom.querySelector('.popup_content').innerHTML = '';
  }
});
document.querySelector('#popup_close').addEventListener('click', function () {
  popupDialog.hide();
});
