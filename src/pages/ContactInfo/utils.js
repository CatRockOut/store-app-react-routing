import * as yup from 'yup';

export const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup
        .string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
        .email('Invalid email')
        .required('Email is required'),
    tel: yup
        .string()
        .matches(
            /^\+?\d{1,3}[-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
            'Invalid phone number format'
        )
        .required('Phone number is required'),
});