'use strict';

var ios = navigator.userAgent.match(/iPhone|iPad|iPod/i);
var android = navigator.userAgent.match(/Android/i);
if (ios) {
  var elements = document.querySelectorAll(".hide-on-ios");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}
if (android) {
  var elements = document.querySelectorAll(".hide-on-android");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}

/*
var showAgeCheck = function () {
  document.querySelector(".age-check").style.display = "block";
};

var hideAgeCheck = function () {
  document.querySelector(".age-check").style.display = "none";
};

var showChildrens = function () {
  document.querySelector(".children-tab").className = "children-tab active";
  document.querySelector(".all-tab").className = "all-tab";
  var elements = document.querySelectorAll(".adult");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
};

var showAdult = function () {
  document.querySelector(".children-tab").className = "children-tab";
  document.querySelector(".all-tab").className = "all-tab active";
  var elements = document.querySelectorAll(".adult");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "inline";
  }
};

document.querySelector(".all-tab").addEventListener("click", function () {
  showAgeCheck();
});

document.querySelector(".age-check-under").addEventListener("click", function () {
  hideAgeCheck();
});

document.querySelector(".age-check-over").addEventListener("click", function () {
  showAdult();
  hideAgeCheck();
});

document.querySelector(".children-tab").addEventListener("click", function () {
  showChildrens();
});
*/

var MS = {};
MS.App = (function() {

  var ESCAPE_CODE = 27;

  var navButton = document.querySelector('#menu-button-open'),
      navButtonClose = document.querySelector('#menu-button-close'),
      navMenu = document.querySelector('#global-nav');

  var navLinks = navMenu.querySelectorAll('a');

  function initApp() {
    navMenu.addEventListener('keydown', handleKeydown);
    navButton.addEventListener('click', handleClick);
    navButtonClose.addEventListener('click', handleClick);
    disableNavLinks();
  }
  function handleKeydown(event) {
    if (event.keyCode === ESCAPE_CODE) {
      document.body.classList.toggle('active');
      disableNavLinks();
      navButton.focus();
    }
  }
  function handleClick(event) {
    if (document.body.classList.contains('active')) {
      document.body.classList.remove('active');
      disableNavLinks();
    }
    else {
      document.body.classList.add('active');
      enableNavLinks();
      /*navLinks.eq(0).focus();*/
    }
  }
  function enableNavLinks() {
    /*navButton.attr('aria-label', 'Menu expanded');*/
    /*navMenu.removeAttr('aria-hidden');
    navLinks.removeAttr('tabIndex');*/
  }
  function disableNavLinks() {
    /*navButton.attr('aria-label', 'Menu collapsed');*/
    /*navMenu.attr('aria-hidden', 'true');
    navLinks.attr('tabIndex', '-1');*/
  }

  return {
    init: function(){
      initApp();
    }
  }
})();

document.addEventListener("DOMContentLoaded", function() {
  new MS.App.init();
});
