

'use client'

import React,{ JSX, useContext } from "react";
import NotFound from "@/src/app/not-found";
import { DocTypes, EndStep, FormTypes } from "@/src/core/constant";
import FormSchemaEntity from "@/src/app/domain/entities/form_schema_entity";
import FieldStructureEntity from "@/src/app/domain/entities/field_structure_entity";
import { SchemaPageContext, UserContext } from "../../../controllers/context_controller";
import { redirect } from "next/navigation";
import Link from "next/link";
import { GetUserValue, ValidateClick } from "@/src/core/utils";


     function DynamicPage({ params }: { params: Promise<{ stepId: string }> }) {
   
    const stepId = React.use(params).stepId;
    const { currentUser,setCurrentUser } = useContext(UserContext);
    const { schema } = useContext(SchemaPageContext);
    const currentIndex = schema.config.findIndex((config) => config.stepId === stepId);

           if (stepId === EndStep) {
          return ( <>
                 <h2>
                     Felicidades
                 </h2>

                 <Link href="/">go home</Link>
             </>);
         }

    function DynamicText({ fieldEntity }: { fieldEntity: FieldStructureEntity }) {
        return <span id={fieldEntity.componentId} >
            {fieldEntity.value}
        </span>

    }

    function DynamicTextField({ fieldEntity }: { fieldEntity: FieldStructureEntity }) {
            const val =GetUserValue({entity:fieldEntity,currentUser});

        return <>
            <span id={`${fieldEntity.componentId}LB`} />
            &nbsp;
            <input id={fieldEntity.componentId} placeholder={fieldEntity.placeHolder} maxLength={fieldEntity.maxLength} pattern={fieldEntity.validate} defaultValue={val} >
            </input>
        </>
    }

    function DynamicSelect({ fieldEntity }: { fieldEntity: FieldStructureEntity }) {

        return <select  id={fieldEntity.componentId} >
            <option value={DocTypes.CC} >{DocTypes.CC}</option>
            <option value={DocTypes.CE}>{DocTypes.CE}</option>
            <option value={DocTypes.TI}>{DocTypes.TI}</option>
        </select>

    }


    function OnClickButton({ allFields, nextIndexId }: { allFields: FieldStructureEntity[], nextIndexId: string }) {

    const {updateUser,isValid}= ValidateClick({allFields,currentUser,nextIndexId})
    
        if (isValid) {     
  setCurrentUser(updateUser);
   redirect(`/presentation/pages/dynamic_page/${nextIndexId}`);
            
        
    }   
}


    function DynamicButton({ fieldEntity, formEntity, nextIndexId }: { fieldEntity: FieldStructureEntity, formEntity: FormSchemaEntity, nextIndexId: string }) {
      
      return <>
            &nbsp;
            <button id={fieldEntity.componentId} onClick={() => OnClickButton({ allFields: formEntity.fields, nextIndexId: nextIndexId })}>
                {fieldEntity.value}
            </button>
        </>

    }

    let nextIndexId = '0';
    if (currentIndex < 0) {
        return <NotFound></NotFound>
    } else {

        const currentFormSchemaEntity = schema.config[currentIndex];
        if (currentIndex + 1 < schema.config.length) {
            nextIndexId = schema.config[currentIndex + 1].stepId;
        }else if(currentIndex + 1 == schema.config.length){
           nextIndexId = EndStep;
        }

        const result: JSX.Element[] = [];
        currentFormSchemaEntity.fields.map((element) => {

            switch (element.type) {
                case FormTypes.text:
                    result.push(<DynamicText fieldEntity={element} />);
                    break;
                case FormTypes.textField:
                    result.push(<DynamicTextField fieldEntity={element} />);
                    break;
                case FormTypes.select:
                    result.push(<DynamicSelect fieldEntity={element} />);
                    break;
                case FormTypes.button:
                    result.push(<DynamicButton fieldEntity={element} formEntity={currentFormSchemaEntity} nextIndexId={nextIndexId} />);
                    break;
                default:
                    result.push(<></>);

            };
        });

        return <>{...result}</>
    }

}

export default  DynamicPage;