import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Link from '@mui/material/Link';
import DialogTitle from '@mui/material/DialogTitle';

export default function MaxWidthDialog(props) {
  const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Link  onClick={handleClickOpen}>
      More 
      </Link>
      <Dialog
      open={open}
        onClose={handleClose}
      >
        <DialogTitle>{props.name}</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
              <div className="product-wrapper">
          <div className="img-size"><img src={props.img} width="100%" height="65%"  alt={props.name} /></div>
        
        <div className="product-info">
        <h2>Product details</h2><hr/>
          
          <h5>Brand: {props.brand}</h5>
          <span className='price'> ${props.price}</span>
          <div className="colors">
            Color: {props.color}
          </div>
          <p>
           {props.desc}
          </p>
        
        </div>
      </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
