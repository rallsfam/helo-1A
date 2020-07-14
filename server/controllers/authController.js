const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        //What does the function need to run properly?
        const {username, password} = req.body,
            db = req.app.get('db');

        //Does a user with this email already exist?
        const foundUser = await db.user.check_user({email});
        if(foundUser[0]){
            return res.status(400).send('Email already in use')
        }

        //Hashing the users password
        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

        //Registering the user, and sending the session client-side
        const newUser = await db.users.register_user({username, email, password: hash, profilePicture});
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },
    login: async(req, res) => { 
        //What does the funciton need to run properly?
        const {email, password} = req.body,
                db = req.app.get('db');

        //Checks if user is already in the database, based on email
        const foundUser = await db.users.check_user({email});
        if(!foundUser[0]){
            return res.status(400).send('Email not found');
        }

        //Compare the passwords to make them watch
        const authenticated = bcrypt.compareSync(password, foundUser[0].password);
        if(!authenticated){
            return res.status(401).send('Password is incorrect')
        }

        //Set user on session, send it client-side
        delete foundUser[0].password;
        req.session.user = foundUser[0];
        res.status(202).send(req.session.user);
    },
}