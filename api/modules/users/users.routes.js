import { Router } from "express";
import * as userHandler from "./users.handler";

export const init = ( api ) => {
    const router = new Router();
    // The endpoint will be at `/api/users/`

    router.post( "/user/:id/email", userHandler.getUserEmails );

    api.use( "/users", router );
};
