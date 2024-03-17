import { Formik, Field, Form ,ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../SearchBar/SearchBar.module.css"

import toast, { Toaster } from 'react-hot-toast';
export default function SearchBar({ onInput }) {
    const FeedbackSchema = Yup.object().shape({
  query: Yup.string().min(2, "Too Short!").max(50, "Too Long!")
});




    return (
        <Formik initialValues={{query:""}} validationSchema={FeedbackSchema} onSubmit={(values, actions) => {
            if (!values.query)  {
            return toast.error('I need to write something!')
            }
            onInput(values.query)
            actions.resetForm()
        }}>
            <Form className={css.form}>
                <Field autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"></Field>
                <ErrorMessage className={css.error} component="span" name="query"/>
                <button type="submit">Search</button>
                
                <Toaster/>
            </Form>
        </Formik>
    );
    
}