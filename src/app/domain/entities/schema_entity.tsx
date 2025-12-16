import { SchemaModel } from "../../data/models/schema_model";
import FormSchemaEntity from "./form_schema_entity";

class SchemaEntity {
    schemaName: string;
    config: FormSchemaEntity[];
    schemaTittle: string;

    constructor({ schemaName, config, schemaTittle }: SchemaModel) {
        this.schemaName = schemaName;
        this.config = config.map((field) => { return new FormSchemaEntity({ ...field }); });
        this.schemaTittle = schemaTittle;
    }

    toObject(): SchemaEntity {
        return { ...this };
    }

}

export default SchemaEntity;