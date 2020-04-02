import { selectCities } from "../actions"

const initialState: any = {
  country: {
    portugal: {
      name: 'portugal',
      cities: [{
        id: 1,
        name: 'asiaya jyawanst',
        checked: false
      }, {
        id: 2,
        name: 'Ashok jyawanst',
        checked: false
      }, {
        id: 4,
        name: 'visah jyawanst',
        checked: false
      }, {
        id: 5,
        name: 'asyask jyawanst',
        checked: false
      }]
    },
    nicaragua: {
      name: 'Nicaragua',
      cities: [{
        id: 6,
        name: 'asiaya jyawanst',
        checked: false
      }, {
        id: 7,
        name: 'aviansh t',
        checked: false
      }, {
        id: 8,
        name: 'visah jyawanst',
        checked: false
      }, {
        id: 9,
        name: 'asyask jyawanst',
        checked: false
      }]
    }
  },
  selectCites:[]
  // selectCites: {
  //    cities: [{
  //     id: 1,
  //     name: 'asiaya jyawanst',
  //     checked: false,
  //     countryName: 'portugal'
  //   }]
  // }
}

export function country(state = initialState, action: any) {
  debugger
 switch(action.type){
   case 'SELECT_CITIES': 
   debugger
   return {...state, selectCites:state.selectCites.concat(action.data.selectCites)}
   default: 
   debugger
  return state
 }

}