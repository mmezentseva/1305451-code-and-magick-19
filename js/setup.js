'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsNumber = 4;

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

var wizards = generateWizards(wizardsNumber);

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

