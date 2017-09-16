const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public/src');

const port = process.env.PORT || 3000;
let app = express();

app.use(express.static(publicPath));
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});