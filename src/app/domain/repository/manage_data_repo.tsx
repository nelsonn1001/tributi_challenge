import UserEntity from "../entities/user_entity";

abstract class ManageDataRepo {
 abstract SaveData (userEntity:UserEntity,key:string):void;
  abstract GetDataToLocalStore(key:string):string ;

  }

  export {ManageDataRepo}