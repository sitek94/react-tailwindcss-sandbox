# React + TailwindCSS Sandbox

It's a slightly modified version of Create React App.

First of all, I'm using the following script to start the app:

```json
{
  "start": "REACT_APP_APP_PATH=\"$npm_config_app\" craco start"
}
```

Now, if I run the app like this:

```bash
npm start --app="Maciek"
```

There will be an env variable created: `REACT_APP_APP_PATH` with `"Maciek"` as a value.

So, I can access that variable when starting my React app:

```tsx
// index.tsx
const appPath = process.env.REACT_APP_APP_PATH;
```

Then, I can use `appPath` to dynamically construct a path to the component that I want to import.

```tsx
// index.tsx
const App = React.lazy(() => import(`./${appPath}`));
```

Basically, I can start React app, and specify which folder should be used to import the root component.

To make it even easier and faster, I created a function in `~/.zshrc`:

```bash
function nsa() {
  npm start --app=\"$app_path\"
}
```

All I have to do now is to type `nsa <path>`. For example, I can create `Example.tsx` file, with some default export, and to run it I would type: `nsa Example`.

## Other Available Scripts

[Create React App](https://github.com/facebook/create-react-app).
