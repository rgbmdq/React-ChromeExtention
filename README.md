# Dish Recipes Chrome Extension

This is a Chrome extension built with React that provides dish recipes. Users can search for different dishes and view their recipes along with additional details.

## Features

- Search for dish recipes
- View recipes and additional details for each dish
- Select a dish to view its details
- Chrome extension integration

## Installation

1. Clone the repository or download the source code.
2. Open the project in your preferred code editor.
3. Run `npm install` to install the dependencies.

### Custom Webpack Configurations

If you have made custom Webpack configurations, follow these additional steps:

1. Update the Webpack configurations in the `webpack.config.js` file to meet your requirements.
2. Run `npm run build` to build the production-ready extension using your custom Webpack configurations.

### Default Create React App Build

If you haven't made any custom Webpack configurations, follow these steps:

1. Run `npm run build` to build the production-ready extension using the default Create React App configurations.
2. Install and run the Node Proxy Server ([link](https://github.com/rgbmdq/Node-Proxy))
3. Open Google Chrome.
4. Navigate to `chrome://extensions` in the address bar.
5. Enable the "Developer mode" toggle button in the top right corner.
6. Click on "Load unpacked" and select the `build` directory from the project.
7. The Dish Recipes Chrome extension should now be installed and visible in your Chrome browser toolbar.

## Usage

1. Click on the Dish Recipes Chrome extension icon in the Chrome toolbar.
2. The search bar will be displayed. Enter the name of a dish you want to search for.
3. As you type, the search results will be displayed below the search bar.
4. Click on a dish from the search results to view its recipe and additional details.
5. To perform a new search, click on the Dish Recipes Chrome extension icon again and enter a new dish name.

## Pending Tasks

- Improve state management: Improve usage of state and props, analize the possibility to incorporate redux or context.

- Improve separation of concerns: The architecture should be organized into distinct layers, each responsible for a specific concern: The presentation layer (UI), application layer (business logic), domain layer (core business logic), and data layer (persistence). 

- Clean and Readable Code: Usage of SOLID principles and design patterns to achieve modularity, reusability, and extensibility.

- Improving test coverage: While tests are an essential part of ensuring the stability and reliability of our application, there is room for improvement in terms of test coverage. We aim to increase the scope of our tests by adding unit tests, integration tests, and end-to-end tests where applicable. This will help identify and prevent potential issues, provide better code documentation, and promote a more robust development process.

Feel free to contribute to any of these tasks or suggest new ones by opening an issue or submitting a pull request.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/my-feature` or `git checkout -b bugfix/issue-fix`.
3. Make your modifications and commit changes with descriptive commit messages.
4. Push your branch to your forked repository.
5. Open a pull request to the main repository's corresponding branch.

## License

This project is licensed under the [MIT License](LICENSE).
