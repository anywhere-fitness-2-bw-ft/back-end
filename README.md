# Anywhere Fitness API Endpoints

# /api/auth
[POST] /auth/register - Sign Up

The object's body must contain:

username - A unique username
password - A password

[POST] /auth/login - Log In

The username must exist and the password must match. 
Logging in will grant a token.

# /api/users
[GET] /api/users - gets all users
