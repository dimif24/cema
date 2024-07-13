import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Supplier } from '../../../../models/supplier';
interface SupplierProductsListingProps{
    supplier:Supplier;
}
 const SupplierProductsListing=({supplier}:SupplierProductsListingProps)=> {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {supplier.products.map((product)=>(
                            <React.Fragment key={product.id}>

      <ListItem alignItems="flex-start" key={product.id}>
      {/* <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="" />
      </ListItemAvatar> */}
      <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {product.id}
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    </React.Fragment>

        )
    
    )}

    </List>
  );
}
export default SupplierProductsListing;