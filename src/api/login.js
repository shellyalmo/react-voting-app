import { users } from "./usersData";

/**
 *
 * @param {{userName: String, userEmail:String, userPassword:String}} user
 * @returns {{id: String,name: String,password: String,type: String,email: String}|undefined}
 */
const checkUserInDb = (user) => {
  return users.find(
    (el) =>
      el.name === user.userName &&
      el.email === user.userEmail &&
      el.password === user.userPassword
  );
};

console.assert(
  checkUserInDb({
    userName: "ytfr",
    userEmail: "shellyalmo@gmail.com",
    userPassword: "hioiu",
  }) === undefined,
  "ytfr is not in the database"
);

console.assert(
  checkUserInDb({
    userName: "John Doe",
    userEmail: "johndoe@gmail.com",
    userPassword: "7GTHPPL",
  }),
  "john is in the db"
);

console.assert(
  checkUserInDb({
    userName: "John Doe",
    userEmail: "johndoe@gmail.com",
    userPassword: "7GTHPP4",
  }) === undefined,
  "john password bad"
);

console.assert(
  checkUserInDb({
    userName: "John Doe",
    userEmail: "johndoe@gmai.com",
    userPassword: "7GTHPPL",
  }) === undefined,
  "john email bad"
);

console.assert(
  checkUserInDb({
    userName: "Tomas Smith",
    userEmail: "tomas19@aol.com",
    userPassword: "9YSLDWL",
  }),
  "Thomas is in db"
);
