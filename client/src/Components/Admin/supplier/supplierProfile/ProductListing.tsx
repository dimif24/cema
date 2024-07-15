import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Supplier } from '../../../../models/supplier';

interface SupplierProductsListingProps {
    supplier: Supplier;
}

const SupplierProductsListing = ({ supplier }: SupplierProductsListingProps) => {
    return (
        <Grid container spacing={2}>
            {supplier.products.map((product) => (
                <Grid item xs={12} sm={12} md={6} lg={4} key={product.id}>
                    <Card sx={{ display: 'flex', height: '100%' }}>
                        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                <Avatar alt={product.name} src={product.variants[0].pictureUrl} sx={{ marginRight: '16px' }} />
                                <Typography component="div" variant="h6">
                                    {product.name}
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary" component="div">
                                <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Colors: </span>
                                {product.variants.map(v => v.color).join(', ')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="div">
                                <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Qty: </span>
                                {product.variants.map(v => v.quantityInStock).join(', ')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default SupplierProductsListing;