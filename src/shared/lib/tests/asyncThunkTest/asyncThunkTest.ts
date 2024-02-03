import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/storeProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class AsyncThunkTest<Returned, ThunkArg, RejectedValue> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = actionCreator;
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}
