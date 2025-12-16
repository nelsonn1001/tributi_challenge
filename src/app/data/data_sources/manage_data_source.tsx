
class ManageDataSource{
         SaveDataToLocalStore(JsonUserEntity: string,key:string) {
            localStorage.setItem(key, JsonUserEntity);
         }
         
         getDataToLocalStore(key:string):string {
           return  localStorage.getItem(key)??'';
         }

        
}

export default ManageDataSource;

