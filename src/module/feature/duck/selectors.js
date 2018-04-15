export const customer = {
	getCustomer: state => state.customerReducer,
};

export const customerDataSource = {
	getCreateCustomerStatus: state => ({
		...state.customerCreateReducer,
	}),
	getDeleteCustomerStatus: state => ({
		...state.customerDeleteReducer,
	}),
	getDetailsCustomer: state => state.customerDetailsReducer.customer,
	getDetailsCustomerStatus: state => ({
		failure: state.customerDetailsReducer.failure,
		isLoaded: state.customerDetailsReducer.isLoaded,
		isLoading: state.customerDetailsReducer.isLoading,
	}),
	getEditCustomerStatus: state => ({
		...state.customerEditReducer,
	}),
	getListCustomers: state => state.customerListReducer.customers,
	getListCustomersStatus: state => ({	
		failure: state.customerListReducer.failure,
		isLoaded: state.customerListReducer.isLoaded,
		isLoading: state.customerListReducer.isLoading,
	}),
};
