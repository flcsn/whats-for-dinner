# What's for Dinner?

Look for meal suggestions based on selected ingredients and tags. Powered by the [Tasty.co API](https://rapidapi.com/apidojo/api/tasty).

## Getting Started

Install project dependencies using the command:

```
npm install
```

Run the app on your local machine:

```
npm start
```

## Key Features

### 1. Select ingredients and/or tags to search for
![Select ingredients and/or tags to search for](https://user-images.githubusercontent.com/73377890/168245867-31176fc7-8f6e-4283-ae44-e1c569f7052c.png)

### 2. View step-by-step instructions in a pop-up modal
![View step-by-step instructions in a pop-up modal](https://user-images.githubusercontent.com/73377890/168246566-dbe2ab02-ae18-4455-80ca-d6be1ab5e170.png)

## Known Issues

* A few recipes returned by the Tasty API do not come with step-by-step instructions, which may cause the website to crash if their respective recipe links are clicked.
* Certain combinations of ingredients and tags may return recipes that do not seem to have a connection with the selected ingredient and tag
  - e.g. Searching with ingredient 'chicken' and tag '5 ingredients or less' will include a recipe for 'Avocado Crema Dip'

## Built With

* HTML
* CSS
* Node.js
* React
* [Axios](https://github.com/axios/axios) - handles communication with the server
* [ESLint](https://eslint.org/) - a linter which helps with writing cleaner code

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
