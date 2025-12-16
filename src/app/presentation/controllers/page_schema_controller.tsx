
import { useContext } from "react";
import { SchemaPageContext } from "./context_controller";
import GetSchemaUseCase from "../../domain/use_cases/get_schema_use_case";
import SchemaEntity from "../../domain/entities/schema_entity";
import GetLocalSchemaUseCase from "../../domain/use_cases/get_local_schema_use_case";


function GetSchema(schemaName: string): SchemaEntity {
  return GetSchemaUseCase(schemaName);
}

function SetPageSchema(schema: SchemaEntity) {
  const { setSchema } = useContext(SchemaPageContext);
  setSchema(schema);

}

function GetEasterEgg():SchemaEntity|null {
  return GetLocalSchemaUseCase();
}


export {
  SetPageSchema,
  GetSchema,
  GetEasterEgg
};