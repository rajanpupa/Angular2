# Angular2 | learning

### What Angular2 Offers

* Dynamic HTML
* Powerful templates
* Fast rendering
* HTTP services
* Component encapsulation
* Form & input handling
* Event handling
* Routing
* Latest Javascript standards
* Much much more

### What's new from Angular 1

* No more controllers and scope
* Components / resuable code
* Reduced learning curve
* TypeScript & ES2015/ES6
* Better mobile support
* RxJS & Observables

### What is TypeScript?

* Strict superset of Javascript with added features
* Maintained by Microsoft
* Optional static typing
* Class-based object-oriented programming
* Resembles languages like Java and C/C++

### Components

* Main way to build and specify elements and logic on the page
* Basic building block of UI.
* An Angular2 application is a tree of Angular components.
* `Decorators` allow us to mark a class as an Angular components
* and also provide metadata that determines how the component should be processed, instantiated and used at runtime.

```
import {Component } from '@angular/core';

@Component({
    selector: 'my-component',
    template: '<div> Hello my name is {{name}}. <button (click)="sayMyName()">Say my name</button>'
})
export class MyComponent{
    constructor(){
        this.name = 'Max'
    }
    sayMyName(){
        console.log('My name is ', this.name);
    }
}
```

* Events always have parenthesis around them
* selector is the tag name

### services

* Services are used for reusable data services to share data between components throughout an application
* Refactoring data access to a separate service keeps the component lean and focused on supporting the view
* Services are invariably asynchronous. We can return data as a promise or an observable using RxJS

#### Angular 2 Installation Methods

* From scratch
* Using quickstart `https://github.com/angular/quickstart`
* Angular-CLI Tool `npm install -g angular-cli`

* Requirements: Nodejs, NPM, Git

## Lets Code !!

* Using quickstart method 
```
git clone https://github.com/angular/quickstart
npm install
npm start
`

### Add a new component

* create a new folder in the `app` folder called `components`
* Create a new ts file i.e. `user.component.ts`
* goto `app.module.ts` 
* import the new component `import { UserComponent }  from './components/user.component';`
* also add the new component in the declarations ` declarations: [ AppComponent, UserComponent ]`

* now you can clear the app.components.ts from 
```
import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p>Address: {{address.street}}</p>
  `,
})
export class UserComponent  { 
  name = 'rajan upadhyay'; 
  email = 'rajan@gmail.com'
  address = {
    street: '1000 N 4th street',
    city: 'Fairfield',
    state: 'IA'
  }
}
```

to

```
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <user></user>
  `,
})
export class AppComponent  { 
  
}

```

* the view will still look the same, but the data is coming from userComponents 

* can declare a constructor in the class
* constructor runs each time its loaded
* can overwrite the property value in constructor
* its good to assign the property values in the constructor
* declare variables with type in the body
* create interfaces for complex object type properties
* can move the html in template section to separate html file and refer to it by templateUrl property.

* can create services (with annotation @Injectables), and inject it to components and use it.

## References

https://www.youtube.com/watch?v=-zW1zHqsdyc