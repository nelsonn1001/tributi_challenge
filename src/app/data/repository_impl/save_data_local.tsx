import UserEntity from "../../domain/entities/user_entity";
import { ManageDataRepo } from "../../domain/repository/manage_data_repo";
import ManageDataSource from "../data_sources/manage_data_source";


class ManageDataLocal implements ManageDataRepo {
  SaveData(userEntity: UserEntity, key: string): void {
    const JsonUserEntity = JSON.stringify(userEntity);
    const dataSource = new ManageDataSource();
    dataSource.SaveDataToLocalStore(JsonUserEntity, key);
  }

  GetDataToLocalStore(key: string): string {
    const dataSource = new ManageDataSource();
  return dataSource.getDataToLocalStore(key);


  }


}

export default ManageDataLocal;