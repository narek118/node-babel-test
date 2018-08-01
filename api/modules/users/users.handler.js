import { dbConnect } from "../../../lib/mysql";

export const getUserEmails = async( req, res ) => {
    try {
        dbConnect().then( async ( pool ) => {
            const result = await pool.query( "select id_em_emails,email,verified,preferred from em_emails where id_em_users=?", [ req.params.id ] );

            if( result && result.length ) {
                return res.send( result );
            }
            return res.status( 200 ).end( { "message": "No EMails Found!" } );
        
        } );

    } catch( err ) {
        return res.status( 500 ).end( { "message": "Sorry, Something went wrong :\ " } );
    }
};
