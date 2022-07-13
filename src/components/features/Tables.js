import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTables } from "../../redux/tablesRedux";

const Tables = () => {
  const table = useSelector((state) => getAllTables(state));
  console.log(table);

  return (
    <section>
      <div className="d-flex justify-content-between">
        <h4>All tables</h4>
      </div>
      {table.map((tables) => (
        <div key={tables.id} className="d-flex border-bottom">
          <h2>Table {tables.id}</h2>
          <h5>Status: {tables.status}</h5>
          <Link key={tables.id} to={"/table/" + tables.id}>
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
