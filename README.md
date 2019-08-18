# Expresso Weather

Expresso Weather is a JSON API that uses the Dark Sky API along with the Google Geocoding API to return weather information based on a location provided by the user. This project uses Node.JS as well as Express.

## Technologies Used
  - [Node.JS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [Jest](https://jestjs.io/)

## Setup
1. Clone this repository
2. Install npm with the command `npm install`
3. Create a sequelize database `npx sequelize db:create`
3. Migrate the with database `npx sequelize db:migrate`
4. Run your npm server `npm start`

---

## Endpoints
  - [New Account Creation](#new-account-creation)


## New Account Creation

Send a POST request with an email, password and password confirmation. Successful response inludes a newly generated API key for the new user, and the user is saved in the database. 

  #### POST /api/v1/users
  ```
  Content-Type: application/json
  Accept: application/json
  ```

  ##### Request
  ```
  {
    "email": "my_email@example.com",
    "password": "password"
    "password_confirmation": "password"
  }
  ```
  ##### Response
  ```
  status: 201
  body:

  {
    "api_key": "jgn983hy48thw9begh98h4539h4",
  }
  ```




be  more specific about what weather info they return
different section for technoligies used
learning goals
short description as well as produciton link
