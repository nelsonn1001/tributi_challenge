

import { useContext } from "react";
import UserEntity from "../../domain/entities/user_entity";
import {UserContext} from "./context_controller";
import { GenerateRandomId } from "@/src/core/utils";

function NewUser(){
    const id = GenerateRandomId();
    return new UserEntity({ id:id , name:'' , lastNane:'' , email:'',documentType:'CC', document:'', phoneNumber:0 ,address:'', currentStep:''});
}

function SetDataUserContext(userEntity:UserEntity){ 
     const {setCurrentUser} =useContext(UserContext) ;
     setCurrentUser(userEntity);
   
}

export {
SetDataUserContext,
NewUser
};