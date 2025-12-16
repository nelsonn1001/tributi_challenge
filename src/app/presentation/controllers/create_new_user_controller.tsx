

import { useContext } from "react";
import UserEntity from "../../domain/entities/user_entity";
import {UserContext} from "./context_controller";
import { GenerateRandomId } from "@/src/core/utils";
import SaveDataUseCase from "../../domain/use_cases/save_data_use_case";



function NewUser(){
    const id = GenerateRandomId();
    return new UserEntity({ id:id , name:'' , lastName:'' , email:'',documentType:'CC', document:'', phoneNumber:0 ,address:'', currentStep:'', comment:''});
}

function SetDataUserContext(userEntity:UserEntity){ 
     const {setCurrentUser} =useContext(UserContext) ;
     setCurrentUser(userEntity);
   
}

 function SaveUser(userEntity:UserEntity){
    SaveDataUseCase(userEntity,'LastUserEntity');
 }

export {
SetDataUserContext,
NewUser,
SaveUser
};