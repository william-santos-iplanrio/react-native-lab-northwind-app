import * as types from './types';

export const customer = {
  assign: (object) => ({ type: types.CUSTOMER.ASSIGN, payload: { object } }),
  clear: () => ({ type: types.CUSTOMER.CLEAR }),  
  setCustomerId: text => ({ type: types.CUSTOMER.SET_CUSTOMER_ID, payload: { text } }),  
  setCompanyName: text => ({ type: types.CUSTOMER.SET_COMPANY_NAME, payload: { text } }),  
  setContactTitle: text => ({ type: types.CUSTOMER.SET_CONTACT_TITLE, payload: { text } }),  
  setContactName: text => ({ type: types.CUSTOMER.SET_CONTACT_NAME, payload: { text } }),  
  setAddress: text => ({ type: types.CUSTOMER.SET_ADDRESS, payload: { text } }),  
  setCity: text => ({ type: types.CUSTOMER.SET_CITY, payload: { text } }),  
  setPostalCode: text => ({ type: types.CUSTOMER.SET_POSTAL_CODE, payload: { text } }),  
  setCountry: text => ({ type: types.CUSTOMER.SET_COUNTRY, payload: { text } }),  
  setPhone: text => ({ type: types.CUSTOMER.SET_PHONE, payload: { text } }),  
  setFax: text => ({ type: types.CUSTOMER.SET_FAX, payload: { text } }),  
};

export const customerRequest = {
  create: () => ({ type: types.CUSTOMER_CREATE.REQUEST }),  
  createSuccess: () => ({ type: types.CUSTOMER_CREATE.SUCCESS }),  
  createFailure: failure => ({ type: types.CUSTOMER_CREATE.FAILURE, payload: { failure } }),  
  createReset: () => ({ type: types.CUSTOMER_CREATE.RESET }),  
  delete: () => ({ type: types.CUSTOMER_DELETE.REQUEST }), 
  deleteSuccess: () => ({ type: types.CUSTOMER_DELETE.SUCCESS }),
  deleteFailure: failure => ({ type: types.CUSTOMER_DELETE.FAILURE, payload: { failure } }),
  deleteReset: () => ({ type: types.CUSTOMER_DELETE.RESET }),
  details: () => ({ type: types.CUSTOMER_DETAILS.REQUEST }),  
  detailsSuccess: resource => ({ type: types.CUSTOMER_DETAILS.SUCCESS, payload: { resource } }),
  detailsFailure: failure => ({ type: types.CUSTOMER_DETAILS.FAILURE, payload: { failure } }),    
  detailsReset: () => ({ type: types.CUSTOMER_DETAILS.RESET }),  
  edit: () => ({ type: types.CUSTOMER_EDIT.REQUEST }),  
  editSuccess: () => ({ type: types.CUSTOMER_EDIT.SUCCESS }),  
  editFailure: failure => ({ type: types.CUSTOMER_EDIT.FAILURE, payload: { failure } }),    
  editReset: () => ({ type: types.CUSTOMER_EDIT.RESET }),  
  list: () => ({ type: types.CUSTOMER_LIST.REQUEST }),
  listSuccess: resources => ({ type: types.CUSTOMER_LIST.SUCCESS, payload: { resources } }),
  listFailure: failure => ({ type: types.CUSTOMER_LIST.FAILURE, payload: { failure } }),
  listReset: () => ({ type: types.CUSTOMER_LIST.RESET }),
};
