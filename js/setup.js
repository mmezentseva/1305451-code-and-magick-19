'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var generateIndex = function (length) {
  return Math.floor(Math.random() * length);
};

var getRandomName = function () {

  var randIndexName = generateIndex(NAMES.length);
  var randIndexLastName = generateIndex(LAST_NAMES.length);

  return NAMES[randIndexName] + ' ' + LAST_NAMES[randIndexLastName];
};

var getRandomCoat = function () {
  return WIZARD_COATS[generateIndex(WIZARD_COATS.length)];
};

var getRandomEyes = function () {
  return WIZARD_EYES[generateIndex(WIZARD_EYES.length)];
};

var createWizard = function () {
  return {
    name: getRandomName(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  };
};

var generateWizards = function (number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards.push(createWizard());
  }
  return wizards;
};

var wizards = generateWizards(4);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

