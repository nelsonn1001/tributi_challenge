'use client'

import { useContext } from "react";
import { SchemaPageContext, UserContext } from "../controllers/context_controller";
import { EndStep } from "@/src/core/constant";

function ProgressBar() {

    const { schema } = useContext(SchemaPageContext);
    const { currentUser } = useContext(UserContext);

    const totalSteps = schema.config.length + 1;
    const step = currentUser.currentStep == EndStep ? totalSteps : schema.config.findIndex((config) => config.stepId === currentUser.currentStep) + 1;
    const percentSteps = (step / totalSteps) * 100;
    console.log(` currentUser<<<<<  ${JSON.stringify(currentUser)}`);
    console.log(` percentSteps<<<<<  ${percentSteps}`);
    const styleBarBorder = {
        color: "#b4b2b2ff",
        background: "#b4b2b2ff",
        width: "30%",
        maxWidth: "400px",
        border: "2px solid #8d8d8dff",
        borderRadius: "16px",
        height: "10px",
        justifyContent: "left",
    };

    const styleBar = {
        color: "#00b318ff",
        background: "#00b318ff",
        height: "6px",
        width: `${percentSteps}%`,
        maxWidth: "400px",
        border: "2px solid #00b318ff",
        borderRadius: "16px",
        justifyContent: "left",
    };

    const styleHeader = {
        display: "flex",
        justifyContent: "center",

    };


    if (step < 1) {
        return (
            <div style={styleHeader}>
                <div style={styleBarBorder} >
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={styleHeader}>
                <div style={styleBarBorder} >

                    <div style={styleBar}>

                    </div>
                </div>
            </div>
        )
    }


}


export default ProgressBar;