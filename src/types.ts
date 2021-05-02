import { TypedUseSelectorHook } from 'react-redux';
import { Action, ActionFunctionAny, ActionMeta } from 'redux-actions';

export type AsyncActionState = 'START' | 'SUCCESS' | 'FAILURE' | 'CANCEL';

export type BaseAction = Action<any> | ActionMeta<any, any>;

export type AsyncBaseActionControl = {
  start: ActionFunctionAny<Action<any>>;
  success: ActionFunctionAny<Action<any>>;
  failure: ActionFunctionAny<Action<any>>;
  cancel: ActionFunctionAny<Action<any>>;
};

export type AsyncActionReducer = {
  [actionName: string]: AsyncActionState;
};

export type Selector = (state: any) => any;

export type AwaitControlInitializer = {
  keyReducer?: string;
};

export type AwaitControlHook = {
  start: (payload?: any, meta?: any) => ActionMeta<any, any>;
  success: (payload?: any, meta?: any) => ActionMeta<any, any>;
  cancel: (payload?: any, meta?: any) => ActionMeta<any, any>;
  failure: (payload?: any, meta?: any) => ActionMeta<any, any>;
  isRunning: (actionId?: string | number) => TypedUseSelectorHook<any>;
  isCancelled: (actionId?: string | number) => TypedUseSelectorHook<any>;
  hasFailure: (actionId?: string | number) => TypedUseSelectorHook<any>;
  isSuccessful: (actionId?: string | number) => TypedUseSelectorHook<any>;
};
