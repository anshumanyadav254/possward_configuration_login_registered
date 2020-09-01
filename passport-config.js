const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail) {
    const authenticatedUser = async(email, password, done) => {
        //returns a user object(if any)
        const user = getUserByEmail(email);
        if (user === null) {
            //done(error,isUserAuthenticated:boolean,message:"")
            return done(null, false, { message: "No user with that email found" });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                // If user is authenticated=> send the user info who is authenticated
                //send an event userRegistered
                return done(null, user);
            } else {
                return done(null, false, { message: "Password is incorrect" });
            }
        } catch (error) {
            return done(error);
        }
    };

    passport.use(
        new LocalStrategy({ usernameField: "email" }),
        authenticatedUser
    );

    // TODO: Implement these functions

    // passport.serializeUser((user, done) => {});
    // passport.deserializeUser((user, done) => {});
}