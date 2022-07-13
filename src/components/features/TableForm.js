import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTableById } from "../../redux/tablesRedux";

const TableForm = () => {
  const table = useSelector((state) => getTableById(state, id));

  const { id } = useParams();

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);

  return <div>TableForm</div>;
};

export default TableForm;
