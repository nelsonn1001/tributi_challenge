import FieldStructureEntity from "@/src/app/domain/entities/field_structure_entity";
import UserEntity from "@/src/app/domain/entities/user_entity";
import { GenerateRandomId, GetUserValue, ValidateClick } from "@/src/core/utils";

describe('utils', () => {
  const entity = new FieldStructureEntity({
    type: '', validate: '', maxLength: 2, baseColor: '',
    placeHolder: '', componentId: '', componentParamName: 'name',
    value: '', isRequired: true
  });

  const currentUser = new UserEntity({
    id: 1, name: 'john Doe', lastName: '', email: '', documentType: 'CC',
    document: '', phoneNumber: 0, address: '', currentStep: '', comment: ''
  });
  it('case for function GetUserValue', () => {

    const result = GetUserValue({ entity, currentUser });

    expect(result).toBe('john Doe');
  });

  it('case for function ValidateClick', () => {
    const { updateUser, isValid } = ValidateClick({ allFields: [entity], currentUser, nextIndexId: 'End' });

    expect(updateUser.currentStep).toBe('End');
    expect(isValid).toBe(true);
  });

  it('case for function GenerateRandomId', () => {
    const result = GenerateRandomId();
    expect(result).toBeGreaterThan(1);
  });


});