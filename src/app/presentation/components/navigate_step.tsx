'use client'

import { useContext } from "react";
import { SchemaPageContext, UserContext } from "../controllers/context_controller";
import { SlActionUndo,SlActionRedo  } from "react-icons/sl";
import FieldStructureEntity from "../../domain/entities/field_structure_entity";
import { EndStep } from "@/src/core/constant";
import { redirect } from "next/navigation";
import { ValidateClick } from "@/src/core/utils";
import UserEntity from "../../domain/entities/user_entity";

function NavigateStep() {
    const { schema } = useContext(SchemaPageContext);
    const { currentUser,setCurrentUser } = useContext(UserContext);
    const step = schema.config.findIndex((config) => config.stepId === currentUser.currentStep);
    const styleArrow = {
        color: "#003b25ff",
     
        size:"100px",
    };
      const  styleNav= {
      display: "flex",
      justifyContent: 'space-between',
    };
    
 const preIndexId = step - 1 >= 0?  schema.config[step - 1].stepId:'';
 const nextIndexId = step + 1 <schema.config.length?  schema.config[step + 1].stepId:EndStep;
 const currentFormSchemaEntity = schema.config[step];

 
    console.log(`nextIndexId 111111--->>${nextIndexId}`);

    function OnClickNext({ allFields, nextIndexId }: { allFields: FieldStructureEntity[], nextIndexId: string }) {
    
    const {updateUser,isValid}= ValidateClick({allFields,currentUser,nextIndexId})
    
        if (isValid) {     
  setCurrentUser(updateUser);
   redirect(`/presentation/pages/dynamic_page/${nextIndexId}`);
            
        
    }  
}

function OnClickBack({  indexId }: {  indexId: string }) {
      console.log(`OnClickBack --->>${indexId}`);
        setCurrentUser({...currentUser,currentStep:preIndexId} as UserEntity );
   redirect(`/presentation/pages/dynamic_page/${indexId}`);       
 }

    return (
        <>
            {currentFormSchemaEntity != undefined &&
                <div style={styleNav}> 
                    {preIndexId != '' ? <SlActionUndo style={styleArrow} onClick={() => OnClickBack({ indexId: preIndexId })}></SlActionUndo> : <span></span>}
                    {nextIndexId != EndStep ? <SlActionRedo style={styleArrow} onClick={() => OnClickNext({ allFields: currentFormSchemaEntity.fields, nextIndexId: nextIndexId })}></SlActionRedo> : <span></span>}
                </div>
            }

        </>
    )
}


export default NavigateStep;