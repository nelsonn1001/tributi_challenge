import { SchemaModel } from "../../data/models/schema_model";
import FormSchemaEntity from "./form_schema_entity";

class SchemaEntity {
    schemaName: string;
    config: FormSchemaEntity[];

    constructor({ schemaName, config, }: SchemaModel) {
        this.schemaName = schemaName;
        this.config = config.map((field) => { return new FormSchemaEntity({ ...field }); }) ;
    }

    toObject(): SchemaEntity {
        return { ...this };
    }

}

export default SchemaEntity;