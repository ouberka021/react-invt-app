import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getItems, deleteItem } from '../../Service/api';
import { Link } from 'react-router-dom';
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#16A2B9',
    borderColor: '#53b2c1',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
    color: '#000000',
      backgroundColor: '#EEEEEE',
      borderColor: '#fdfdfd',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
//   const ColorButton = styled(Button)(({ theme }) => ({
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//       backgroundColor: purple[700],
//     },
//   }));
const StyledTable = styled(Table)`
    width: 98%;
    margin: 30px auto; 
    background: #ffffff;
`;

const THead = styled(TableRow)`

    & > th {
        font-size: 1rem;
        background: #282D4F;
        color: #FFFCEF;
    }
`;
const TRow = styled(TableRow)`
    & > td{
        font-size: 14px
    }
`;

const AllItems = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        getAllItems();
    }, []);

    const deleteItemData = async (id) => {
        await deleteItem(id);
        getAllItems();
    }
    const getAllItems = async () => {
        let response = await getItems();
        setItems(response.data);
    }

    return (
    
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {items.map((item) => (
                    <TRow key={item._id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>${item.price}</TableCell>
                        <TableCell>{item.qty}</TableCell>
                        <TableCell>{item.desc.slice(0, 20)} ...</TableCell>
                        <TableCell>{item.brand}</TableCell>
                        <TableCell>{item.size}</TableCell>
                        <TableCell>{item.color}</TableCell>
                        <TableCell><img src={item.img} width="60px" height="auto" alt={item.name} /></TableCell>
                        <TableCell width='200px'>
                            <BootstrapButton variant="contained" style={{marginRight:10}} component={Link} to={`/edititem/${item._id}`}>Edit</BootstrapButton>
                            <BootstrapButton variant="contained" onClick={() => deleteItemData(item._id)}>Delete</BootstrapButton> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
   
    )
}

export default AllItems;