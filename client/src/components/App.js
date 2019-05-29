import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      hi
      <BrowserRouter>
        {/* <Route path="/" exact component={App} />
        <Route path="/pagetwo" component={pageTwo} /> */}
      </BrowserRouter>
    </div>
  );
};

const pageTwo = () => {
  return <div>hi page two</div>;
};

export default App;
