const express = require('express');

//const router = require('./components/message/network');
const router = require('./network/router');

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
//app.use(router);

router(app);

//app.use('/app', express.static( './public'));

app.listen(3000,()=>{console.log('Server is running on port 3000')});