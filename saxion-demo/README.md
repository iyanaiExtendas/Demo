# extendas-component-library

This is a customized component library created for Extendas B.V. It utilizes the Vuetify component library on Vue JS 3
to enhance the development process and ensure consistent usage of components across various applications and modules.

The library includes the following components:

- FormOverview: Displays entity details.
- FormAdd: Allows adding a new entity.
- FormEdit: Enables editing an existing entity.
- Grouped Tabs: Groups components in a carousel-like structure.
- SkeletonBase: Provides a navigation and main ribbon structure for applications.

With the use of this library, developers can easily pick and place components into differently applications having the
same, or very similar aesthetic with little effort.

This is document entails all the necessary information needed to utilise these components for development.

## Library Breakdown

Certain tools/frameworks were used to develop these components. Som being fundamental to the functionality and look of
the components and others useful for developing.

Tools/frameworks/libraries:

- [Vue Js](https://vuejs.org/): <br>
  a progressive JavaScript framework for building user interfaces.<br>
    - **Justification:**<br>
      Extendas exclusively uses the Vue Js framework for developing some of their applications.
- [Vuetify](https://vuetifyjs.com/en/): <br>
  a popular Material Design component framework for Vue.js that enables developers to create visually appealing and
  responsive web applications.<br>
    - **Justification:**<br>
      Vuetify is a popular UI component library specifically designed for Vue.js. It offers a wide range of pre-built,
      customizable components and styling options that adhere to Google's Material Design principles (one of the worlds
      most
      adhered principles in regard to UI).
- [Pinia](https://pinia.vuejs.org/): <br>
  The new state management system for Vue.js applications, replacing Vuex, providing a simple and efficient way to
  manage application state.<br>
    - **Justification:**<br>
      Pinia seamlessly integrates with Vue.js, allowing you to split application's state into multiple stores, improving
      code organization and maintenance.
- [Axios](https://axios-http.com/): <br>
  a popular JavaScript library used for making HTTP requests from a web browser.<br>
    - **Justification:**<br>
      Axios simplifies the process of making HTTP requests, easily handling API integrations. This is crucial while
      developing a component library as the components in concern heavily depend on sending and receiving API calls from
      a
      backend service.
- [Axios-Mock-Adapter](https://axios-http.com/): <br>
  a utility that allows you to mock HTTP requests made with the Axios library in JavaScript or TypeScript.a utility that
  allows you to mock HTTP requests made with the Axios library in JavaScript or TypeScript.<br>
    - **Justification:**<br>
      is often used in component libraries for testing and development purposes. It allows developers to mock API
      requests and responses, simulating server interactions without actually making real network requests. Allowing
      developers to work on components even before the backend APIs are fully implemented or available.

----------------------------------------------------------------

# Installation/Setup

This component library is stored as an NPM package in GitHubs NPM Registry to use this package you need to be part of
Extendas'
GitHub environment.
Follow these steps to install this Library: <br>

`cd <root of project>`

1. There are peer dependencies required by the library beforehand:
    - These can be installed by pasting these into your dependencies in your projects packaage.json and then
      running `npm install`:<br>
      `"@jest/globals": "^29.5.0",
      "@mdi/font": "5.9.55",
      "axios": "^1.4.0",
      "axios-mock-adapter": "^1.21.4",
      "core-js": "^3.8.3",
      "pinia": "^2.0.36",
      "roboto-fontface": "*",
      "typeface-roboto": "^1.1.13",
      "vue-router": "^4.2.2",
      "vuetify": "^3.3.2",
      "webfontloader": "^1.0.0"`
      <br><br>
    - Alternatively you can use this command in a terminal on your project root directory:<br>
      `npm install @jest/globals @mdi/font axios axios-mock-adapter core-js pinia roboto-fontface typeface-roboto vue-router vuetify webfontloader`
      <br><br>
2. You will need to be logged into NPMs GitHub registry, using a **personal access token from Extendas GitHub
   environment as your password**:<br>
   `npm login --auth-type=legacy --registry=https://npm.pkg.github.com`
   <br><br>
3. NPM install the package from the [GitHub NPM Registry](https://npm.pkg.github.com/):<br>
   `npm install @extendas/extendas-component-library@latest --registry=https://npm.pkg.github.com/`
   <br><br>
4. Before the library can be used, your project must be initialized to use it. Tow files must be modified in your
   project.

- Main.js: Import the library

```js
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import global from './assets/global.css'
import extCompLib from '@extendas/extendas-component-library' //Import the component Librbray

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(global)
app.use(extCompLib) //Use the component Lirbary
app.mount('#app')

```

- Vuetify.js plugin file: import library css

```js
// Styles
import '@mdi/font/css/materialdesignicons.css'
import * as components from "vuetify/components";
import * as labsComponents from "vuetify/labs/components";
import 'vuetify/styles'
import '@extendas/extendas-component-library/dist/extendas-comp-lib.css' //Import the component Librbray CSS


// Vuetify
import {createVuetify} from 'vuetify'

export default createVuetify(
    {
        components: {
            ...components,
            ...labsComponents
        }
    }
)

```

And that is it! The component library is available globally for use in your project. Using a component is as easy as
calling it from whatever .vue file you are in:<br>

```js
<form-overview/>

<form-add/>

<form-edit/>

<group-tabs>
    <template>

    </template>
</group-tabs>

<skeleton-base/>

```

---

# Usage

This sections covers all the requirements and specifications available per component.

**General Rules**<br>
For form fields you can specify the data type of the field; text, number, password....
There are two custom types defined in this library:

This sections covers all the requirements and specifications available per component.

1. Entity:<br>
   this is for data objects that have entities that contain more data objects.<br>
   For example:
   ```js
    user: { 
    name: 'John';
    occupation: 'Developer';
    email: 'john@example.com';
    accounts: [
        {   
            name: 'Amazon',
            active: true,
         },
        {   
            name: 'Disney +',
            active: true,
         },
        {   
            name: 'Netflix',
            active: false,
         }
   ]
        
   
   }

   ```

Here the user 'John' is an entity, but it also has an array of entities in accounts.

2. Options:<br>
   this is for fields that have multiple options to choose from.<br>
   For example:
   ```js
    user: { 
    name: 'John';
    occupation: 'Developer';
    email: 'john@example.com';
    accounts: ["Amazon", "Netflix", "Disney"]
   }

   ```

Here the user 'John' is an entity, and he as a field, accounts with the options Amazon, Netflix and Disney

**Example**

```js
 formFields: {
    [
        {title: "name", value: this.data.name, type: "text"},
        {title: "status", value: this.data.status, type: "text"},
        {title: "auth_name", value: this.data.auth_name, type: "text"},
        {title: "auth_password", value: this.data.auth_password, type: "password"},
        {title: "tariff_group_id", value: this.data.tariff_group_id, type: "number"},
        {title: "configuration_group_id", value: this.data.configuration_group_id, type: "number"},
        {title: "connectors", value: this.data.connectors, type: "entity"},//Entity type
        {title: "capabilities", value: this.data.capabilities, type: "options"}, //Options type
        {title: "availability", value: this.data.availability, type: "text"},
        {title: "free_of_charge_token_contract_id", value: this.data.free_of_charge_token_contract_id, type: "number"},
    ]
}

```

## Form Overview

| Property            | Type    | Description                                                                                                                                                                                                                     | Structure                                                                         | Required |
|---------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|----------|
| **
form-fields**     | Array   | The title and value fields for the form. Passed as an Array of objects, each object representing a field. <br/> **
Title:** the title of the field <br/> **Value:** value of the field<br/>**
Types:** the data type of the field | formFields:<br/> [<br/>{title: "name", value: this.data.name, type: "text"}<br/>] | TRUE     |
| **
edit-route-path** | String  | Route to the edit page of the entity in scope                                                                                                                                                                                   | editRoutePath: '/PATH/TO/EDIT'                                                    | FALSE    |
| **can-edit**        | Boolean | Enable edit button (toggle if it should be shown or not) **DEFAULT true(
BOOLEAN)**                                                                                                                                              | canEdit: false                                                                    | FALSE    |
| **can-delete**      | Boolean | Enable delete button (toggle if it should be shown or not) **DEFAULT true(
BOOLEAN)**                                                                                                                                            | canDelete: false                                                                  | FALSE    |
| **
delete-item**     | Emit    | This emit is sent when the delete button is clicked. On this event, a method can be called to execute the desired outcome                                                                                                       | `<form-overview @delete-item-by-id="methodCall" />`                             | TRUE     |

**Example**

```vue

<template>

  <form-overview
      :form-fields="formFields"
      :edit-route-path="editRoutePath"
      @delete-item-by-id="deleteItem"
  />

</template>

<script>

export default {
  name: "ext-form",

  components: {
    form-overview,

  },

  data() {
    return {
      formFields: [{title: "name", value: this.data.name, type: "text"}],
      editRoutePath: '/Path/To/Edit'

    }
  },
  methods: {
    deleteItem() {
      //Delete item
    }
  }
}

</script>

```

## Form Add

| Property        | Type   | Description                                                                                                                                                                                                                                                                                 | Structure                                                                            | Required |
|-----------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|----------|
| **
form-fields** | Array  | The title and value fields for the form. Passed as an Array of objects, each object representing a field. <br/> **
Title:** the title of the field <br/> **
Value:** for form-add will most likely be empty except for types 'options' and 'entity'<br/>**
Types:** the data type of the field | formFields:<br/> [<br/>{title: "name", value: this.data.name, type: "text"}<br/>]    | TRUE     |
| **
payload**     | Object | The data object payload of the entity to add. Must match structure of entity in backend/database                                                                                                                                                                                            | payloadObj:<br/> { <br/>name: "example", email: "example@gmail.com", age: "21"<br/>} | TRUE     |
| **
add-item**    | Emit   | This emit is sent when the add button is clicked. On this event, a method can be called to execute the desired outcome                                                                                                                                                                      | `<form-add @add-item="addItem" />`                                                 | TRUE     |

**Example**

```vue

<template>

  <form-add
      :form-fields="formFields"
      :payload="payloadObj"
      @add-item="addItem"
  />

</template>

<script>

export default {
  name: "ext-form",

  components: {
    form-add,

  },

  data() {
    return {
      formFields: [{title: "name", value: this.data.name, type: "text"}],
      payloadObj: {name: "example", email: "example@gmail.com", age: "21"}
    }
  },

  methods: {
    addItem() {
      //Add item....
    }
  }
}

</script>

```

## Form Edit

| Property        | Type   | Description                                                                                                                                                                                                                                  | Structure                                                                            | Required |
|-----------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|----------|
| **
form-fields** | Array  | The title and value fields for the form. Passed as an Array of objects, each object representing a field. <br/> **
Title:** the title of the field <br/> **Value:** values of current entity fields<br/>**
Types:** the data type of the field | formFields:<br/> [<br/>{title: "name", value: this.data.name, type: "text"}<br/>]    | TRUE     |
| **
payload**     | Object | The data object payload of the entity to add. Must match structure of entity in backend/database                                                                                                                                             | payloadObj:<br/> { <br/>name: "example", email: "example@gmail.com", age: "21"<br/>} | TRUE     |
| **
edit-item**   | Emit   | This emit is sent when the add button is clicked. On this event, a method can be called to execute the desired outcome                                                                                                                       | `<form-edit @edit-item="methodCall" />`                                             | TRUE     |

**Example**

```vue

<template>

  <form-edit
      :form-fields="formFields"
      :payload="payloadObj"
      @edit-item="editItem"
  />

</template>

<script>

export default {
  name: "ext-form",

  components: {
    form-edit,

  },

  data() {
    return {
      formFields: [{title: "name", value: this.data.name, type: "text"}],
      payloadObj: {name: "example", email: "example@gmail.com", age: "21"}
    }
  },

  methods: {
    editItem() {
      //Edit item....
    }
  }
}

</script>

```

### Grouped Tabs

| Property       | Type   | Description                                                                                      | Structure                                                                            | Required |
|----------------|--------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|----------|
| **
tab-titles** | Array  | An array containing the titles of the components/elements being placed in the carousel.          | tabTitles: ['Overview','Edit', 'Add']                                                | TRUE     |

The components/elements being placed in a carousel item need to be nested in a `<template></template>`. This tag is a
slot with a tag that needs to match it to the tab title. Each item nested in the `<template></template>` tag will
represent a tab in the carousel.

**Example**

```vue

<template>

  <GroupTabs
      :tab - titles="['Overview','Edit', 'Add']"
  >
    <template v-slot:edit>
      <FormEdit
          :form-fields="formFields"
          :payload="charge_point"
          @edit-item="editItem"
      />
    </template>

    <template v-slot:add>
      <FormAdd
          :form-fields="formFields"
          :payload="charge_point"
          @add-item="addItem"
      />
    </template>


  </GroupTabs>

</template>

<script></script>

```

### Skeleton Base

| Property                  | Type   | Description                                                                                                                                                  | Structure                                                                                                                                                            | Required |
|---------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| **
application-title**     | String | The title of the application that will be shown in the main toolbar at the top of the skeleton                                                               | applicationTitle: 'SPIN' //DEFAULT                                                                                                                                   | TRUE     |
| **
application-modules**   | Array  | An Array of the names of different SPIN 'modules'/'applications', along with a route link to the 'modules'/'applications'                                    | applicationModules: <br>[<br>{<br>name: 'SPINcpi', <br>icon: 'mdi-application', <br>route: ''<br>},<br>]                                                             | FALSE    |
| **
menu-data**             | Array  | An Array of menu objects defining the menus. This is where you can add or remove items from the menu drawer                                                  | menuData: <br>[<br>{<br>title: '', icon: '', <br>hasSubViews: boolean, <br>routeName: '', <br>subOptions: [<br>{title: '', icon: '', routeName: '',}<br>],<br>}<br>] | TRUE     |
| **
user-data**             | Object | This is a user data object containing the information of user retrieved from a backend/database service                                                      | userData: {//DATA},                                                                                                                                                  | FALSE    |
| **
impersonation-options** | Array  | A json file containing an Array of the impersonation options available                                                                                       | impersonationOptions: <br>[<br>'Extendas BV', 'Saxion', 'Shell', 'Total'<br>]                                                                                        | FALSE    |
| **
notifications**         | Array  | An Array of objects containing a notification. Each object represents a notification                                                                         | notifications: <br>[<br>{message: '', timestamp: "00:00", icon: ""},<br>]                                                                                            | FALSE    |
| **
img-src-1**             | String | A path to set a small sized img/logo for the main toolbar                                                                                                    | imgSrc1: '/PATH/TO/IMG'                                                                                                                                              | FALSE    |
| **
img-src-2**             | String | A path to set a bigger sized img/logo for the main toolbar                                                                                                   | imgSrc2: '/PATH/TO/IMG'                                                                                                                                              | FALSE    |
| **
set-application-name**  | $Emit  | This emit is sent when the application/module is changed, calling a method to update the title. <br>**
RETURNS: name(
STRING)**                                | `<skeleton-base @set-application-name="methodCall" />`                                                                                                              | FALSE    |
| **
clear-notifications**   | $Emit  | This emit is sent when the clear all button for the notifications is clicked, calling a method to clear notifications. <br>**
RETURNS: name(
STRING)**         | `<skeleton-base @clear-notifications="methodCall" />`                                                                                                               | FALSE    |
| **
go-to-route**           | $Emit  | This emit is sent whenever a redirect is needed, either from a button click or a click from the navigation drawer. Calling a method to navigate to the route | `<skeleton-base @go-to-route="methodCall" />`                                                                                                                       | FALSE    |
| **
go-to-route-search**    | $Emit  | This emit is sent whenever a redirect is needed, from the search bar. Calling a method to navigate to the route                                              | `<skeleton-base @go-to-search="methodCall" />`                                                                                                                      | FALSE    |
| **
stop-impersonation**    | $Emit  | This emit is sent when the impersonation option is cleared, calling a method to stop impersonation                                                           | `<skeleton-base @stop-impersonation="methodCall" />`                                                                                                                | FALSE    |
| **
logout**                | $Emit  | This emit is sent when the logout button is clicked, calling a method to logout the user                                                                     | `<skeleton-base @logout="methodCall" />`                                                                                                                            | FALSE    |

**Example**

```vue

<template>
  <skeleton-base
      :application-title="applicationTitle"
      :menu-data="menuData"
      :application-modules="applicationModules"
      :user-data="userData"
      :impersonation-options="impersonationOptions"
      :notifications="notifications"
      :img-src1="imgSrc1"
      :img-src2="imgSrc2"
      @set-application-name="setApplicationName"
      @clear-notifications="clearNotifications"
      @go-to-route="goToRoute"
      @go-to-route-search="goToRoute"
      @stop-impersonation="handleStopImpersonation"
      @logout="handleLogout"
  ></skeleton-base>

</template>

<script>
import

...

export default {
  name: "ext-skeleton",
  components: {
    skeleton-base,
  },
  data() {
    return {
      applicationTitle: 'SPINcpi',
      menuData: [
        {
          title: 'DashBoard', icon: 'mdi-view-dashboard-outline', hasSubViews: false, routeName: 'Form-View',
          subOptions: []
        },
        {
          title: 'Admins', icon: 'mdi-account-group-outline', hasSubViews: false, routeName: 'Form-Group',
          subOptions: []
        },
        {
          title: 'Associations', icon: 'mdi-home-group', hasSubViews: true, routeName: '',
          subOptions: [
            {title: 'Charge Points', icon: 'mdi-ev-station', routeName: ''},
            {title: 'Organizations', icon: 'mdi-office-building-outline', routeName: ''},
          ]
        },
        {
          title: 'Roaming', icon: 'mdi-earth', hasSubViews: true, routeName: '',
          subOptions: [
            {title: 'Locations', icon: 'mdi-map-marker-outline', routeName: ''},
            {title: 'Parties', icon: 'mdi-handshake-outline', routeName: ''},
            {title: 'EVEs', icon: 'mdi-car-electric-outline', routeName: ''},
          ]
        },
      ],
      applicationModules: [
        {name: 'SPINcpi', icon: 'mdi-application', route: ''},
        {name: 'Module2', icon: 'mdi-application', route: ''},
        {name: 'Module3', icon: 'mdi-application', route: ''},
        {name: 'Module4', icon: 'mdi-application', route: ''},
        {name: 'Module5', icon: 'mdi-application', route: ''},
        {name: 'Module6', icon: 'mdi-application', route: ''},
      ]
      ,
      impersonationOptions: ['Extendas BV', 'Saxion', 'Shell', 'Total'],
      notifications: [
        {message: 'This is a notification', timestamp: "10:00", icon: "mdi-alert-outline"},
        {message: 'This is another notification', timestamp: "10:01", icon: "mdi-progress-alert"},
        {message: 'This is also a notification', timestamp: "10:02", icon: "mdi-battery-alert-variant-outline"},
        {message: 'This is probably notification', timestamp: "10:03", icon: "mdi-alert-box-outline"},
        {message: 'This definitely is a notification', timestamp: "10:04", icon: "mdi-delete-alert-outline"},
      ]
      ,
      userData: {
        username: "admin3",
        email: "admin3@gmail.com",
        password: "P@ssword!",
        first_name: "Anthony",
        last_name: "Kearney",
        profilePicture: "",
        roles: ["MANAGER", "USER"]
      },
      imgSrc1: require('@/assets/extendas-square-vector.svg'),
      imgSrc2: require('@/assets/extendas-name-logo-vector.svg'),
    }
  },

  methods: {
    setApplicationName(name) {
      this.applicationTitle = name
      alert("You are now using SPIN Module: " + this.applicationTitle)
    },
    clearNotifications(clearedNotifications) {
      this.notifications = clearedNotifications
    },
    goToRoute(routeToGo) {
      const route = router.resolve({
        name: routeToGo,
      });
      this.$router.push(route.path);

    },
    handleStopImpersonation() {
      //Implement logout functionality here
      alert("You are no logger impersonating")
    },
    handleLogout() {
      //Implement logout functionality here
      alert(this.userData.username + " has been logged out")
    },

  },


}
</script>

```

---

## Run Locally

Go to the project root directory

```bash
  cd ./extendas-component-library
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run serve
```

## Test components

Run the tests on the components

```bash
  cd ./extendas-component-library
  npm install
  npm run test:unit
```

View the results of the tests run

## Publish

Build and publish this component library bundle

```
npm run build-bundle
npm publish
```



    

