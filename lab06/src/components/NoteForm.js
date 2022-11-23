import { useState } from 'react';
import { useFormik } from 'formik';

const NoteForm = () => {
    const [notes, setNotes] = useState([]);
    const resetValuesHandler = () => {
        formik.resetForm();
    };

    const formik = useFormik({
        initialValues: {
            guitarName: '',
            note: ''
        },
        onSubmit: (values) => {
            console.log(values);
            setNotes(oldState => [...oldState, values])
            formik.resetForm();
        }
    });
    return (
        <form>
            <input name='guitarName' type='text' placeholder='Guitar name' onChange={formik.handleChange}></input>
            <input name='note' type='text' placeholder='Note body' onChange={formik.handleChange}></input>
            <button type='submit'>Add note</button>
        </form>
    )
}
export default NoteForm;