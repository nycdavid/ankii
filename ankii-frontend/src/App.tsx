import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
`;

const CardTextArea = styled.textarea`
  resize: none;
  height: 250px;
  margin-bottom: 50px;
`;

function App() {
  return (
    <div className="App">
      <FormContainer>
        <form>
          <div className="form-group">
            <label>Front</label>
            <CardTextArea className="form-control"></CardTextArea>
          </div>
          <div className="form-group">
            <label>Back</label>
            <CardTextArea className="form-control"></CardTextArea>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}

export default App;
