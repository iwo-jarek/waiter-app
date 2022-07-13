import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import TableForm from "./components/features/TableForm";
import { fetchTables } from "./redux/tablesRedux";
import { useEffect } from "react";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch, props.tables]);
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<TableForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
