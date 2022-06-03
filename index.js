const express = require('express');
const cors = require('cors');

const dbConnection = require('./config/db')

const product = require('./module/product/product.router');
const category = require('./module/productCategory/productCategory.router');
const subCategory = require('./module/productSub/productSub.router');
const {graphqlHTTP} = require("express-graphql");
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolver/index");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = 3000;
const app = express();

// DB connection
dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/v1/product', product);
app.use('/api/v1/category', category);
app.use('/api/v1/subCategory', subCategory);

//swagger documentation
//swagger options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "soum project",
            version: "1.0.0",
            description:
                "soum interview backend server build with node js and mongo db using rest api and qrapql ",
            contact: {
                name: "Damitha Perera",
                email: "damithaperera777@gmail.com",
            },
        },

        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Development server",
            }
        ]
    },
    apis: ['./module/productCategory/productCategory.router.js',
        './module/product/product.router.js',
        './module/productSub/productSub.router.js'],
};
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true,
    })
);

app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:3000`),
);

module.exports = app;
