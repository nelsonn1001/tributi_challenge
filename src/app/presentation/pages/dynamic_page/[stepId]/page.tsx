

'use client'

import { JSX, use, useContext } from "react";
import NotFound from "@/src/app/not-found";
import { DocTypes, EndStep, FormTypes, } from "@/src/core/constant";
import FormSchemaEntity from "@/src/app/domain/entities/form_schema_entity";
import FieldStructureEntity from "@/src/app/domain/entities/field_structure_entity";
import { SchemaPageContext, UserContext } from "../../../controllers/context_controller";
import { redirect } from "next/navigation";
import { GetUserValue, ValidateClick } from "@/src/core/utils";
import EndDetail from "../../../components/end_detail";
import StartInHome from "../../../components/start_in_home";
import { SaveUser } from "../../../controllers/create_new_user_controller";
import styles from '@/src/app/page.module.css';


function DynamicPage({ params }: { params: Promise<{ stepId: string }> }) {

    const stepId = use(params).stepId;
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { schema } = useContext(SchemaPageContext);
    const currentIndex = schema.config.findIndex((config) => config.stepId === stepId);

    if (stepId === EndStep) {
        SaveUser(currentUser);
        return (<>
            <EndDetail />
           <StartInHome/>
        </>);
    }

    function DynamicText({ fieldEntity }: { fieldEntity: FieldStructureEntity }) {
        return <>
            <span id={fieldEntity.componentId} className={styles['tr-ch-text']}>
                { fieldEntity.isRequired? `*${fieldEntity.value}`:`${fieldEntity.value}`}
            </span>
            <br />
        </>


    }

    function DynamicTextField({ fieldEntity }: { fieldEntity: FieldStructureEntity }) {
        const val = GetUserValue({ entity: fieldEntity, currentUser });
        let defaultValue = val;
        if (fieldEntity.validate == 'onlyNumbers') {
            defaultValue = Number.isNaN(val) ? 0 : val;
        }

        return <>
            <span id={`${fieldEntity.componentId}LB`} className={styles['tr-ch-text-alert']}/>
            <br />
            <input id={fieldEntity.componentId} placeholder={fieldEntity.placeHolder} maxLength={fieldEntity.maxLength} defaultValue={defaultValue} className={styles['tr-ch-text-field']}>
            </input>
            <br />
        </>
    }

    function DynamicSelect({ fieldEntity }: { fieldEntity: FieldStructureEntity }) {
        const val = GetUserValue({ entity: fieldEntity, currentUser });

        return <>
            <select id={fieldEntity.componentId} defaultValue={val} className={styles['tr-ch-select']}>
                <option value={DocTypes.CC} >{DocTypes.CC}</option>
                <option value={DocTypes.CE}>{DocTypes.CE}</option>
                <option value={DocTypes.TI}>{DocTypes.TI}</option>
            </select>
            <br />
        </>
    }

    function OnClickButton({ allFields, nextIndexId }: { allFields: FieldStructureEntity[], nextIndexId: string }) {
        const { updateUser, isValid } = ValidateClick({ allFields, currentUser, nextIndexId })
        if (isValid) {
            setCurrentUser(updateUser);
            redirect(`/presentation/pages/dynamic_page/${nextIndexId}`);
        }
    }


    function DynamicButton({ fieldEntity, formEntity, nextIndexId }: { fieldEntity: FieldStructureEntity, formEntity: FormSchemaEntity, nextIndexId: string }) {
        return <>
            <button id={fieldEntity.componentId} 
            onClick={() => OnClickButton({ allFields: formEntity.fields, nextIndexId: nextIndexId })} className={styles['tr-ch-btn-margin']}>
                {fieldEntity.value}
            </button>
            <br />
        </>
    }

    let nextIndexId = '0';
    if (currentIndex < 0) {
        return <NotFound></NotFound>
    } else {

        const currentFormSchemaEntity = schema.config[currentIndex];
        if (currentIndex + 1 < schema.config.length) {
            nextIndexId = schema.config[currentIndex + 1].stepId;
        } else if (currentIndex + 1 == schema.config.length) {
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

        return <div className={styles['tr-ch-div-default']}>{...result}</div>
    }

}

export default DynamicPage;