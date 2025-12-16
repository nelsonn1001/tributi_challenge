import FieldStructureEntity from "../app/domain/entities/field_structure_entity";
import SchemaEntity from "../app/domain/entities/schema_entity";
import UserEntity from "../app/domain/entities/user_entity";
import { FormFields, FormTypes, MessageValidator, MessageValidatorFormatOne, MessageValidatorFormatThree, MessageValidatorFormatTwo, ValidateExpression } from "./constant";

function GenerateRandomId() {
  // const uuid =crypto.randomUUID;
  let uuid: number = 0;
  try {
    uuid = Number.parseInt(`${Date.now()}${Math.random() * 1000}`);
  } catch (error) {
    console.error('error in GenerateRandomId ::: ' + error);
  }

  return uuid
}

type GlobalUserContent = {
  currentUser: UserEntity
  setCurrentUser: (userEntity: UserEntity) => void
}

type GlobalPageSchema = {
  schema: SchemaEntity
  setSchema: (schemaEntity: SchemaEntity) => void
}

function GetUserValue({ entity, currentUser }: { entity: FieldStructureEntity, currentUser: UserEntity }) {
  switch (entity.componentParamName) {
    case FormFields.name:
      return currentUser.name;

    case FormFields.lastName:
      return currentUser.lastName;

    case FormFields.document:
      return currentUser.document;

    case FormFields.documentType:
      return currentUser.documentType;

    case FormFields.phone:
      return currentUser.phoneNumber;

    case FormFields.email:
      return currentUser.email;

    case FormFields.address:
      return currentUser.address;

    case FormFields.comment:
      return currentUser.comment;

    default:
      return '';
  }

}

function ValidateClick({ allFields, currentUser, nextIndexId }: { allFields: FieldStructureEntity[], currentUser: UserEntity, nextIndexId: string }): { updateUser: UserEntity, isValid: boolean } {
  const updateUser = new UserEntity({ ...currentUser, currentStep: nextIndexId } as UserEntity);
  let isValid = true;
  for (let index = 0; index < allFields.length; index++) {
    const entity = allFields[index];

    if (entity.type === FormTypes.textField) {

      const fieldElement = document.getElementById(`${entity.componentId}`) as HTMLInputElement;

      const spanElement = document.getElementById(`${entity.componentId}LB`) as HTMLSpanElement;

      if (fieldElement.value.length < 1 && entity.isRequired) {
        spanElement.textContent = `${MessageValidator}${entity.value}`;
        isValid = false;
        break;
      }
      else if (fieldElement.value.length > 0) {
        const regex = new RegExp(ValidateExpression[entity.validate as keyof typeof ValidateExpression] )

        if (!regex.test(fieldElement.value)) {
          
          switch (entity.validate) {
            case 'onlyNumbers':
              spanElement.textContent = MessageValidatorFormatOne;
              break;
            case 'noNumbers':
              spanElement.textContent = MessageValidatorFormatTwo;
              break;
            case 'emailMatch':
              spanElement.textContent = MessageValidatorFormatThree;
              break;
            default:
              break;

          }

          isValid = false;
          break;
        }

        spanElement.textContent = '';
        switch (entity.componentParamName) {

          case FormFields.name:
            updateUser.name = fieldElement.value;
            break;

          case FormFields.lastName:
            updateUser.lastName = fieldElement.value;
            break;

          case FormFields.document:
            updateUser.document = fieldElement.value;
            break;

          case FormFields.phone:
            updateUser.phoneNumber =Number.isNaN(fieldElement.value)? 0: Number.parseInt(fieldElement.value);
            break;

          case FormFields.email:
            updateUser.email = fieldElement.value;
            break;

          case FormFields.address:
            updateUser.address = fieldElement.value;
            break;

          case FormFields.comment:
            updateUser.comment = fieldElement.value;
            break;

          default:
            break;
        }

      }

    } else if (entity.type === FormTypes.select) {
      const fieldElement = document.getElementById(`${entity.componentId}`) as HTMLSelectElement;
      updateUser.documentType = fieldElement.value;
    }
  }

  return { updateUser, isValid };

}



export {
  GenerateRandomId,
  ValidateClick,
  GetUserValue

};

export type {
  GlobalUserContent,
  GlobalPageSchema
};
