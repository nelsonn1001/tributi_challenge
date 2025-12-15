import { FieldStructureModel } from "../../data/models/field_structure_model";


class FieldStructureEntity {
    type: string;
    validate: string;
    maxLength: number;
    baseColor: string;
    placeHolder: string;
    componentId: string;
    componentParamName: string;
    value:string;


    constructor({ type, validate, maxLength, baseColor,
        placeHolder, componentId, componentParamName,value }: FieldStructureModel) {
        this.type=type;
        this.validate = validate;
        this.maxLength = maxLength;
        this.baseColor = baseColor;
        this.placeHolder = placeHolder;
        this.componentId = componentId;
        this.componentParamName = componentParamName;
        this.value=value;

    }

    toObject(): FieldStructureModel {
        return { ...this };
    }

}

export default FieldStructureEntity;