# Anywhere Fitness API Endpoints

# /api/auth

[POST] /auth/register - Sign Up

The object must have:

1. username
2. password

[POST] /auth/login - Log In

The username must exist and the password must match.
Logging in will create a token.

# /api/users

[GET] /api/users - Retrieves all users

[PUT] /api/users/:id - Updates user, body must be updated values.

[DELETE] /api/users/:id - Delete a user of the given ID
