import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { updateTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import { fetchTables } from "./redux/tablesRedux";
import { useEffect } from "react";
import Tables from "./features/tables";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<Tables />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
