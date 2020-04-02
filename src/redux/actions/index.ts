export const selectCities = (id:number, country:string,checked: boolean) =>{
    return{
        type: 'SELECT_CITIES',
        id,country,checked
    }
}
