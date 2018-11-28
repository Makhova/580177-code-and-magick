'use strict';

var wizardsSetupField = document.querySelector('.setup');
var similarWizardsField = document.querySelector('.setup-similar');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвин'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var similarWizards = [];
var similarWizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardsList = document.querySelector('.setup-similar-list');

var createSimilarWizard = function (array1, array2, array3, array4) {
  var similarWizard = {
    name: array1[Math.floor(Math.random() * array1.length)] + ' ' + array2[Math.floor(Math.random() * array2.length)],
    coatColor: array3[Math.floor(Math.random() * array3.length)],
    eyesColor: array4[Math.floor(Math.random() * array4.length)],
  };

  return similarWizard;
};

var addWizardElement = function (wizard) {
  var wizardElement = similarWizardsTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

wizardsSetupField.classList.remove('hidden');
similarWizardsField.classList.remove('hidden');

for (var i = 0; i < 4; i++) {
  createSimilarWizard(wizardNames, wizardSurnames, coatColors, eyesColors);
  similarWizards.push(createSimilarWizard(wizardNames, wizardSurnames, coatColors, eyesColors));
  addWizardElement(similarWizards[i]);
  similarWizardsList.appendChild(addWizardElement(similarWizards[i]));
}
