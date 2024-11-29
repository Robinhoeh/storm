# storm-robin

This is a take-home assignment for Tucows

## Built using:

- SCSS
- Vue 3 composition api

## Summary

- I built the app with the idea of using more global or reusable "storm" components

- For the Modal, I made it slot based with the intention of a lot of customization, however this can add to the markup quite a bit
  and become cumbersome. If I were to add to this, I would probably remove the CSS customization in the Parent, make the modal more reliant on props.

- Overall, I utilized props and emits for state management. If this app were to grow, I would probably rely on useState/composable. This works really well for shared displayed logic and
  can remove tracking the nested emits.

## Running the project locally

1. Clone the repo
2. Follow the commands below to run - there are no external plugins

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
