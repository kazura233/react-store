import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action as ReduxAction } from 'redux'

export type StoreAction<Store> = {
  type: string
  namespace: string
  action: (store: Store) => Partial<Store>
}

export const createAction = <Store extends {}>(namespace: string) => {
  return <Handel extends (...args: any[]) => Partial<Store> | ((store: Store) => Partial<Store>)>(
    handel: Handel
  ) => {
    return (...args: Parameters<Handel>): StoreAction<Store> => {
      const result = handel(...args)
      const action: (store: Store) => Partial<Store> =
        typeof result === 'function' ? result : () => result
      return {
        type: '@@ACTION',
        namespace,
        action,
      }
    }
  }
}

export const createAsyncAction = <S, E, A extends ReduxAction>() => {
  return <
    Handel extends (
      ...args: any[]
    ) => (
      dispatch: ThunkDispatch<S, E, A>,
      selector: <T>(selector: (store: S) => T) => T,
      extraArgument: E
    ) => any
  >(
    handel: Handel
  ) => {
    return (...args: Parameters<Handel>): ThunkAction<ReturnType<ReturnType<Handel>>, S, E, A> =>
      (dispatch, getState, extraArgument) =>
        handel(...args)(dispatch, (selector) => selector(getState()), extraArgument)
  }
}

export const createReducer = <Store extends {}>(namespace: string, defaultStore: Store) => {
  return (store: Store = defaultStore, action: StoreAction<Store>) => {
    return action.namespace === namespace ? { ...store, ...action.action(store) } : store
  }
}
