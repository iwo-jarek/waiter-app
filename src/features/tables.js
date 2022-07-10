import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTables } from "../redux/tablesRedux";

const Tables = () => {
  const tables = useSelector((state) => getAllTables(state));
  console.log(tables);

  return (
    <section>
      <div className="d-flex justify-content-between">
        <h4>All tables</h4>
      </div>
      {tables.map((table) => (
        <div key={table.id} className="d-flex border-bottom align-items-center">
          <h2>Table {table.id}</h2>
          <h5>Status: {table.status}</h5>
          <Link key={table.id} to={"/table/" + table.id}>
            <Button
              className="d-grid d-md-flex justify-content-md-end"
              variant="primary"
            >
              Read more
            </Button>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Tables;
