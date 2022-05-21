import axios  from "axios";


const httpClient = axios.create({ 
    baseURL: "http://localhost:8080"    
    
  });
  
  export const getAll = (entity: string) => {
    return httpClient.get(entity);
  };

  export const getId = (entity_id: string) => {
    return httpClient.get(entity_id);
  };

  