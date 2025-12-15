import SchemaEntity from "../entities/schema_entity";

abstract class SchemaRepo {
 abstract GetSchemaData (schemaName:string):SchemaEntity ;

  }

  export {SchemaRepo}