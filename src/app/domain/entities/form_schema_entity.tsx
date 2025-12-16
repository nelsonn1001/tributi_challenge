
import { FormSchemaModel } from "../../data/models/form_schema_model";
import FieldStructureEntity from "./field_structure_entity";

class FormSchemaEntity {
    stepId: string;
    fields: FieldStructureEntity[];
    stepColor: string;
    stepTittle: string;

    constructor({ stepId, fields, stepColor, stepTittle }: FormSchemaModel) {
        this.stepId = stepId;
        this.fields = fields.map((field) => { return new FieldStructureEntity({ ...field }); });
        this.stepColor = stepColor;
        this.stepTittle = stepTittle;
    }

    toObject(): FormSchemaEntity {
        return { ...this };
    }

}

export default FormSchemaEntity;