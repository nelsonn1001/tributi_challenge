'use client'

import {useRouter} from 'next/navigation'
import { useContext } from 'react';
import {UserContext} from '../../controllers/context_controller';
import UserEntity from '@/src/app/domain/entities/user_entity';


function PageHome() {
     const router = useRouter();
     const {currentUser,setCurrentUser} =useContext(UserContext) ;

    function OnBtnClick() {
          setCurrentUser({...currentUser,currentStep:'1'} as UserEntity);

    router.push(`/presentation/pages/dynamic_page/${1}`)
};

    return(
        <>
        <h1>
         Bienvenido
        </h1>

        <button type='button' onClick={()=>OnBtnClick() }>
            continue
        </button>


        </>
        
    )
    
}

export default PageHome;