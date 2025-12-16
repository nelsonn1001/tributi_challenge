import { FieldStructureModel } from "./field_structure_model";

export interface FormSchemaModel {
    stepId: string;
    fields: FieldStructureModel[];
    stepColor: string;
    stepTittle:string;
}
