import mysql from "mysql";
import util from "util";

import config from "../config";

const pool = mysql.createPool( config.db );

export const dbConnect = async() => {
    pool.getConnection = util.promisify( pool.getConnection );
    
    await pool.getConnection().then( ( connection ) => {
        connection.release();
        return;
    } ).catch( ( err ) => {
        console.log( "bbb", "pool" );
        if ( err.code === "PROTOCOL_CONNECTION_LOST" ) {
            console.error( "Database connection was closed." );
        }
        if ( err.code === "ER_CON_COUNT_ERROR" ) {
            console.error( "Database has too many connections." );
        }
        if ( err.code === "ECONNREFUSED" ) {
            console.error( "Database connection was refused." );
        }
    } );
    return util.promisify( pool.query );
};
