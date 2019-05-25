"use strict";
const User = use("App/Models/User");
class UserController {
  async store({ request, response }) {
    const data = request.only(["username", "email", "password"]);

    const user = User.create(data);

    return user;
  }
}

module.exports = UserController;
