# GPI UI Components Library

Welcome to the GPI UI Components Library! This project serves as a collection of reusable React components designed to streamline the development process and maintain consistency across applications.

## Technologies

This project is built using the following technologies:

- **TypeScript**: For type safety and better development experience.
- **Tailwind CSS**: For utility-first styling and responsive design.
- **React**: A JavaScript library for building user interfaces.
- **Industry Standard Technologies**: We adhere to best practices and modern development standards.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)


** -------------------------------------------------------------------------------------------**


## Installation

To get started with the GPI UI Components Library, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gpi-ui-library.git
   cd gpi-ui-library
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

** -------------------------------------------------------------------------------------------**


## Usage

To use the components in your project, import them as follows:

```javascript
import { Header } from 'gpi-ui-library';
```

You can then use the component in your JSX:

```jsx
<Header>
  <p>Your additional content here</p>
</Header>
```


** -------------------------------------------------------------------------------------------**


## Components

This library includes a variety of components, such as:

- **Header**: {
   A reusable header component that can display a logo, navigation icons, and other customizable content.

   Props:
      bg_color (color): Background color of the header.
      logo (string): Logo of the header.
      children (Tags): Children of the header
}

- **Button**: {
   A customizable button component that can display a button.

   Props:
}

- **Input**: {
   A reusable component for receiving user input in the form of text, numbers, passwords, etc.

   Props: 
      type : Determines the type of input (e.g., text, password, email, number, etc.).
      placeholder : Provides a hint to the user of what should be entered in the input.
      value : The value of the input field. In controlled components, this is bound to state.
      onChange : A function that gets called whenever the value of the input changes. This is where you typically update the state in a controlled component.
      disabled : If true, disables the input field, preventing user interaction.
      required : Marks the input as required for form validation.
}

- **Breadcrumb**: {
   A reusable component is a navigation aid used in user interfaces to show the user's location within a website or application.

   Props:
}

- **Modal**: {
   A reusable header component that can display a logo, navigation icons, and other customizable content.

   Props:
      isOpen (bool): Open the modal.
      onClose (bool): Close the modal.
      closeIcon (icon/svg): Close icon of the modal.
      width (double): Width of the modal.
      children (Tags): Children of the modal.
}

- **Card**: A card component for displaying content.


** -------------------------------------------------------------------------------------------**

## Contributing

We welcome contributions to the GPI UI Components Library! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.



** -------------------------------------------------------------------------------------------**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Updates:
- Added a "Technologies" section to highlight the use of TypeScript, Tailwind CSS, React, and adherence to industry standards.

Feel free to adjust any part of the README to better fit your project's specifics! Let me know if you need further changes.