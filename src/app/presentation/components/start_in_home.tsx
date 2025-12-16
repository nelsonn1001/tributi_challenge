'use client'

import { redirect } from 'next/navigation';
import { useContext } from 'react';
import { UserContext } from '../controllers/context_controller';
import { NewUser } from '../controllers/create_new_user_controller';
import styles from '@/src/app/page.module.css';


function StartInHome() {
    const { setCurrentUser } = useContext(UserContext);
    function GoHome() {
        setCurrentUser(NewUser());
        redirect('/');
    }
    return (<div className={styles['tr-ch-div']}>
        <button onClick={() => GoHome()} className={styles['tr-ch-btn']}>
            Ir al Home
        </button>
    </div>);


}

export default StartInHome;