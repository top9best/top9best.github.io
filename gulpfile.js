/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2016-07-05 05:07:59
 * @version $Id$
 */

const gulp = require('gulp'),
  watch = require('gulp-watch'),
  cssmin = require('gulp-cssmin'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  autoprefixer = require('autoprefixer'),
  postcssApply = require('postcss-apply'),
  postcssVar = require('postcss-css-variables'),
  postcss = require('gulp-postcss'),
  cheerio = require('cheerio'),
  fs = require('fs');

var cssPath = './dev/css/**/',
  jsPath = './dev/js/**/',
  build = './build/',
  css = 'index.css',
  js = 'index.js',
  processors = [
    autoprefixer({ browsers: ['last 2 version'] }),
    postcssApply,
    postcssVar
  ];

gulp.task('default', function (cb) {
  var options = {};
  watch(cssPath + '*.css', options, function (e) {
    // console.log('e:'+JSON.stringify(e));
    console.log(new Date() + ' -- ' + e.history[0].replace(e.base, ''));
    // console.log('\n');
    gulp.src(cssPath + '*.css')
      .pipe(concat(css, { newLine: '\n' }))
      .pipe(postcss(processors))
      .pipe(cssmin())
      .pipe(gulp.dest(build));
    updateTimeStamp('css');
  });
  watch(jsPath + '*.js', options, function (e) {
    // console.log('e:'+JSON.stringify(e));
    console.log(new Date() + ' -- ' + e.history[0].replace(e.base, ''));
    // console.log('\n');
    gulp.src(jsPath + '*.js')
      .pipe(concat(js, { newLine: '\n' }))
      .pipe(uglify())
      .pipe(gulp.dest(build));
    updateTimeStamp('js');
  });
});

function updateTimeStamp (type) {
  // var $ = cheerio.load('index.html');
  var html = '';
  if (type == 'js') {
    fs.readFile('index.html', function (err, html) {
      if (err) {
        throw err;
      } else {
        $ = cheerio.load(html.toString());
        console.log($('#js').attr('src'));
        $('#js').attr('src', '/build/' + js + '?ts=' + (new Date().getTime()));
        console.log($('#js').attr('src'));
        html = $.html();
        fs.writeFile('index.html', html, function (err, data) {
          if (err) {
            return console.log(err);
          }
          console.log(data);
        });
      }
    });
    fs.readFile('get.html', function (err, html) {
      if (err) {
        throw err;
      } else {
        $ = cheerio.load(html.toString());
        console.log($('#js').attr('src'));
        $('#js').attr('src', '/build/' + js + '?ts=' + (new Date().getTime()));
        console.log($('#js').attr('src'));
        html = $.html();
        fs.writeFile('get.html', html, function (err, data) {
          if (err) {
            return console.log(err);
          }
          console.log(data);
        });
      }
    });

  }
  if (type == 'css') {
    fs.readFile('index.html', function (err, html) {
      if (err) {
        throw err;
      } else {
        $ = cheerio.load(html.toString());
        console.log($('#css').attr('href'));
        $('#css').attr('href', '/build/' + css + '?ts=' + (new Date().getTime()));
        console.log($('#css').attr('href'));
        html = $.html();
        fs.writeFile('index.html', html, function (err, data) {
          if (err) {
            return console.log(err);
          }
          console.log(data);
        });
      }
    });
    fs.readFile('404.html', function (err, html) {
      if (err) {
        throw err;
      } else {
        $ = cheerio.load(html.toString());
        console.log($('#css').attr('href'));
        $('#css').attr('href', '/build/' + css + '?ts=' + (new Date().getTime()));
        console.log($('#css').attr('href'));
        html = $.html();
        fs.writeFile('404.html', html, function (err, data) {
          if (err) {
            return console.log(err);
          }
          console.log(data);
        });
      }
    });
    fs.readFile('get.html', function (err, html) {
      if (err) {
        throw err;
      } else {
        $ = cheerio.load(html.toString());
        console.log($('#css').attr('href'));
        $('#css').attr('href', '/build/' + css + '?ts=' + (new Date().getTime()));
        console.log($('#css').attr('href'));
        html = $.html();
        fs.writeFile('get.html', html, function (err, data) {
          if (err) {
            return console.log(err);
          }
          console.log(data);
        });
      }
    });
    fs.readFile('policy.html', function (err, html) {
      if (err) {
        throw err;
      } else {
        $ = cheerio.load(html.toString());
        console.log($('#css').attr('href'));
        $('#css').attr('href', '/build/' + css + '?ts=' + (new Date().getTime()));
        console.log($('#css').attr('href'));
        html = $.html();
        fs.writeFile('policy.html', html, function (err, data) {
          if (err) {
            return console.log(err);
          }
          console.log(data);
        });
      }
    });
  }
}
