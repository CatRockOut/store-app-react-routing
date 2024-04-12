import * as yup from 'yup';

export const schema = yup.object().shape({
    address: yup.string().required('Address is required'),
    apartment: yup.string(),
    city: yup.string().required('City is required'),
    country: yup.string().required('Country/Region is required'),
    state: yup.string().required('State is required'),
    zipCode: yup
        .string()
        .required('ZIP code is required')
        .matches(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format'),
});