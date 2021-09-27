import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*Home*/
import Header from "./Home/Header/Header";
import Main from "./Home/Main/Main";
import About from "./Home/About/About";
import News from "./Home/News/News";
import Product from "./Home/Product/Product";
import Certification from "./Home/Certification/Certification";
/*Introduction */
import Sammary from "./Coporation/Sammary";
import History from "./Coporation/History";
import Vision from "./Coporation/Vision";
import Esg from "./Coporation/Esg";
import Organization from "./Coporation/Organization";
import Map from "./Coporation/Map";

/*Production*/
import Item from "./Production/Item";

/*Solution*/
import Process from "./Solution/Process";
import System from "./Solution/System";
import Develop from "./Solution/Develop";
import Equipment from "./Solution/Equipment";

/*Quality*/
import Quality from "./Quality/Quality";
import CertificationDetail from "./Quality/Certification";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        {/*introduction*/}
        <Route path="/introduction" exact component={Sammary} />
        <Route path="/introduction/summary" exact component={Sammary} />
        <Route path="/introduction/history" exact component={History} />
        <Route path="/introduction/vision" exact component={Vision} />
        <Route path="/introduction/esg" exact component={Esg} />
        <Route
          path="/introduction/organization"
          exact
          component={Organization}
        />
        <Route path="/introduction/map" exact component={Map} />

        {/*production*/}
        <Route path="/production" exact component={Item} />
        <Route path="/production" exact component={Item} />
        <Route path="/production" exact component={Item} />
        <Route path="/production" exact component={Item} />

        {/*solution*/}
        <Route path="/solution" exact component={Process} />
        <Route path="/solution/process" exact component={Process} />
        <Route path="/solution/systems" exact component={System} />
        <Route path="/solution/development" exact component={Develop} />
        <Route path="/solution/equipment" exact component={Equipment} />

        {/*quality*/}
        <Route path="/quality" exact component={Quality} />
        <Route path="/quality/policy" exact component={Quality} />
        <Route
          path="/quality/certification"
          exact
          component={CertificationDetail}
        />

        {/*home*/}
        <Route path="/" exact component={Item}>
          <Main />
          <About />
          <News />
          <Product />
          <Certification />
        </Route>
      </Router>
    </div>
  );
}

export default App;
