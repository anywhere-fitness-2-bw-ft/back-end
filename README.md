# Anywhere Fitness API Endpoints

# Base API URL

https://anywhere-fitness-back-end-2021.herokuapp.com/

# /api/auth

[POST] /auth/register - Creates a new user.

The object must have:

1. username
2. password

[POST] /auth/login - Logs the given user in.

The username must exist and the password must match.
Logging in will create a token.

# /api/users

[GET] /api/users - Retrieves all current users.

[GET] /api/users/:id - Retrieves the user of the given ID.

[PUT] /api/users/:id - Updates user, body must be at least one updated value.

[DELETE] /api/users/:id - Deletes a user of the given ID.

# /api/classes

[GET] /api/classes - Retrieves all current classes.

[GET] /api/classes/:id - Retrieves the class of the given ID.

[POST] /api/classes - Creates a new class.

The object must have:

1. name - what the class is called
2. type - type of activity
3. start_time - when the class begins
4. duration - how long the class lasts
5. intensity_level - how hard of a workout (scale of 1-10)
6. location - where the class takes place
7. registered_attendees - number of people acurrently registered to attend
8. max_size - the maximum amount of people the class can have

[PUT] /api/classes/:id - Updates class, body must be at least one updated value.

[DELETE] /api/classes/:id - Deletes a class of the given ID.
