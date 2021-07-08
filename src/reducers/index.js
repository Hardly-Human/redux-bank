const reducer = (state, action) => {
	switch (action.type) {
		case "WITHDRAW":
			const remaining = state.totalAmount - action.amount;
			return {
				...state,
				totalAmount: remaining,
			};

		default:
			return state;
	}
};

export default reducer;
