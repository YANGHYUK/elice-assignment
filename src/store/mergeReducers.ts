export default function mergeReducers(reducers: any) {
	return function (state: any, action: any) {
		if (!state) {
			return reducers.reduce((acc: any, r: any) => ({ ...acc, ...r(state, action) }), {});
		}
		let nextState = state;
		for (const r of reducers) {
			nextState = r(nextState, action);
		}
		return nextState;
	};
}
