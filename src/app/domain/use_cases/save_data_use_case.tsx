
import ManageDataLocal from "../../data/repository_impl/save_data_local";
import UserEntity from "../entities/user_entity";
import { ManageDataRepo } from "../repository/manage_data_repo";


export default function SaveDataUseCase(userEntity: UserEntity, key: string) {

    try {
        const repository: ManageDataRepo = new ManageDataLocal();
        repository.SaveData(userEntity, key);
    } catch (error) {
        console.error(`Error in SaveDataUseCase ::: ${error}`)
    }

}

