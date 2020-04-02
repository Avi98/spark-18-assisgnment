export const selectCities = (id:number, country:string,checked: boolean) =>{
    debugger
    return{
        type: 'SELECT_CITIES',
        id,country,checked
    }
}
