'use strict';
const pageNavList = document.querySelector(".page-header__nav");
const navToggle = document.querySelector(".page-header__toggle");

pageNavList.classList.remove("page-header__nav--nojs");

navToggle.addEventListener("click", function() {
  if (pageNavList.classList.contains("page-header__nav--closed")) {
    pageNavList.classList.remove("page-header__nav--closed");
    pageNavList.classList.add("page-header__nav--opened");
  } else {
    pageNavList.classList.remove("page-header__nav--opened");
    pageNavList.classList.add("page-header__nav--closed");
  }
})

const tabButtons = document.querySelectorAll(".offer__tab").forEach((item) => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    const id = e.target.getAttribute("href").replace("#", "");

    document.querySelectorAll('.country-offer').forEach(
      (item) => item.classList.remove('country-offer--selected')
    );

    document.querySelectorAll('.offer__tab').forEach(
      (item) => item.classList.remove('offer__tab--active')
    );

    item.classList.add('offer__tab--active');
    document.getElementById(id).classList.add('country-offer--selected');
  })
});


document.querySelectorAll(".catalog__hover-button").forEach((item) => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    const link = e.target.parentNode;
    const id = link.getAttribute("href").replace("#", "");

    document.querySelectorAll('.country-offer').forEach(
      (item) => item.classList.remove('country-offer--selected')
    );

    document.querySelectorAll('.offer__tab').forEach(
      (item) => {
        item.classList.remove('offer__tab--active');
      }
    );

    const result = document.getElementById(id);
    result.classList.add('country-offer--selected');
    result.scrollIntoView({block: "center", inline: "center"});
  })
});

document.querySelectorAll(".catalog__image").forEach((item) => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    const link = e.target.parentNode.parentNode;
    console.log(link);
    const id = link.getAttribute("href").replace("#", "");

    document.querySelectorAll('.country-offer').forEach(
      (item) => item.classList.remove('country-offer--selected')
    );

    document.querySelectorAll('.offer__tab').forEach(
      (item) => {
        item.classList.remove('offer__tab--active');
      }
    );

    const result = document.getElementById(id);
    result.classList.add('country-offer--selected');
    result.scrollIntoView({block: "center", inline: "center"});
  })
});

const popupToggle = document.querySelector('.popup-info__toggle');
const popup = document.querySelector('.popup-info');
const popupSubmit = document.querySelector('.popup-info__submit-button');
const success = document.querySelector('.successful-submit');
const infoForm = document.querySelector('.info-form__form');

document.querySelectorAll('.popup-button').forEach((button) => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.add('popup-info--opened');
    popup.querySelector('.popup-info__input--tel').focus();
  })
})

popupToggle.addEventListener('click', function(e) {
  e.preventDefault();
  popup.classList.remove('popup-info--opened');
})

popup.addEventListener('submit', function(e) {
  e.preventDefault();
  success.classList.add('successful-submit--opened');
  popup.classList.remove('popup-info--opened');
})

infoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  localStorage.setItem("phone", document.getElementById("phone").value);
  localStorage.setItem("email", document.getElementById("email").value);
  success.classList.add('successful-submit--opened');
})

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    popup.classList.remove('popup-info--opened');
    success.classList.remove('successful-submit--opened');
  }
});

document.querySelector('.successful-submit__toggle').addEventListener('click', function () {
  success.classList.remove('successful-submit--opened');
  popup.classList.remove('popup-info--opened');
});
