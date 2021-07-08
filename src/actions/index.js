const withdrawMoney = (amount) => {
	return {
		type: "WITHDRAW",
		amount: amount,
	};
};

export default withdrawMoney;
