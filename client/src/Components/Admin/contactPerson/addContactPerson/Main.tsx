import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { emptyContactPeron, ContactPersonDto } from "../../../../models/contactPerson";
import { Button, Container, Grid, Typography } from "@mui/material";
import ContactPersonForm from "./ContactPersonForm";
import useCustomSnackbar from "../../../hooks/snackbar/useCustomSnackbar";
import { addContactPerson } from "../../../api/admin";

const AddContactPerson = () => {
    const { openSnackbar, SnackbarComponent } = useCustomSnackbar();

    const methods = useForm<ContactPersonDto>({
        defaultValues: emptyContactPeron
    });

    const onSubmit: SubmitHandler<ContactPersonDto> = async (data: ContactPersonDto) => {
        console.log(data);
        const result = await addContactPerson(data);

        if (result.success) {
            openSnackbar('success', 'Contact Added Successfully');
            methods.reset(emptyContactPeron);
        } else {
            openSnackbar('error', result.message);
        }
    };
    return (
        <FormProvider {...methods}>
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    Add New Contact Person
                </Typography>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <ContactPersonForm control={methods.control}></ContactPersonForm>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" >
                            Add Contact
                        </Button>
                    </Grid>
                    {SnackbarComponent}

                </form>
            </Container>
        </FormProvider>
    );

}

export default AddContactPerson;