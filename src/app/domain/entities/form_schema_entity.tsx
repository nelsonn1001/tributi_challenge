
import { FormSchemaModel } from "../../data/models/form_schema_model";
import FieldStructureEntity from "./field_structure_entity";

class FormSchemaEntity {
    stepId: string;
    fields: FieldStructureEntity[];
    stepColor: string;

    constructor({ stepId, fields, stepColor }: FormSchemaModel) {
        this.stepId = stepId;
        this.fields = fields.map((field) => { return new FieldStructureEntity({ ...field }); });

        this.stepColor = stepColor;
    }

    toObject(): FormSchemaEntity {
        return { ...this };
    }

}

export default FormSchemaEntity;