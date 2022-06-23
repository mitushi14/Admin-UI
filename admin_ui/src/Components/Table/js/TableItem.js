const Tableitem = ({ user }) => {
  return (
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
    </tr>
  );
};

export default Tableitem;
