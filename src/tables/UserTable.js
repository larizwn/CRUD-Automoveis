import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Deletar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Nenhum Automóvel Adicionado</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
