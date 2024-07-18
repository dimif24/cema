import  { useCallback, useEffect, useState  } from 'react';
import {
    Box,
    CircularProgress,

} from '@mui/material';
//import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
//import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import { fetchSupplier } from '../../../api/admin';
import ItemsSection from './ItemsSection';

import InfoSection from './InfoSection';
import GeneralInfos from './GeneralInfos';
import ContactInfoSection from './ContactPerson/ContactInfoSection';
import { FormProvider, useForm } from 'react-hook-form';
import { emptySupplier, Supplier } from '../../../../models/supplier';
import { useParams } from 'react-router-dom';


const SupplierProfile = () => {
    const { id } = useParams<{ id: string }>();

    const methods = useForm<Supplier>({
        defaultValues: emptySupplier
    });

    const {  setValue,watch } = methods;


    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getSupplier = useCallback(async () => {
        try {
            setLoading(true);
            const supplier = await fetchSupplier(parseInt(id!, 10));
            console.log(supplier);
            Object.keys(supplier).forEach((key) => {
                setValue(key as keyof Supplier, supplier[key as keyof Supplier]);
            });
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch suppliers');
            setLoading(false);
        }
    }, [id, setValue]);


    useEffect(() => {
        
        getSupplier();
    }, [getSupplier]);

    useEffect(() => {
        const cr = watch('cr') || 0;
        const db = watch('db') || 0;
        const balance = cr - db;

        setValue('balance', balance);
    }, [watch, setValue]);




    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Box>{error}</Box>;
    }


    return (
        <FormProvider {...methods}>

        <Box sx={{ flex: 1, width: '100%' }}>
            <GeneralInfos ></GeneralInfos>
      
      <InfoSection onUpdateSuccess={getSupplier} ></InfoSection>

<ItemsSection ></ItemsSection>
           <ContactInfoSection ></ContactInfoSection>
         

        </Box>
        </FormProvider>

    );
};

export default SupplierProfile;
