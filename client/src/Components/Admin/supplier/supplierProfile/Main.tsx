import  { useEffect, useState  } from 'react';
import {
    Box,
    CircularProgress,

} from '@mui/material';
//import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
//import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import { fetchSupplier } from '../../../api/admin';
import { useAppDispatch, useAppSelector } from '../../../../app/store/configureStore';
import { updateSupplierField, EditInitialSupplierState } from '../supplierSlice';
import ItemsSection from './ItemsSection';

import InfoSection from './InfoSection';
import GeneralInfos from './GeneralInfos';
import ContactInfoSection from './ContactPerson/ContactInfoSection';

interface SupplierProfileProps {
    id: number;
}

const SupplierProfile = ({ id }: SupplierProfileProps) => {
    const dispatch = useAppDispatch();
    const supplier = useAppSelector((state) => state.AddSupplier.supplier);


    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getSupplier = async () => {
            try {
                const supplier = await fetchSupplier(id);
                console.log(supplier);
                dispatch(EditInitialSupplierState(supplier));
                console.log(supplier);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch suppliers');
                setLoading(false);
            }
        };

        getSupplier();
    }, [id, dispatch]);

    useEffect(() => {
        const balance = (supplier.cr || 0) - (supplier.db || 0);
        dispatch(updateSupplierField({ name: 'balance', value: balance }));
    }, [supplier.cr, supplier.db, dispatch]);




    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Box>{error}</Box>;
    }


    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <GeneralInfos supplier={supplier}></GeneralInfos>
      
      <InfoSection supplier={supplier}></InfoSection>

<ItemsSection supplier={supplier}></ItemsSection>
           <ContactInfoSection contactPersons={supplier.contactPersons}></ContactInfoSection>
        </Box>
    );
};

export default SupplierProfile;
