// create web server
const express = require('express');
// create web server
const app = express();
// create web server
const port = 3000;

// create web server
app.get('/comments', (req, res) => {
  res.send('Comments');
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
```

```javascript
// Path: posts.js
// create web server
const express = require('express');
// create web server
const app = express();
// create web server
const port = 3000;

// create web server
app.get('/posts', (req, res) => {
  res.send('Posts');
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
```

```javascript
// Path: index.js
// create web server
const express = require('express');
// create web server
const app = express();
// create web server
const port = 3000;

const comments = require('./comments');
const posts = require('./posts');

// create web server
app.use('/comments', comments);
app.use('/posts', posts);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
```

###