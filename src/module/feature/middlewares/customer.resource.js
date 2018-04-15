const RESOURCE_URL = 'http://localhost:3000/api/Customers';
const RESOURCE_REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const create = async (resource) => await fetch(RESOURCE_URL, {
  method: 'POST',
  headers: RESOURCE_REQUEST_HEADERS,
  body: JSON.stringify(resource)
});

export const destroyById = async (id) => await fetch(`${RESOURCE_URL}/${id}`, {
  method: 'DELETE',
  headers: RESOURCE_REQUEST_HEADERS,
});

export const find = async () => await fetch(RESOURCE_URL, {
  method: 'GET',
  headers: RESOURCE_REQUEST_HEADERS,
});

export const findById = async (id) => await fetch(`${RESOURCE_URL}/${id}`, {
  method: 'GET',
  headers: RESOURCE_REQUEST_HEADERS,
});

export const search = async (params) => 
  await fetch(`${RESOURCE_URL}?filter={"where": ${params}}`, {
    method: 'GET',
    headers: RESOURCE_REQUEST_HEADERS,
  }
);

export const update = async (resource) => await fetch(RESOURCE_URL, {
  method: 'PUT',
  headers: RESOURCE_REQUEST_HEADERS,
  body: JSON.stringify(resource)
});
