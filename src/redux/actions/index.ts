export const selectCities = (id:any, country:any) =>{
    debugger
    return{
        type: 'SELECT_CITIES',
        id,country
    }
}