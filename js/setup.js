'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var WIZARD_NUMBERS = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomNumber = function (length) {
  return Math.floor(Math.random() * length);
};

var getRandomElementFromArray = function (array) {
  return array[getRandomNumber(array.length)];
};

var createWizard = function () {
  return {
    name: getRandomElementFromArray(NAMES) + ' ' + getRandomElementFromArray(LAST_NAMES),
    coatColor: getRandomElementFromArray(WIZARD_COATS),
    eyesColor: getRandomElementFromArray(WIZARD_EYES)
  };
};

var generateWizards = function (number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards.push(createWizard());
  }
  return wizards;
};

var wizards = generateWizards(WIZARD_NUMBERS);

var renderWizardTemplate = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizardTemplate(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
renderWizards();
userDialog.querySelector('.setup-similar').classList.remove('hidden');

// Task 4
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var userNameInput = setup.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var setupCoatColor = setupWizard.querySelector('.wizard-coat');
var coatColorInput = document.querySelector('input[name="coat-color"]');
var setupEyesColor = setupWizard.querySelector('.wizard-eyes');
var eyesColorInput = document.querySelector('input[name="eyes-color"]');
var setupFireballColor = document.querySelector('.setup-fireball-wrap');
var fireballColorInput = setupFireballColor.querySelector('input[name="fireball-color"]');

var popupEscPressHandler = function (evt) {
  if (evt.key === ESC_KEY && userNameInput !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var coatColorChangedHandler = function () {
  setupCoatColor.style.fill = getRandomElementFromArray(WIZARD_FIREBALLS);
  coatColorInput.value = getRandomElementFromArray(WIZARD_FIREBALLS);
};
setupCoatColor.addEventListener('click', coatColorChangedHandler);


var eyesColorChangedHandler = function () {
  setupEyesColor.style.fill = getRandomElementFromArray(WIZARD_FIREBALLS);
  eyesColorInput.value = getRandomElementFromArray(WIZARD_FIREBALLS);
};
setupEyesColor.addEventListener('click', eyesColorChangedHandler);


var fireballChangedHandler = function () {
  setupFireballColor.style.background = getRandomElementFromArray(WIZARD_FIREBALLS);
  fireballColorInput.value = getRandomElementFromArray(WIZARD_FIREBALLS);
};
setupFireballColor.addEventListener('click', fireballChangedHandler);

