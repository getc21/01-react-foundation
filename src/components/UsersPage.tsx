/* eslint-disable @typescript-eslint/no-misused-promises */
import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";


export const UsersPage = () => {
  
    const {users, nextPage, prevPage} = useUsers();
  return (
    <>
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* PRIMERA FORMA DE LLAMAR AL CONTENIDO DE UN MODELO */}
          {/* {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  style={{ width: "50px" }}
                  src={user.avatar}
                  alt="User avatar"
                />
              </td>
              <td>
                {user.first_name}
                {user.last_name}
              </td>
              <td>{user.email}</td>
            </tr>
          ))} */}
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

