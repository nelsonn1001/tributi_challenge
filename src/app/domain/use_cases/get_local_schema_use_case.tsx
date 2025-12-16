
import ManageDataLocal from "../../data/repository_impl/save_data_local";
import SchemaEntity from "../entities/schema_entity";
import { ManageDataRepo } from "../repository/manage_data_repo";


export default function GetLocalSchemaUseCase():SchemaEntity|null {
    try {
        const repository: ManageDataRepo = new ManageDataLocal();
        const data =repository.GetDataToLocalStore('localSchemaEasterEgg');
        return JSON.parse(data) as SchemaEntity;
    } catch (error) {
        console.error(`Error in GetLocalSchemaUseCase ::: ${error}`)
        return null;
    }

}

 