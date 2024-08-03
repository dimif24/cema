import { FormProvider, useForm } from "react-hook-form";
import { ContactPerson } from "../../../../models/contactPerson";

const AddContactPerson = () => {
    const methods = useForm<ContactPerson>({
        defaultValues: emptySupplier
    });
    return (
        <FormProvider {...methods}>
        </FormProvider>

}

export default AddContactPerson;