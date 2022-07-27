import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTables, allTables } from "../../redux/tablesRedux";

const Tables = () => {
  const table = useSelector((state) => allTables(state));
  console.log(table);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-between m-4">
        <h4>All tables</h4>
      </div>
      {table.map((tables) => (
        <div
          key={tables.id}
          className="d-flex justify-content-start align-items-center border-bottom"
        >
          <h3 className="mx-3">Table {tables.id}</h3>
          <p className="m-2" style={{ fontSize: "13px" }}>
            <b>Status:</b> {tables.status}
          </p>
          <Link
            key={tables.id}
            to={"/table/" + tables.id}
            className="ms-auto m-2"
          >
            <Button
              className="d-grid d-flex justify-content-md-end"
              variant="primary"
            >
              Show more
            </Button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Tables;
