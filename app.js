const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

require('./app/routes/point.routes')(app);

app.get('*', (req, resp) => { resp.json({ message: 'Huhhhh!' }); })

const port = process.env.port || 8050;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});