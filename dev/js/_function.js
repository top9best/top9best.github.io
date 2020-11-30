function render (res, count) {
  document.querySelectorAll('#grid_section img')[count].src = res;
}

function toDataURL (url, callback, count) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result, count);
    }
    reader.onerror = function () {
      popupDialog.show(function (dom) {
        dom.querySelector('.popup_content').innerHTML = 'Some error occurred</br><a href="/?back=id">Back to get top9 post again</a>';
      });
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.onerror = function () {
    popupDialog.show(function (dom) {
      dom.querySelector('.popup_content').innerHTML = 'Some error occurred</br><a href="/?back=id">Back to get top9 post again</a>';
    });
  }
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

function downloadURI () {
  // var fileName = 'grid_' + new Date() + '.png';
  var fileName = 'top9_grid.png';
  var dataURL = document.querySelector('canvas').toDataURL({ pixelRatio: 1 });

  dataURL = dataURL.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
  dataURL = dataURL.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=' + fileName);

  var link = document.createElement('a');
  link.download = fileName;
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

function getQueryString (name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function padding (id) {
  content.innerHTML = '<div class="get_msg">Lots of people use now, please visit this url latter</div>' +
    '<a class="get_msg" href="' + host + '/id/' + id + '" target="_blank">' + host + '/id/' + id + '</a>';
}

function errorCode (code) {
  switch (code) {
    case 0:
    case '0':
      console.info('ok');
      break;
    case 1:
    case '1':
      console.info('padding');
      break;
    case 2:
    case '2':
      console.info('private');
      popupDialog.show(function (dom) {
        dom.querySelector('.popup_content').innerHTML = 'This Instagram id is private account';
      });
      break;
    case 3:
    case '3':
      console.info('job not existing');
      popupDialog.show(function (dom) {
        dom.querySelector('.popup_content').innerHTML = 'Some error occurred';
      });
      break;
    case 100:
    case '100':
      console.info('no user');
      popupDialog.show(function (dom) {
        dom.querySelector('.popup_content').innerHTML = 'This Instagram id is not exist';
      });
      break;
  }
}

function likeSVG () {
  var liked = '<svg fill="#ed4956" height="16" viewBox="0 0 48 48" width="16"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';
  return liked;
}

function thousandth (argument) {
  if (typeof (argument) === 'number') {
    argument = argument + '';
  }
  if (typeof (argument) !== 'string') {
    console.error('argument type error');
    return;
  }
  var count = 0,
    tmp = '';
  for (var i = argument.length - 1; i >= 0; i--) {
    if (count === 3) {
      tmp = ',' + tmp;
      count = 0;
    }
    tmp = argument[i] + tmp;
    count++;
  }
  return tmp;
}

function initGrid (vDom, postList) {
  var l = postList.length;
  var classGrid = [];
  switch (l) {
    case 1:
      classGrid = ['pure-u-1-1'];
      break;
    case 2:
      classGrid = ['pure-u-1-2', 'pure-u-1-2'];
      break;
    case 3:
      // classGrid = ['pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3'];
      classGrid = ['pure-u-1-2', 'pure-u-1-2', 'pure-u-1-2', 'pure-u-1-2'];
      break;
    case 4:
      classGrid = ['pure-u-1-2', 'pure-u-1-2', 'pure-u-1-2', 'pure-u-1-2'];
      break;
    case 5:
      // classGrid = ['pure-u-1-2', 'pure-u-1-2', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3'];
      classGrid = ['pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3'];
      break;
    case 6:
      classGrid = ['pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3'];
      break;
    case 7:
      // classGrid = ['pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-4', 'pure-u-1-4', 'pure-u-1-4', 'pure-u-1-4'];
      classGrid = ['pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3'];
      break;
    case 8:
      // classGrid = ['pure-u-1-2', 'pure-u-1-2', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3'];
      classGrid = ['pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3'];
      break;
    case 9:
      classGrid = ['pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3', 'pure-u-1-3'];
      break;
  }
  for (var i = 0; i < l; i++) {
    var div = document.createElement('div');
    div.classList.add(classGrid[i]);
    div.classList.add('grid_section');
    div.classList.add('grid_section_' + l);
    var img = document.createElement('img');
    div.appendChild(img);
    var liked = document.createElement('div');
    liked.setAttribute('class', 'liked_count vertical_centering');
    liked.innerHTML = likeSVG() + ' ' + thousandth(postList[i]['like_count']);
    div.appendChild(liked);
    vDom.appendChild(div);
  }
  return vDom;
}

function submitCrawler () {
  if (!document.querySelector('form')) {
    console.error('no form');
    return;
  }
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var _this = this;
    var id = document.querySelector('input[name=id]').value;
    if (!id) {
      popupDialog.show(function (dom) {
        dom.querySelector('.popup_content').innerHTML = 'Please fill Instagram id';
      });
    }
    grecaptcha.ready(function () {
      grecaptcha.execute('6LcwTPMZAAAAAIEoRQ2fm2cVMWWfvpeUJQX_CgcZ', { action: 'submit' }).then(function (token) {
        ajax({
          method: 'POST',
          url: url + id,
          data: {
            'token': token
          },
          response: 'json',
          success: function (res) {
            if (res.code == 0 || res.code == 1) {
              _this.submit();
            } else {
              errorCode(res.code);
            }
          },
          error: function (status, res) {
            console.error('POST error: ' + status, res);
          }
        });
      });
    });
  });
}
