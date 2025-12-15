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
    isRequired:boolean;


    constructor({ type, validate, maxLength, baseColor,
        placeHolder, componentId, componentParamName,value,isRequired }: FieldStructureModel) {
        this.type=type;
        this.validate = validate;
        this.maxLength = maxLength;
        this.baseColor = baseColor;
        this.placeHolder = placeHolder;
        this.componentId = componentId;
        this.componentParamName = componentParamName;
        this.value=value;
        this.isRequired=isRequired;

    }

    toObject(): FieldStructureModel {
        return { ...this };
    }

}

export default FieldStructureEntity;