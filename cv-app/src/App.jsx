/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Header from "./Header";
import GeneralInfo from "./GeneralInfo";
import EducationExp from "./EducationalExp";
import PracticalExp from "./PracticalExp";
import Button from "./button";


function App() {
    return (
        <div className="container">
            <Header />
            <GeneralInfo />
            <EducationExp />
            <PracticalExp />
            <Button />
        </div>
    )
}

export default App;
