import * as types from './types';


const INITIAL_STATE = {
  CUSTOMER: { 
    customerId: '', 
    companyName: '', 
    contactTitle: '', 
    contactName: '', 
    address: '', 
    city: '', 
    postalCode: '', 
    country: '', 
    phone: '', 
    fax: '',
  },
  CUSTOMER_CREATE: { isSubmitting: false, isSubmitted: false, failure: null },
  CUSTOMER_DELETE: { isSubmitting: false, isSubmitted: false, failure: null },
  CUSTOMER_DETAILS: { customer: null, isLoading: false, isLoaded: false, failure: null },
  CUSTOMER_EDIT: { isSubmitting: false, isSubmitted: false, failure: null },
  CUSTOMER_LIST: { customers: [], isLoading: false, isLoaded: false, failure: null },
};

export const customerReducer = (state = INITIAL_STATE.CUSTOMER, action) => {
  switch (action.type) {
    case types.CUSTOMER.ASSIGN:
      return {
        ...state,
        ...action.payload.object,
      };
    case types.CUSTOMER.CLEAR:
      return INITIAL_STATE.CUSTOMER;
    case types.CUSTOMER.SET_CUSTOMER_ID:
      return {
        ...state,
        customerId: action.payload.text,
      };
    case types.CUSTOMER.SET_COMPANY_NAME:
      return {
        ...state,
        companyName: action.payload.text,
      };
    case types.CUSTOMER.SET_CONTACT_TITLE:
      return {
        ...state,
        contactTitle: action.payload.text,
      };
    case types.CUSTOMER.SET_CONTACT_NAME:
      return {
        ...state,
        contactName: action.payload.text,
      };
    case types.CUSTOMER.SET_ADDRESS:
      return {
        ...state,
        address: action.payload.text,
      };
    case types.CUSTOMER.SET_CITY:
      return {
        ...state,
        city: action.payload.text,
      };
    case types.CUSTOMER.SET_POSTAL_CODE:
      return {
        ...state,
        postalCode: action.payload.text,
      };
    case types.CUSTOMER.SET_COUNTRY:
      return {
        ...state,
        country: action.payload.text,
      };
    case types.CUSTOMER.SET_PHONE:
      return {
        ...state,
        phone: action.payload.text,
      };
    case types.CUSTOMER.SET_FAX:
      return {
        ...state,
        fax: action.payload.text,
      };
    default:
      return state;
  }
};

export const customerCreateReducer = (state = INITIAL_STATE.CUSTOMER_CREATE, action) => {
  switch (action.type) {
    case types.CUSTOMER_CREATE.REQUEST:
      return {
        ...INITIAL_STATE.CUSTOMER_CREATE,
        isSubmitting: true
      };
    case types.CUSTOMER_CREATE.SUCCESS:
      return {
        ...INITIAL_STATE.CUSTOMER_CREATE,
        isSubmitted: true,
      };
    case types.CUSTOMER_CREATE.FAILURE:
      return {
        ...INITIAL_STATE.CUSTOMER_CREATE,
        failure: action.payload.failure,
      };
    case types.CUSTOMER_CREATE.RESET:
      return {
        ...INITIAL_STATE.CUSTOMER_CREATE,
      };
    default:
      return state;
  }
};

export const customerDeleteReducer = (state = INITIAL_STATE.CUSTOMER_DELETE, action) => {
  switch (action.type) {
    case types.CUSTOMER_DELETE.REQUEST:
      return {
        ...INITIAL_STATE.CUSTOMER_DELETE,
        isSubmitting: true,
      };
    case types.CUSTOMER_DELETE.SUCCESS:
      return {
        ...INITIAL_STATE.CUSTOMER_DELETE,
        isSubmitted: true,
      };
    case types.CUSTOMER_DELETE.FAILURE:
      return {
        ...INITIAL_STATE.CUSTOMER_DELETE,
        failure: action.payload.failure,
      };
    case types.CUSTOMER_DELETE.RESET:
      return {
        ...INITIAL_STATE.CUSTOMER_DELETE
      };      
    default:
      return state;
  }
};

export const customerDetailsReducer = (state = INITIAL_STATE.CUSTOMER_DETAILS, action) => {
  switch (action.type) {
    case types.CUSTOMER_DETAILS.REQUEST:
      return {
        ...INITIAL_STATE.CUSTOMER_DETAILS,
        isLoading: true,
      };
    case types.CUSTOMER_DETAILS.SUCCESS:
      return {
        ...INITIAL_STATE.CUSTOMER_DETAILS,
        isLoaded: true,
        customer: action.payload.resource,
      };
    case types.CUSTOMER_DETAILS.FAILURE:
      return {
        ...INITIAL_STATE.CUSTOMER_DETAILS,
        failure: action.payload.failure,
      };
    case types.CUSTOMER_DETAILS.RESET:
      return {
        ...INITIAL_STATE.CUSTOMER_DETAILS,
      };      
    default:
      return state;
  }
};

export const customerEditReducer = (state = INITIAL_STATE.CUSTOMER_EDIT, action) => {
  switch (action.type) {
    case types.CUSTOMER_EDIT.REQUEST:
      return {
        ...INITIAL_STATE.CUSTOMER_EDIT,
        isSubmitting: true,
      };
    case types.CUSTOMER_EDIT.SUCCESS:
      return {
        ...INITIAL_STATE.CUSTOMER_EDIT,
        isSubmitted: true,
      };
    case types.CUSTOMER_EDIT.FAILURE:
      return {
        ...INITIAL_STATE.CUSTOMER_EDIT,
        failure: action.payload.failure,
      };
    case types.CUSTOMER_EDIT.RESET:
      return {
        ...INITIAL_STATE.CUSTOMER_EDIT,
      };      
    default:
      return state;
  }
};

export const customerListReducer = (state = INITIAL_STATE.CUSTOMER_LIST, action) => {
  switch (action.type) {
    case types.CUSTOMER_LIST.REQUEST:
      return {
        ...INITIAL_STATE.CUSTOMER_LIST,
        isLoading: true
      };
    case types.CUSTOMER_LIST.SUCCESS:
      return {
        ...INITIAL_STATE.CUSTOMER_LIST,
        isLoaded: true,
        customers: action.payload.resources,
      };
    case types.CUSTOMER_LIST.FAILURE:
      return {
        ...INITIAL_STATE.CUSTOMER_LIST,
        failure: action.payload.failure,
      };
    case types.CUSTOMER_LIST.RESET:
      return {
        ...INITIAL_STATE.CUSTOMER_LIST,
      };      
    default:
      return state;
  }
};
