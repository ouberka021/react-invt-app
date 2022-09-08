import { useState } from 'react';
import { FormGroup, Stack, FormControl, InputLabel, Input, Button, styled, Typography, TextField } from '@mui/material';
import { addItem } from '../../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    price: '',
    qty: '',
    desc: '',
    brand: '',
    size: '',
    color: '',
    img: ''
}

const Container = styled(FormGroup)`
 width: 60%;
 padding: 50px;
 background: #EEEEEE;
 border-radius: 7px;
    margin: 1% 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`;

const AddItem = () => {
    const [item, setItem] = useState(initialValue);
    const { name, price, qty, desc, brand, size, color, img } = item;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const addItemDetails = async () => {
        await addItem(item);
        navigate('/allitems');
    }
    return (
        <Container >
            <Typography variant="h4">Add Items</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input color="primary" onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input color="primary" onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Quantity</InputLabel>
                <Input color="primary" onChange={(e) => onValueChange(e)} name='qty' value={qty} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Brand</InputLabel>
                <Input color="primary" onChange={(e) => onValueChange(e)} name='brand' value={brand} id="my-input" />
            </FormControl>
    
            <FormControl>
                <InputLabel htmlFor="my-input">Size</InputLabel>
                <Input color="primary" onChange={(e) => onValueChange(e)} name='size' value={size} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Color</InputLabel>
                <Input color="primary" onChange={(e) => onValueChange(e)} name='color' value={color} id="my-input" />
            </FormControl>
            <Stack spacing={4} >
                <Stack direction='row' spacing={4}>
                    <TextField label="Description"
                        onChange={(e) => onValueChange(e)}
                        name='desc'
                        value={desc}
                        variant="outlined"
                        fullWidth
                    />
                </Stack>
            </Stack>
            <FormControl>
                <InputLabel htmlFor="my-input">Image URL</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='img' value={img} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addItemDetails()}>Add Item</Button>
            </FormControl>
        </Container>
    )
}
export default AddItem;