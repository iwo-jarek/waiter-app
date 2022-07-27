import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";
import { tableById, updateTableForm } from "../../redux/tablesRedux";

const TableForm = () => {
  const { id } = useParams();

  const table = useSelector((state) => tableById(state, id));
  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);
  const tableStatus = ["Busy", "Free", "Cleaning"];
  const statusOptions = tableStatus.filter(
    (tableStatus) => tableStatus !== status
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTableForm({ id, status, peopleAmount, maxPeopleAmount, bill })
    );
    navigate("/");
  };

  return (
    <>
      <h2>Table {table.id}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="d-flex justify-content-start align-items-center mt-4"
          controlId="formStatus"
        >
          <Form.Label>
            <b>Status:</b>
          </Form.Label>
          <Form.Select
            as="select"
            className="mx-4"
            style={{ maxWidth: 190 }}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value={status}>{status}</option>
            {statusOptions.map((tableStatus) => (
              <option key={shortid()} value={tableStatus}>
                {tableStatus}
              </option>
            ))}
            ;
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-start align-items-center mt-4"
          controlId="peopleAmount"
        >
          <Form.Label>
            <b>People:</b>
          </Form.Label>
          <Form.Control
            type="text"
            value={peopleAmount}
            onChange={(e) => setPeopleAmount(e.target.value)}
            className="mx-2"
            style={{ maxWidth: 50 }}
          ></Form.Control>
          <p className="my-2">/</p>

          <Form.Control
            type="text"
            value={maxPeopleAmount}
            onChange={(e) => setMaxPeopleAmount(e.target.value)}
            className="mx-2"
            style={{ maxWidth: 50 }}
          />
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-start align-items-center mt-4"
          controlId="peopleAmount"
        >
          <Form.Label>
            <b>Bill:</b>
          </Form.Label>
          <div className="d-flex align-items-center mx-4">
            <p className="mb-2 mx-2">$</p>
            <Form.Control
              type="text"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              style={{ maxWidth: 50 }}
              className="mb-2"
            />
          </div>
        </Form.Group>
        <Button className="mt-3 mx-2" type="submit" variant="primary">
          Update
        </Button>
      </Form>
    </>
  );
};

export default TableForm;
