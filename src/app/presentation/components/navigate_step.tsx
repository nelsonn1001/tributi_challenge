'use client'

import { useContext } from "react";
import { SchemaPageContext, UserContext } from "../controllers/context_controller";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FieldStructureEntity from "../../domain/entities/field_structure_entity";
import { EndStep } from "@/src/core/constant";
import { redirect, usePathname } from "next/navigation";
import { ValidateClick } from "@/src/core/utils";
import UserEntity from "../../domain/entities/user_entity";
import styles from '@/src/app/page.module.css';


function NavigateStep() {
    const { schema } = useContext(SchemaPageContext);
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const step = schema.config.findIndex((config) => config.stepId === currentUser.currentStep);
    const pathname = usePathname();
    const preIndexId = step - 1 >= 0 ? schema.config[step - 1].stepId : '';
    const nextIndexId = step + 1 < schema.config.length ? schema.config[step + 1].stepId : EndStep;
    const currentFormSchemaEntity = schema.config[step];



    function OnClickNext({ allFields, nextIndexId }: { allFields: FieldStructureEntity[], nextIndexId: string }) {

        const { updateUser, isValid } = ValidateClick({ allFields, currentUser, nextIndexId })

        if (isValid) {
            setCurrentUser(updateUser);
            redirect(`/presentation/pages/dynamic_page/${nextIndexId}`);
        }
    }

    function OnClickBack({ indexId }: { indexId: string }) {
        setCurrentUser({ ...currentUser, currentStep: preIndexId } as UserEntity);
        redirect(`/presentation/pages/dynamic_page/${indexId}`);
    }

    return (
        <>
            {currentFormSchemaEntity != undefined &&
                <>
                    {pathname !== '/' && <div className={styles['tr-ch-nav']}>
                        {preIndexId != '' ? <FaArrowLeft className={styles['tr-ch-arrow']} onClick={() => OnClickBack({ indexId: preIndexId })}></FaArrowLeft> : <span></span>}
                        <span className={styles['tr-ch-text-nav']}>
                            {currentFormSchemaEntity.stepTittle}
                        </span>
                        {nextIndexId != EndStep ? <FaArrowRight className={styles['tr-ch-arrow']} onClick={() => OnClickNext({ allFields: currentFormSchemaEntity.fields, nextIndexId: nextIndexId })}></FaArrowRight> : <span></span>}
                    </div>
                    }

                </>
            }

        </>
    )
}


export default NavigateStep;