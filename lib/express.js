import bodyParser from "body-parser";
import morgan from "morgan";
import express from "express";

import api from "../api";

const app = express();

app.use( morgan( "dev" ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { "extended": true } ) );
app.use( ( req, res, next ) => {
    res.setHeader( "Access-Control-Allow-Origin", "*" );
    res.setHeader( "Access-Control-Allow-Methods", "GET, POST" );
    res.setHeader( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    res.setHeader( "Access-Control-Allow-Credentials", true );
    next();
} );

app.use( "/api", api );

export default app;
