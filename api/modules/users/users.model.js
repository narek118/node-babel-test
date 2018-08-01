import mongoose, { Schema } from "mongoose";

const userSchema = new Schema( {
    "email": Schema.Types.String
} );

mongoose.model( "User", userSchema );

// Actual model should be here
