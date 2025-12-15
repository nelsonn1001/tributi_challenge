
import { SchemaModel } from "../models/schema_model";
import { JsonPageSchema, JsonPageSchemaV2 } from "@/src/core/constant";

class SchemaDataSource{

    #GetModelFromJson(schemaName: string):SchemaModel{
       const jsonSchema = schemaName=='v1'? JsonPageSchema:JsonPageSchemaV2;
        const objResult =JSON.parse(jsonSchema) as SchemaModel;
        return objResult;
 
    }

     GetSchemaData(schemaName: string): SchemaModel {
         return this.#GetModelFromJson(schemaName);
     }

}

export default SchemaDataSource;