'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var fs = require('fs');
var yosay = require('yosay');
var styleguide = require('../../../styleguide.json');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the beautiful ' + chalk.red('generator-wc') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'wcElementName',
      message: 'What is the element name of this web component?'
    },
    {
      type: 'input',
      name: 'wcDescription',
      message: 'What is the description of this web component?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var elementName = this.props.wcElementName;

    var firstPart = elementName.substr(0, elementName.indexOf("-"));
    var lastPart = elementName.substr(elementName.indexOf("-") + 1);
    lastPart = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
    var className = firstPart+lastPart;

    styleguide.elements.push({name: elementName, description: this.props.wcDescription, examples:[]});

    this.fs.copyTpl(
      this.templatePath('template.scss'),
      this.destinationPath("components/"+elementName+"/"+elementName+".scss")
    );

    this.fs.copyTpl(
      this.templatePath('template.js'),
      this.destinationPath("components/"+elementName+"/"+elementName+".js"),
      {wcElementName:elementName, wcClassName: className}
    );

    this.fs.copyTpl(
      this.templatePath('template.html'),
      this.destinationPath("components/"+elementName+"/"+elementName+".html"),
      {wcClassName: className}
    );

    fs.writeFile('styleguide.json', JSON.stringify(styleguide));
  }
});
