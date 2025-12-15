import SchemaEntity from "../app/domain/entities/schema_entity";
import UserEntity from "../app/domain/entities/user_entity";

function GenerateRandomId() {
   // const uuid =crypto.randomUUID;
   let uuid:number = 0;
   try {
    uuid = Number.parseInt(`${Date.now()}${Math.random()*1000}`);
   } catch (error) {
    console.log('error in GenerateRandomId ::: '+error);
   }
 
    return uuid
}

type GlobalUserContent = {
  currentUser:UserEntity
  setCurrentUser:(userEntity:UserEntity)=> void
}

type GlobalPageSchema = {
  schema:SchemaEntity
  setSchema:(schemaEntity:SchemaEntity)=> void
}



export {
    GenerateRandomId,
 
};

export type { 
    GlobalUserContent,
    GlobalPageSchema
};
