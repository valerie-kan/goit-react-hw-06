import { ErrorMessage, Field, Form, Formik } from "formik";
import css from './ContactForm.module.css'
import * as Yup from 'yup';

const initialValues = {
    name: '',
    number: ''
}

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Must be in format XXX-XX-XX").required("Required"),
})


const ContactForm = ({addNewContact}) => {
    const addContact = (values, actions) => {
        addNewContact(values);
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={addContact} validationSchema={validationSchema}>
            <Form className={css.form}>
                <label className={css.formLabel}>Name
                    <Field className={css.formField} type='text' name='name' />
                    <ErrorMessage className={css.errorMessage} name='name' component='span'/>
                </label>
                <label className={css.formLabel}>Number
                    <Field className={css.formField} type='text' name='number' />
                    <ErrorMessage className={css.errorMessage} name='number' component='span'/>
                </label>
                <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm