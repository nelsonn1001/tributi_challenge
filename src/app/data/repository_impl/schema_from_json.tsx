import SchemaEntity from "../../domain/entities/schema_entity";
import { SchemaRepo } from "../../domain/repository/schema_repo";
import SchemaDataSource from "../data_sources/schema_data_source";

 class SchemaFromJson implements SchemaRepo{
    
     GetSchemaData(schemaName: string): SchemaEntity {
       const dataSource = new SchemaDataSource();
       const model =dataSource.GetSchemaData(schemaName);
       return new SchemaEntity(model);
     }
}

export default SchemaFromJson;