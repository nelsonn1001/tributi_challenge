'use client'

import { useRouter } from 'next/navigation'
import { useContext } from 'react';
import { SchemaPageContext, UserContext } from '../../controllers/context_controller';
import UserEntity from '@/src/app/domain/entities/user_entity';
import { GetEasterEgg } from '../../controllers/page_schema_controller';
import styles from '@/src/app/page.module.css'


function PageHome() {
    const router = useRouter();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const {schema, setSchema } = useContext(SchemaPageContext);

    function OnBtnClick() {
        setCurrentUser({ ...currentUser, currentStep: '1' } as UserEntity);

        router.push(`/presentation/pages/dynamic_page/${1}`)
    };

    function OnEasterEgg() {
        const easterSchema = GetEasterEgg();
        if (easterSchema != null) {
            setSchema(easterSchema);
        }

    };


    return (
        <>
        <div className={styles['tr-ch-div']}>
            <span className={styles['tr-ch-text-big']}>
                {schema.schemaTittle}
            </span>

            <button type='button' onClick={() => OnBtnClick()} className={styles['tr-ch-btn']}>
                continue
            </button>

            <button type='button' onClick={() => OnEasterEgg()} className={styles['tr-ch-btn-hidden']}>
            </button>
        </div>

        </>

    )

}

export default PageHome;