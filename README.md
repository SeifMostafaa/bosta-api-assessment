# bosta-api-assessment


## API Reference

### Endpoints

#### POST /user/signup

* General: Creating new user
* Message body:
```
{
  "firstName": "Seif",
  "lastName": "Fayez",
  "email": "saifmfayez@gmail.com",
  "password": "Abc@123456"
}
```
* Return:
```
{
    "response": {
        "password": "a82cde943817f44e:dce9d15af4f20d0a47cb7378702cc3a3fcd8951a96f76626542ee39759089cbf5e7809b2f560fc1560fa4854b7907ec0afef6cde77654803ab325f3beac62819",
        "active": false,
        "_id": "645bf0ad4be6925b70495a10",
        "firstName": "Ahmed",
        "lastName": "Yasser",
        "email": "ayasser@gmail.com",
        "__v": 0
    }
}
 ```
* Make sure to use the token as Bearer authenticity token


#### POST /user/login

* General: Logging an existing user
* Message body:
```
{
  "email": "saifmfayez@gmail.com",
  "password": "Abc@123456"
}
```
* Return:
```
{
    "response": {
        "password": "ef91e2003f483d4b:0ddb23b90d45a22abcf76cf73d720652447c837215365eaa70cb2a569a7f348d53f6c80056097809a5b33dd117478c93b840413ab6773c68d304a91288a72be3",
        "active": false,
        "_id": "6459600525f36b17e8f5371b",
        "firstName": "Seif",
        "lastName": "Fayez",
        "email": "saifmfayez@gmail.com",
        "__v": 0
    }
}
```

#### GET /user/verify/:user_id

* General: Verifying an existing user
* Return:
```
{
    "response": {
        "password": "ef91e2003f483d4b:0ddb23b90d45a22abcf76cf73d720652447c837215365eaa70cb2a569a7f348d53f6c80056097809a5b33dd117478c93b840413ab6773c68d304a91288a72be3",
        "active": true,
        "_id": "6459600525f36b17e8f5371b",
        "firstName": "Seif",
        "lastName": "Fayez",
        "email": "saifmfayez@gmail.com",
        "__v": 0
    }
}
 ```
   
   

#### POST /check/create

* General: Create a new URL check
* Message body:
```
{
  "userId": "6459600525f36b17e8f5371b",
  "name": "check #2",
  "url": "www.twitter.com",
  "protocol": "http",
  "tags": ["general"]
}
```
* Return:
```
{
    "response": {
        "message": "Check created",
        "session-token": "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImVmOTFlMjAwM2Y0ODNkNGI6MGRkYjIzYjkwZDQ1YTIyYWJjZjc2Y2Y3M2Q3MjA2NTI0NDdjODM3MjE1MzY1ZWFhNzBjYjJhNTY5YTdmMzQ4ZDUzZjZjODAwNTYwOTc4MDlhNWIzM2RkMTE3NDc4YzkzYjg0MDQxM2FiNjc3M2M2OGQzMDRhOTEyODhhNzJiZTMiLCJhY3RpdmUiOmZhbHNlLCJfaWQiOiI2NDU5NjAwNTI1ZjM2YjE3ZThmNTM3MWIiLCJmaXJzdE5hbWUiOiJTZWlmIiwibGFzdE5hbWUiOiJGYXlleiIsImVtYWlsIjoic2FpZm1mYXllekBnbWFpbC5jb20iLCJfX3YiOjB9.mVuEuYKYSBUDXKqzDLQi6qvLyz1ah7TUW_4HUwjZ8XQ"
    }
}
```

#### GET /check/list

* General: List all user checks 
* Return:
```
{
    "response": {
        "checks": [
            {
                "timeout": 5000,
                "interval": 600000,
                "threshold": 1,
                "tags": [
                    "general"
                ],
                "ignoreSSL": false,
                "active": true,
                "invokeHook": false,
                "_id": "6459696d47f3d824c8f83228",
                "userId": "6459600525f36b17e8f5371b",
                "name": "check #1",
                "url": "www.google.com",
                "protocol": "https",
                "httpHeaders": [],
                "__v": 0
            },
            {
                "timeout": 5000,
                "interval": 600000,
                "threshold": 1,
                "tags": [
                    "general"
                ],
                "ignoreSSL": false,
                "active": true,
                "invokeHook": false,
                "_id": "645bebb50e1c1250b8c5d24c",
                "userId": "6459600525f36b17e8f5371b",
                "name": "check #2",
                "url": "www.twitter.com",
                "protocol": "http",
                "httpHeaders": [],
                "__v": 0
            }
        ],
        "session-token": "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImVmOTFlMjAwM2Y0ODNkNGI6MGRkYjIzYjkwZDQ1YTIyYWJjZjc2Y2Y3M2Q3MjA2NTI0NDdjODM3MjE1MzY1ZWFhNzBjYjJhNTY5YTdmMzQ4ZDUzZjZjODAwNTYwOTc4MDlhNWIzM2RkMTE3NDc4YzkzYjg0MDQxM2FiNjc3M2M2OGQzMDRhOTEyODhhNzJiZTMiLCJhY3RpdmUiOmZhbHNlLCJfaWQiOiI2NDU5NjAwNTI1ZjM2YjE3ZThmNTM3MWIiLCJmaXJzdE5hbWUiOiJTZWlmIiwibGFzdE5hbWUiOiJGYXlleiIsImVtYWlsIjoic2FpZm1mYXllekBnbWFpbC5jb20iLCJfX3YiOjB9.mVuEuYKYSBUDXKqzDLQi6qvLyz1ah7TUW_4HUwjZ8XQ"
    }
}
```



#### Get /check/:check_id

* General: Getting a specific check
* Return:
```
{
    "response": {
        "check": {
            "timeout": 5000,
            "interval": 600000,
            "threshold": 1,
            "tags": [
                "general"
            ],
            "ignoreSSL": false,
            "active": true,
            "invokeHook": false,
            "_id": "6459696d47f3d824c8f83228",
            "userId": "6459600525f36b17e8f5371b",
            "name": "check #1",
            "url": "www.google.com",
            "protocol": "https",
            "httpHeaders": [],
            "__v": 0
        },
        "session-token": "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImVmOTFlMjAwM2Y0ODNkNGI6MGRkYjIzYjkwZDQ1YTIyYWJjZjc2Y2Y3M2Q3MjA2NTI0NDdjODM3MjE1MzY1ZWFhNzBjYjJhNTY5YTdmMzQ4ZDUzZjZjODAwNTYwOTc4MDlhNWIzM2RkMTE3NDc4YzkzYjg0MDQxM2FiNjc3M2M2OGQzMDRhOTEyODhhNzJiZTMiLCJhY3RpdmUiOmZhbHNlLCJfaWQiOiI2NDU5NjAwNTI1ZjM2YjE3ZThmNTM3MWIiLCJmaXJzdE5hbWUiOiJTZWlmIiwibGFzdE5hbWUiOiJGYXlleiIsImVtYWlsIjoic2FpZm1mYXllekBnbWFpbC5jb20iLCJfX3YiOjB9.mVuEuYKYSBUDXKqzDLQi6qvLyz1ah7TUW_4HUwjZ8XQ"
    }
}
```
   
#### POST /check/update

* General: Update a specific check
* Message body:
```
{
  "_id": "645961ccb7097822f02ae15d",
  "name": "check #1 - edited"
}
```
* Return:
```
{
    "response": {
        "message": "Check updated",
        "session-token": "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImVmOTFlMjAwM2Y0ODNkNGI6MGRkYjIzYjkwZDQ1YTIyYWJjZjc2Y2Y3M2Q3MjA2NTI0NDdjODM3MjE1MzY1ZWFhNzBjYjJhNTY5YTdmMzQ4ZDUzZjZjODAwNTYwOTc4MDlhNWIzM2RkMTE3NDc4YzkzYjg0MDQxM2FiNjc3M2M2OGQzMDRhOTEyODhhNzJiZTMiLCJhY3RpdmUiOmZhbHNlLCJfaWQiOiI2NDU5NjAwNTI1ZjM2YjE3ZThmNTM3MWIiLCJmaXJzdE5hbWUiOiJTZWlmIiwibGFzdE5hbWUiOiJGYXlleiIsImVtYWlsIjoic2FpZm1mYXllekBnbWFpbC5jb20iLCJfX3YiOjB9.mVuEuYKYSBUDXKqzDLQi6qvLyz1ah7TUW_4HUwjZ8XQ"
    }
}
```
   
#### DELETE /check/delete

* General: Delete a specific check
* Message body:
```
{
  "id": "6459695347f3d824c8f83226"
}
```
* Return:
```
{
    "response": {
        "message": "Check deleted",
        "session-token": "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImVmOTFlMjAwM2Y0ODNkNGI6MGRkYjIzYjkwZDQ1YTIyYWJjZjc2Y2Y3M2Q3MjA2NTI0NDdjODM3MjE1MzY1ZWFhNzBjYjJhNTY5YTdmMzQ4ZDUzZjZjODAwNTYwOTc4MDlhNWIzM2RkMTE3NDc4YzkzYjg0MDQxM2FiNjc3M2M2OGQzMDRhOTEyODhhNzJiZTMiLCJhY3RpdmUiOmZhbHNlLCJfaWQiOiI2NDU5NjAwNTI1ZjM2YjE3ZThmNTM3MWIiLCJmaXJzdE5hbWUiOiJTZWlmIiwibGFzdE5hbWUiOiJGYXlleiIsImVtYWlsIjoic2FpZm1mYXllekBnbWFpbC5jb20iLCJfX3YiOjB9.mVuEuYKYSBUDXKqzDLQi6qvLyz1ah7TUW_4HUwjZ8XQ"
    }
}
```
   
   
#### GET /report/:check_id

* General: Get specific check report
* Return:
```
{
    "response": {
        "report": [
            {
                "history": {
                    "timeStamp": "2023-05-08T20:55:40.122Z",
                    "logs": "init"
                },
                "_id": "645961ccb7097822f02ae15e",
                "checkId": "645961ccb7097822f02ae15d",
                "url": "www.google.com",
                "__v": 0
            }
        ],
        "session-token": "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImVmOTFlMjAwM2Y0ODNkNGI6MGRkYjIzYjkwZDQ1YTIyYWJjZjc2Y2Y3M2Q3MjA2NTI0NDdjODM3MjE1MzY1ZWFhNzBjYjJhNTY5YTdmMzQ4ZDUzZjZjODAwNTYwOTc4MDlhNWIzM2RkMTE3NDc4YzkzYjg0MDQxM2FiNjc3M2M2OGQzMDRhOTEyODhhNzJiZTMiLCJhY3RpdmUiOmZhbHNlLCJfaWQiOiI2NDU5NjAwNTI1ZjM2YjE3ZThmNTM3MWIiLCJmaXJzdE5hbWUiOiJTZWlmIiwibGFzdE5hbWUiOiJGYXlleiIsImVtYWlsIjoic2FpZm1mYXllekBnbWFpbC5jb20iLCJfX3YiOjB9.mVuEuYKYSBUDXKqzDLQi6qvLyz1ah7TUW_4HUwjZ8XQ"
    }
}
```
   
#### GET /report/list/:tag

* General: Get all check report for checks that groupped by the same tag
* Return:
```
[
    [
        {
            "history": {
                "timeStamp": "2023-05-08T21:28:13.986Z",
                "logs": "init"
            },
            "_id": "6459696d47f3d824c8f83229",
            "checkId": "6459696d47f3d824c8f83228",
            "url": "www.google.com",
            "__v": 0
        }
    ],
    [
        {
            "history": {
                "timeStamp": "2023-05-10T19:08:37.820Z",
                "logs": "init"
            },
            "_id": "645bebb50e1c1250b8c5d24d",
            "checkId": "645bebb50e1c1250b8c5d24c",
            "url": "www.twitter.com",
            "__v": 0
        }
    ]
]
 ```
 
