

'use client'

import { JSX, useContext } from "react";
import NotFound from "@/src/app/not-found";
import { DocTypes, FormTypes } from "@/src/core/constant";
import FormSchemaEntity from "@/src/app/domain/entities/form_schema_entity";
import FieldStructureEntity from "@/src/app/domain/entities/field_structure_entity";

import { SchemaPageContext, UserContext } from "../../../controllers/context_controller";
import React from "react";

import UserEntity from "@/src/app/domain/entities/user_entity";
import { redirect } from "next/navigation";


     function DynamicPage({ params }: { params: Promise<{ stepId: string }> }) {
   
    const stepId = React.use(params).stepId;


    const { currentUser,setCurrentUser } = useContext(UserContext);

    
    const { schema } = useContext(SchemaPageContext);
    const currentIndex = schema.config.findIndex((config) => config.stepId === stepId);

    function DynamicText({ fieldEntity }: { fieldEntity: FieldStructureEntity }) {
        return <pre id={fieldEntity.componentId} >
            {fieldEntity.value}
        </pre>

    }

    function DynamicTextField({ fieldEntity }: { fieldEntity: FieldStructureEntity }) {
        return <>
            <pre id={`${fieldEntity.componentId}LB`} ></pre>
            <p />
            <input id={fieldEntity.componentId} placeholder={fieldEntity.placeHolder} maxLength={fieldEntity.maxLength} pattern={fieldEntity.validate} >
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

        let allow = true;
        for (let index = 0; index < allFields.length; index++) {
            const entity = allFields[index];

            if (entity.type === FormTypes.textField) {

                const fieldElement = document.getElementById(`${entity.componentId}`) as HTMLInputElement;

                const labelElement = document.getElementById(`${entity.componentId}LB`) as HTMLInputElement;
               
                if (fieldElement.value.length < 1) {
                    labelElement.textContent = 'Por favor ingresa información';
                    allow = false;
                    break;
                } else {
                    labelElement.textContent = '';
                }

            }
        }

        if (allow) {
           
  setCurrentUser({...currentUser,currentStep:nextIndexId} as UserEntity);

   redirect(`/presentation/pages/dynamic_page/${nextIndexId}`);
            
        
    }   
}


    function DynamicButton({ fieldEntity, formEntity, nextIndexId }: { fieldEntity: FieldStructureEntity, formEntity: FormSchemaEntity, nextIndexId: string }) {
        return <>
            <p />
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
        }

        const result: JSX.Element[] = [
        ];

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