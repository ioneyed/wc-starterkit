'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

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
      name: 'wcClassName',
      message: 'What is the camel-case class name of this web component?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('template.scss'),
      this.destinationPath("components/"+this.props.wcElementName+"/"+this.props.wcElementName+".scss")
    );

    this.fs.copyTpl(
      this.templatePath('template.js'),
      this.destinationPath("components/"+this.props.wcElementName+"/"+this.props.wcElementName+".js"),
      {wcElementName:this.props.wcElementName, wcClassName: this.props.wcClassName}
    );

    this.fs.copyTpl(
      this.templatePath('template.html'),
      this.destinationPath("components/"+this.props.wcElementName+"/"+this.props.wcElementName+".html"),
      {wcClassName: this.props.wcClassName}
    );
  }
});
