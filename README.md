# Anywhere Fitness API Endpoints

# /api/auth
[POST] /auth/register - Sign Up

The object's body must contain:

username - A unique username
password - A password

[POST] /auth/login - Log In

The username must exist and the password must match. 
Logging in will create a token.

# /api/users
[GET] /api/users - Retrieves all users

[DELETE] /api/users/:id - Delete a user of the given ID
