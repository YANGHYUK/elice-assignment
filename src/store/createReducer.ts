import produce from 'immer';

export default function createReducer(initialState: any, handlerMap: any) {
	return function (state = initialState, action: any) {
		return produce(state, (draft: any) => {
			const handler = handlerMap[action.type];
			if (handler) {
				handler(draft, action);
			}
		});
	};
}
