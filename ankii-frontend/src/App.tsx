import React, { useState } from 'react';
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

const Container = styled.div`
`;

const CardViewControl = styled.div`
  margin-top: 8px;
  margin-left: 8px;
`;

interface Props {}

const App: React.FC<Props> = (props) => {
  const [frontMode, setFrontMode] = useState("input")

  const inputMode = (setModeFn: React.Dispatch<React.SetStateAction<string>>) => {
    setModeFn("input")
  }

  const previewMode = (setModeFn: React.Dispatch<React.SetStateAction<string>>) => {
    setModeFn("preview")
  }

  return (
    <div className="App">
      <FormContainer>
        <form>
          <div className="form-group">
            <label><h4>Front</h4></label>
            <Container className="border rounded">
              <CardViewControl className="border-bottom">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className={"nav-link " + (frontMode == "input" ? "active" : "")}
                      href="#"
                      onClick={() => inputMode(setFrontMode)}
                    >Input</a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={"nav-link " + (frontMode == "preview" ? "active" : "")}
                      href="#"
                      onClick={() => previewMode(setFrontMode)}
                    >Preview</a>
                  </li>
                </ul>
              </CardViewControl>
              <CardTextArea className="form-control"></CardTextArea>
            </Container>
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
