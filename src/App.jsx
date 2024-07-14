import Navbar from "./components/Navbar/Navbar";
import AnimRoutes from "./components/AnimateRoute/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
