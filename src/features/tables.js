import { useSelector } from "react-redux";
import { getAllTables } from "../redux/tablesRedux";

const Tables = () => {
  const tables = useSelector((state) => getAllTables(state));

  return (
    <section>
      <div className="d-flex justify-content-between">
        <h4>All tables</h4>
      </div>
      {tables.map((table) => (
        <div key={table.id}>
        <h2>Table {table.id}</h2>
        <h5>Status: {table.status}</h5>
        </div>
      ))}
    </section>
  );
};

export default Tables;
