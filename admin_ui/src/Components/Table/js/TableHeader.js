import { Table } from "react-bootstrap";
import TableHeaderStyles from "../css/TableHeader.module.css";

const TableHeader = () => {
  return (
    <section className={TableHeaderStyles.tableContainer}>
      <Table responsive>
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
      </Table>
    </section>
  );
};

export default TableHeader;
