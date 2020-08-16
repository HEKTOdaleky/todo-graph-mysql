const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const path = require('path');
const app = express();
const sequelize = require('./utils/database');
const PORT = process.env.PORT || 3001;
const schema = require('./grphgql/schema');
const resolver = require('./grphgql/resolver');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
}))
app.use((req, res, next) => {
    res.sendFile('/index.html');
});

async function start() {
    try {
        await sequelize.sync();
    } catch (e) {
        console.log(e)
    }
}

start();

app.listen(PORT);
