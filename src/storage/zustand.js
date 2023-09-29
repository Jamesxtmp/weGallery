import { create } from 'zustand'

export const useStore = create( ( set ) => ( {

  functionsUseState: {},
  setNewfunctionsUseState: ( functionState ) =>
    set( ( state ) => ( { functionsUseState: { ...state.functionsUseState, [functionState]: functionState } } ) ),
  // bears: 0,
  // increasePopulation: () => set( ( state ) => ( { bears: state.bears + 1 } ) ),
  // removeAllBears: () => set( { bears: 0 } ),
} ) )