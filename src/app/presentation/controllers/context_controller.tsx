'use client'

import { GlobalPageSchema, GlobalUserContent } from "@/src/core/utils";
import { createContext} from "react";
import { NewUser } from "./create_new_user_controller";
import GetSchemaUseCase from "../../domain/use_cases/get_schema_use_case";
import SchemaEntity from "../../domain/entities/schema_entity";


const UserContext=createContext<GlobalUserContent>({
    currentUser: NewUser() ,
    setCurrentUser:  ()=>{},
});


const schema:SchemaEntity = GetSchemaUseCase('v1');

const SchemaPageContext=createContext<GlobalPageSchema>({
    schema: schema ,
    setSchema: ()=>{},
});



export {UserContext,SchemaPageContext} ;