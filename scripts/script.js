const body = $('body')

///
const languageSelectWrapper = $('#language-select-wrapper')
const languageSelectIcon = $('#language-select-icon')
const languageSelectList = $('#language-select-list')

const selectedLanguage = 'english'
languageSelectIcon.addClass(selectedLanguage)
let isListOpen = false

languageSelectWrapper.on('click', () => {
  isListOpen = !isListOpen

  if (isListOpen) {
    openList()
  } else {
    closeList()
  }
});

const openList = () => {
  languageSelectList.addClass('opened');
}
const closeList = () => {
  languageSelectList.removeClass('opened');
}

languageSelectList.on('click', (e) => {
  languageSelectIcon.removeClass(selectedLanguage)
  languageSelectIcon.addClass(e.target.textContent)
  closeList()
})

///

const pricingButton = $('#pricing-link')
const hamburgerCheck = $('#hamburger-check')[0]
const pricingBlock = $('.fourth-price-block')[0]
pricingButton.on('click', e => {
  e.preventDefault()
  hamburgerCheck.checked = false
  pricingBlock.scrollIntoView({behavior: 'smooth'})
})

let isSmallThirdTitle = false

$( window ).resize(function(e) {
  if (e.target.innerWidth <= 640 && !isSmallThirdTitle) {
    isSmallThirdTitle = true
    $( ".third-how-it-works-block h3" )[0].textContent = 'How it works';
  } else if (e.target.innerWidth >= 640 && isSmallThirdTitle){
    isSmallThirdTitle = false
    $( ".third-how-it-works-block h3" )[0].textContent = 'How Influencer Detective Works';
  }
});

$(function() {
  if (window.innerWidth <= 640) {
    $( ".third-how-it-works-block h3" )[0].textContent = 'How it works';
  }
  $('img').lazy()
});

window.onload = () => {
  if (window.innerWidth <= 640) {
    $( ".third-how-it-works-block h3" )[0].textContent = 'How it works';
  }
}