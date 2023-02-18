import React from "react";
import { users } from "../api/usersData";

const Admin = ({ candidates }) => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Users Votes Summary: </h3>
      <table style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Voted</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => {
            return (
              <tr key={el.email}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  {candidates.some((candidate) => {
                    return candidate.voters.includes(el.name);
                  })
                    ? "yes"
                    : "no"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
