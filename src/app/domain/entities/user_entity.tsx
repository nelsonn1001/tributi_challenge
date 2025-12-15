
import { UserModel } from "../../data/models/user_model";

class UserEntity {
    id: number;
    name: string;
    lastNane: string;
    email: string;
    documentType: string;
    document: string;
    phoneNumber: number;
    address: string;
    currentStep:string;


    constructor({ id, name, lastNane, email,
        documentType, document, phoneNumber, address, currentStep}: UserModel) {
        this.id = id;
        this.name = name;
        this.lastNane = lastNane;
        this.email = email;
        this.documentType = documentType;
        this.document = document;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.currentStep= currentStep;
    }

    toObject(): UserModel {
        return { ...this };
    }

}

export default UserEntity;