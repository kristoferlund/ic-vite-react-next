# ICP + React + TypeScript + Vite

This template provides a batteries included setup for a ICP application with React, Vite and TypeScript.

**Fork it and use as a base for your next ICP project!**

## Features

### Backend

The Rust based backend exposes one endpoint only, the `greet` function that returns a greeting message.

### Frontend 

The React/Vite/TS based frontend allows the user to input a name and click a button to fetch the greeting message from the backend.



Dependencies:
- [SWC](https://swc.rs/): The Rust based compiler and bundler that provides up to 70x faster build times than Babel.
- [Tailwind 4](https://tailwindcss.com/docs/v4-beta): The new version of Tailwind CSS is a ground-up rewrite of the framework, providing faster builds, great new CSS classes and better performance.
- [Vite 6](https://vite.dev/): The most significant major release since Vite 2, featuring a new Environment API for enhanced flexibility, extended framework support, and streamlined performance for modern web development.
- [Eslint 9](https://eslint.org/): The latest release of Eslint introduces the flat configuration API along with new rules and bug fixes.
- [React Query 5](https://tanstack.com/query/latest): The template uses React Query for data fetching, caching and loading state management.
- [shadcn/ui](https://ui.shadcn.com/): Sorry, no. Shadcn is not available for Tailwind 4 yet. Soon hopefully.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
