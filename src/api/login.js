import { users } from "./usersData";

/**
 *
 * @param {{userEmail:String, userPassword:String}} user
 * @returns {{id: String,name: String,password: String,type: String,email: String}|undefined}
 */
export const checkUserInDb = (user) => {
  return users.find(
    (el) => el.email === user.userEmail && el.password === user.userPassword
  );
};

console.assert(
  checkUserInDb({
    userEmail: "shellyalmo@gmail.com",
    userPassword: "hioiu",
  }) === undefined,
  "ytfr is not in the database"
);

console.assert(
  checkUserInDb({
    userEmail: "johndoe@gmail.com",
    userPassword: "7GTHPPL",
  }),
  "john is in the db"
);

console.assert(
  checkUserInDb({
    userEmail: "johndoe@gmail.com",
    userPassword: "7GTHPP4",
  }) === undefined,
  "john password bad"
);

console.assert(
  checkUserInDb({
    userEmail: "johndoe@gmai.com",
    userPassword: "7GTHPPL",
  }) === undefined,
  "john email bad"
);

console.assert(
  checkUserInDb({
    userEmail: "tomas19@aol.com",
    userPassword: "1",
  }),
  "Thomas is in db"
);
