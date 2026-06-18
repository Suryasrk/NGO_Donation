import { useState, useEffect } from "react";
import api from "../../api/axios";

function UserManagement() {

  const [users, setUsers] =
    useState([]);

  useEffect(() => {

    fetchUsers();

  }, []);

  const fetchUsers = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await api.get(

          "users/",

          {
            headers: {
              Authorization:
                "Bearer " + token
            }
          }

        );

      setUsers(response.data);

    }

    catch(error){

      console.log(error);

    }

  };

  return (

    <div>

      <h2>
        User Management
      </h2>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>

              <td>{user.username}</td>

              <td>{user.email}</td>

              <td>{user.role}</td>

              <td>{user.phone}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default UserManagement;