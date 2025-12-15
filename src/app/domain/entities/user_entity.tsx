
import { UserModel } from "../../data/models/user_model";

class UserEntity {
    id: number;
    name: string;
    lastName: string;
    email: string;
    documentType: string;
    document: string;
    phoneNumber: number;
    address: string;
    currentStep: string;
    comment: string;



    constructor({ id, name, lastName, email,
        documentType, document, phoneNumber, address, currentStep, comment }: UserModel) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.documentType = documentType;
        this.document = document;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.currentStep = currentStep;
        this.comment = comment;
    }

    toObject(): UserModel {
        return { ...this };
    }

}

export default UserEntity;