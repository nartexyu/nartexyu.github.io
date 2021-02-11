// Import dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import styling

// Import components
import Header from "./components/Header"
import Footer from "./components/Footer"

// Import pages
import Landing from "./pages/Landing"

function App() {
  return (
    <Router> 
      <Header />
      <Landing />
      <Footer />
   </Router>
  );
}

export default App;
