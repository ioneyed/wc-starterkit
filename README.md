# wc-starterkit
A web component starter kit and style guide for native/vanilla web components.

## Why?
There are two functions of this repo.  One is to provide a scaffold for creating vanilla web components, the other is to provide a style guide to document the web components.

### Web Component Starter Kit
To create a new web component use `yo wc`.  Yeoman will ask you what you want the element name to be (something like aris-toast or beacon-select) then it will ask for a description of that element.

Once Yeoman is done it will create a new folder in `components` and place an HTML, SCSS, and JS file into the new folder.  You can edit those files to create your web component.  It automatically adds the lifecycles and template into the JS file for you.

Yeoman will also add a new element object to styleguide.json.

### Web Component Style Guide
Using `gulp build` you can create a web page in the `dist` folder that will take styleguide.json and create a web component guide for all your components.  `gulp build` builds all the components and the web into `dist`.  You can use `gulp watch` during development to see what it looks like.

styleguide.json has an element array and each element object looks like this:
```
{
	"name": "aris-toast",
	"description": "Element to display a toast message.  Used when feedback needs to be given to the user.",
	"examples": [{
		"title": "Basic Example",
		"description": "When .peek() is called on the aris-toast element it will display a message to the user.",
		"html": "<aris-toast>#newline##tab#Hello user!#newline#</aris-toast>",
		"code": "<aris-toast>Hello user!</aris-toast><a onclick=\"document.querySelector('aris-toast').peek();\" href=\"javascript:void(0);\">Click to see toast.</a>"
	}]
}
```

The element name and description will be created when you give your input to yeoman to generate the web component.  The examples array can be use to create multiple examples on how to use the web component.  `html` is the code that will be shown to the visitor.  It will replace #newline# with a new line and #tab# with 4 spaces, which enables you to show the user how to use the element in a clean way.  `code` is the code that is acutally rendered on the page to show an example of the web component.
