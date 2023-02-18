import React from "react";
import { users } from "../api/usersData";

const Admin = ({ candidates }) => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Users Votes Summary: </h3>
      <h4 style={{ border: "1px solid black", width: "15rem" }}>
        Total # votes:{" "}
        {candidates.reduce((acc, curr) => {
          return acc + curr.voters.length;
        }, 0)}
      </h4>
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
            const hasVoted = candidates.some((candidate) => {
              return candidate.voters.includes(el.name);
            });
            return (
              <tr
                style={{ color: hasVoted ? "green" : "black" }}
                key={el.email}
              >
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{hasVoted ? "yes" : "no"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
