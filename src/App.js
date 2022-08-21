import React from "react";

import Form from "./components/Form";
import Home from "./pages/Home";

export const FormContext = React.createContext();

function App() {
  const [showForm, setShowForm] = React.useState(false);
  const [formName, setFormName] = React.useState("");

  return (
    <div className="App">
      <FormContext.Provider
        value={{ showForm, setShowForm, formName, setFormName }}
      >
        {showForm && <Form />}
        <Home />
      </FormContext.Provider>
    </div>
  );
}

export default App;
