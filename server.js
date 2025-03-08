const express = require('express');
const app = express();

app.use('/', require('./routes'));

const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});