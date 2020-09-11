const body = $('body')
const hamburger = $('#hamburger-check')


hamburger.on('change', e => {
  const checked = e.target.checked
  if (checked) {
    body.addClass('scrollDisabled')
    return
  }
  body.removeClass('scrollDisabled')
})

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
const pricingBlock = $('.fourth-price-block')[0]
pricingButton.on('click', e => {
  e.preventDefault()
  hamburger.checked = false
  pricingBlock.scrollIntoView({behavior: 'smooth'})
})