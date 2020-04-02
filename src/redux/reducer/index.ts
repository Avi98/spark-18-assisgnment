import { selectCities } from "../actions"

const initialState: any = {
  country: {
    portugal: {
      name: 'portugal',
      cities: {
        1: {
          id: 1,
          name: 'asiaya jyawanst',
          checked: false
        }, 2: {
          id: 2,
          name: 'Ashok jyawanst',
          checked: false
        }, 4: {
          id: 4,
          name: 'visah jyawanst',
          checked: false
        }, 5: {
          id: 5,
          name: 'asyask jyawanst',
          checked: false
        }
      }
    },
    nicaragua: {
      name: 'Nicaragua',
      cities: {
        6: {
          id: 6,
          name: 'asiaya jyawanst',
          checked: false
        }, 7: {
          id: 7,
          name: 'aviansh t',
          checked: false
        }, 8: {
          id: 8,
          name: 'visah jyawanst',
          checked: false
        }, 9: {
          id: 9,
          name: 'asyask jyawanst',
          checked: false
        }
      }
    }
  },

}

export function country(state = initialState, action: any) {
  switch (action.type) {
    case 'SELECT_CITIES':
      //  const country= 
      debugger

      return {
        ...state,
        country: {
          ...state.country,
          [action.country]: {
            ...state.country[action.country],
            cities: {
              ...state.country[action.country].cities,
              [action.id]: {
                ...state.country[action.country].cities[action.id],
                checked: true
              }
            }
          }
        }
      }

    default:
      return state
  }

}