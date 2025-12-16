
import SchemaFromJson from "../../data/repository_impl/schema_from_json";
import { SchemaRepo } from "../repository/schema_repo";
import SchemaEntity from "../entities/schema_entity";

 export default function GetSchemaUseCase(schemaName:string):SchemaEntity {

    try {
     const repository:SchemaRepo =new SchemaFromJson();
      return  repository.GetSchemaData(schemaName);
    } catch (error) {
       console.error(`Error in GetSchemaUseCase ::: ${error}`)
    }

  return new  SchemaEntity(
    {
    schemaName: '',
    config: [],
    schemaTittle:''
    }
  );


     

    
}