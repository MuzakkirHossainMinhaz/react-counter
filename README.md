# react-counter

This repository contains implementations of a simple counter application in React using different state management approaches: `useState`, `useReducer`, and `Redux Toolkit`.

## Introduction

This project demonstrates different ways to manage state in a React counter application. Each approach has its own folder within the repository:

1. **useState**: Basic state management using the `useState` hook.
2. **useReducer**: Managing state with the `useReducer` hook for more complex scenarios.
3. **Redux Toolkit**: Utilizing the Redux Toolkit for state management.

## Project Structure

-   `/react-useState`: This implementation uses the `useState` hook to manage the state of the counter in a functional component.
-   `/react-useReducer`: This implementation utilizes the `useReducer` hook for state management. It provides a more structured approach, especially for more complex state logic.
-   `/react-redux-toolkit`: This implementation employs Redux Toolkit, a set of tools and utilities for Redux, to manage the state of the counter. It includes actions, reducers, and the store, providing a scalable and organized state management solution.

## How to Run

Follow the instructions below to run each implementation locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/react-counter.git
    ```

2. Navigate to the desired implementation folder:

    ```bash
    cd react-counter/react-useState
    ```

    or

    ```bash
    cd react-counter/react-useReducer
    ```

    or

    ```bash
    cd react-counter/react-redux-toolkit
    ```

3. Run the `npm install` command to install the dependencies:

    ```bash
    npm install
    ```

4. Run the `npx vite` command to start the development server:

    ```bash
    npx vite
    ```

## Contributing

Feel free to contribute to this project by adding more implementations, improving existing code, or providing suggestions. Create a pull request with your changes, and we'll be happy to review and merge.

## License

This project is licensed under the MIT License - See the [LICENSE.md](/LICENSE.md) file for details.
