# Mock-Restful-API
This is restful API built using restify module present in Node. Functionalities include add customer,delete customer,update,create account,Login with Authentication done using JWT web tokens.Any Front end developer can use it.

You just have to make (GET,POST,PUT)requests via Postman or some other app.You can also protect routes as your wish i.e the can be accessed if user is authenticated.

End points include

Get request to  /customers returns all customers int the database.

Post request to /customers ,in body name,email,balance  inserts customer into the database.

Get request to /customers/:id ,return the user with that id.

Put request to /customers/id ,in body write updated data,updates customer information.

Del request to /customers/id deletes that customer

Post request to /users/register ,in body write name and password registers the user.Password is not stored in plain text and encrypted using bcrypt.
Post request to /auth ,in body write email and password login the user and he is provided the token for fixed time where he can access protective routes.Routes has been protected using restify JWT community module.

