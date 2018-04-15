import * as actions from './actions';
import * as middlewares from '../middlewares';

export const customer = {
  assign: (object) => dispatch => {
    dispatch(actions.customer.assign(object));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  clear: () => dispatch => {
    dispatch(actions.customer.clear());
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setCustomerId: text => dispatch => {
    dispatch(actions.customer.setCustomerId(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setCompanyName: text => dispatch => {
    dispatch(actions.customer.setCompanyName(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setContactTitle: text => dispatch => {
    dispatch(actions.customer.setContactTitle(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setContactName: text => dispatch => {
    dispatch(actions.customer.setContactName(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setAddress: text => dispatch => {
    dispatch(actions.customer.setAddress(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setCity: text => dispatch => {
    dispatch(actions.customer.setCity(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setPostalCode: text => dispatch => {
    dispatch(actions.customer.setPostalCode(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setCountry: text => dispatch => {
    dispatch(actions.customer.setCountry(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setPhone: text => dispatch => {
    dispatch(actions.customer.setPhone(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
  setFax: text => dispatch => {
    dispatch(actions.customer.setFax(text));
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
  },
};

/* eslint no-underscore-dangle: ["error", { "allow": ["_bodyText"] }]*/
export const customerDataSource = {
  createCustomer: object => dispatch => new Promise((resolve, reject) => {
    dispatch(actions.customerRequest.create());
    middlewares.customerResource.create(object)
      .then(res => {
        if (res.ok) {
          res.json().then(resource => {
            dispatch(actions.customerRequest.createSuccess(resource));
            resolve(resource);
          });
        } else {
          const err = JSON.parse(res._bodyText).error;
          dispatch(actions.customerRequest.createFailure(err.message));
          reject(err);
        }
      })
      .catch(err => {
        dispatch(actions.customerRequest.createFailure(err.message));
        reject(err);
      });
  }),
  deleteCustomer: id => dispatch => new Promise((resolve, reject) => {
    dispatch(actions.customerRequest.delete());
    middlewares.customerResource.destroyById(id)
      .then(res => {
        if (res.ok) {
          res.json().then(result => {
            if (result.count > 0) {
              dispatch(actions.customerRequest.deleteSuccess(result));
              resolve(result);
            } else {
              const message = `${result.count} record(s) affected.`;
              dispatch(actions.customerRequest.deleteFailure(message));
              reject({ count: result.count, message });
            }
          });
        } else {
          const err = JSON.parse(res._bodyText).error;
          dispatch(actions.customerRequest.deleteFailure(err.message));
          reject(err.message);
        }
      })
      .catch(err => {
        dispatch(actions.customerRequest.deleteFailure(err.message));
        reject(err.message);
      });
  }),
  updateCustomer: object => dispatch => new Promise((resolve, reject) => {
    dispatch(actions.customerRequest.edit());
    middlewares.customerResource.update(object)
      .then(res => {
        if (res.ok) {
          res.json().then(resource => {
            dispatch(actions.customerRequest.editSuccess(resource));
            resolve(resource);
          });
        } else {
          const err = JSON.parse(res._bodyText).error;
          dispatch(actions.customerRequest.editFailure(err.message));
          reject(err);
        }
      })
      .catch(err => {
        dispatch(actions.customerRequest.editFailure(err.message));
        reject(err);
      });
  }),
  fetchDetailsCustomer: id => dispatch => new Promise((resolve, reject) => {
    dispatch(actions.customerRequest.details());
    middlewares.customerResource.findById(id)
      .then(res => {
        if (res.ok) {
          res.json().then(resource => {
            dispatch(actions.customerRequest.detailsSuccess(resource));
            resolve(resource);
          });
        } else {
          const err = JSON.parse(res._bodyText).error;
          dispatch(actions.customerRequest.detailsFailure(err.message));
          reject(err);
        }
      })
      .catch(err => {
        dispatch(actions.customerRequest.detailsFailure(err.message));
        reject(err);
      });
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
    dispatch(actions.customerRequest.deleteReset());
  }),
  fetchListCustomers: () => dispatch => new Promise((resolve, reject) => {
    dispatch(actions.customerRequest.list());
    middlewares.customerResource.find()
      .then(res => {
        if (res.ok) {
          res.json().then(resources => {
            dispatch(actions.customerRequest.listSuccess(resources));
            resolve(resources);
          });
        } else {
          const err = JSON.parse(res._bodyText).error;
          dispatch(actions.customerRequest.listFailure(err.message));
          reject(err);
        }
      })
      .catch(err => {
        dispatch(actions.customerRequest.listFailure(err.message));
        reject(err);
      });
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
    dispatch(actions.customerRequest.deleteReset());
  }),
  fetchSearchCustomers: params => dispatch => new Promise((resolve, reject) => {
    dispatch(actions.customerRequest.list());
    middlewares.customerResource.search(params)
      .then(res => {
        if (res.ok) {
          res.json().then(resources => {
            dispatch(actions.customerRequest.listSuccess(resources));
            resolve(resources);
          });
        } else {
          const err = JSON.parse(res._bodyText).error;
          dispatch(actions.customerRequest.listFailure(err.message));
          reject(err);
        }
      })
      .catch(err => {
        dispatch(actions.customerRequest.listFailure(err.message));
        reject(err);
      });
    dispatch(actions.customerRequest.createReset());
    dispatch(actions.customerRequest.editReset());
    dispatch(actions.customerRequest.deleteReset());
  }),
};
