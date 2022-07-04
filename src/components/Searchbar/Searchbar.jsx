import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { StyledForm, Input, Button, ErrorText, Header } from './Searchbar.styled';
import {BsSearch} from 'react-icons/bs';

const schema = yup.object().shape({
    searchText: yup.string().min(3).trim().required(),
})

export const Searchbar = ({onSubmit})=>{

    const handleSumbmit = (values, actions) => {
        const searchName = values.searchText.trim();
        
        onSubmit(searchName)
        actions.resetForm();
    };

    return (
    <Header as='header'>
        <Formik
        initialValues={{ searchText: '', }}
        validationSchema={schema}
        onSubmit={handleSumbmit}
        >
            <StyledForm autoComplete="off">
                <Button type="submit">
                    <BsSearch size={22}/>
                {/* <span >Search</span> */}
                </Button>

                <Input
                type="text"
                name='searchText'
                autoFocus
                placeholder="Search images and photos"
                />
                <ErrorMessage component={ErrorText} name='searchText'/>
            </StyledForm>
        </Formik>
    </Header>
    )
};

