This is the smallest react app you can build.

```
npx create-react-app hello
cd hello/src
rm -r *
```

Create a single file: `index.js`:
```
import React from "react"
import ReactDOM from "react-dom"

// JSX
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));
```

And start the react app:
```
cd ..
npm start
```
