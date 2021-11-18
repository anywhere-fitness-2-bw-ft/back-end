# Anywhere Fitness API Endpoints

# Base API URL

https://anywhere-fitness-back-end-2021.herokuapp.com/

# /api/auth

[POST] /auth/register - Creates a new user.

The object must have:

1. username
2. password
3. role_id
   1. "1" - instructor
   2. "2" - client
4. auth
   1. REQUIRED to register as an instructor
   2. Needs to be set to the string "1234".

Instructor Register Example:

```
{
   "username": "shanegray",
   "password": "abc123",
   "role_id": 1,
   "auth": "1234"
}
```

Client Register Example:

```
{
   "username": "shanegray1",
   "password": "abc123",
   "role_id": 2
}
```

[POST] /auth/login - Logs the given user in.

The username must exist and the password must match.
Logging in will create a token.

Login Example:

```
{
   "username": "shanegray",
   "password": "abc123"
}
```

Response Example:

```
{
   "message": "Welcome, shanegray.",
   "token": (the encoded token value)
}
```

# /api/users

[GET] /api/users - Retrieves all current users.

Response Example:

```
[
      {
         "user_id": 1,
         "username": "User 1",
         "role_name": "instructor"
      },
      {
         "user_id": 2,
         "username": "User 2",
         "role_name": "client"
      }
]
```

[GET] /api/users/:id - Retrieves the user of the given ID.

Response Example:

```
{
   "user_id": 5,
   "username": "shanegray",
   "role_name": "instructor"
}
```

[PUT] /api/users/:id - Updates user, body must be at least one updated value.

Edit Request Example:

```
{
   "username": "shanegray93",
   "role_id": 1,
   "password": "abc123"
}
```

Edit Response Example:

```
{
   "user_id": 5,
   "username": "shanegray93",
   "role_name": "instructor"
}
```

[DELETE] /api/users/:id - Deletes a user of the given ID.

# /api/classes

[GET] /api/classes - Retrieves all current classes.

Response Example:

```
[
   {
      "class_id": 1,
      "name": "Class 1",
      "start_time": "1:00PM",
      "duration": "1hr",
      "intensity_level": 8,
      "location": "Park",
      "registered_attendees": 27,
      "max_size": 30,
      "class_type_id": 1,
      "class_type_name": "running"
   },
   {
      "class_id": 2,
      "name": "Class 2",
      "start_time": "2:00PM",
      "duration": "30min",
      "intensity_level": 6,
      "location": "Gym",
      "registered_attendees": 199,
      "max_size": 200,
      "class_type_id": 2,
      "class_type_name": "swimming"
   }
]
```

[GET] /api/classes/:id - Retrieves the class of the given ID.

Example Response:

```
{
   "class_id": 1,
   "name": "Class 1",
   "start_time": "1:00PM",
   "duration": "1hr",
   "intensity_level": 8,
   "location": "Park",
   "registered_attendees": 27,
   "max_size": 30,
   "class_type_id": 1,
   "class_type_name": "running"
}
```

[POST] /api/classes - Creates a new class.

The object must have:

1. name - what the class is called
2. class_type_name - type of activity
   1. If class_type_name doesn't already exist, it will be added to a seperate class type table and stored for future use.
3. start_time - when the class begins
4. duration - how long the class lasts
5. intensity_level - how hard of a workout (scale of 1-10)
6. location - where the class takes place
7. registered_attendees - number of people acurrently registered to attend
8. max_size - the maximum amount of people the class can have

Create Request Example:

```
{
   "name": "Class 9",
   "class_type_name": "hiking",
   "start_time": "11:00AM",
   "duration": "2hr",
   "intensity_level": 9,
   "location": "park",
   "registered_attendees": 4,
   "max_size": 5
}
```

Create Response Example:

```
[
   {
      "name": "Class 9",
      "class_type_id": 3,
      "start_time": "11:00AM",
      "duration": "2hr",
      "intensity_level": 9,
      "location": "park",
      "registered_attendees": 4,
      "max_size": 5
   }
]
```

[PUT] /api/classes/:id - Updates class, body must be at least one updated value.

Edit Request Example:

```
{
   "name": "Intro to Hiking",
   "class_type_name": "hiking",
   "start_time": "11:00AM",
   "duration": "2hr",
   "intensity_level": 9,
   "location": "park",
   "registered_attendees": 4,
   "max_size": 5
}
```

Edit Response Example:

```
{
   "class_id": 5,
   "name": "Intro to Hiking",
   "start_time": "11:00AM",
   "duration": "2hr",
   "intensity_level": 9,
   "location": "park",
   "registered_attendees": 4,
   "max_size": 5,
   "class_type_id": 3,
   "class_type_name": "hiking"
}
```

[DELETE] /api/classes/:id - Deletes a class of the given ID.
