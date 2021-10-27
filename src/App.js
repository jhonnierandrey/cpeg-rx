import { Header, Main, Login, Register, About, NotFound, Footer } from './components/Index';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
      </Router>
    </div>
    );
}
  
export default App;
  