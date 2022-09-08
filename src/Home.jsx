import * as React from 'react';
import { useState, useEffect } from 'react';
import { getItems } from './Service/api';
import Dial from './Dial';
import { Button } from '@mui/material';

const Home = () => {
    
    const [items, setItems] = useState([]);
    useEffect(() => {
        getAllItems();
    }, []);

    const getAllItems = async () => {
        let response = await getItems();
        setItems(response.data);
    }


    return (

        <div className='cont'>
    
      <dl className="dictionary">
                            {items.map((item) => (
                                <div className="term">
                                    <h1><span> {item.name.slice(0, 10)}</span></h1>
                                    <dt key={item._id}>

                                        <span className="emoji" role="img" aria-label="Tense Biceps">
                                            <div className='img_card' >  <img src={item.img} width="190px" alt={item.name} height="auto" /></div>
                                        </span>
                                        <p><span> ${item.price}</span></p>
                                    </dt>
                                    <dd>
                                        <span>{item.desc.slice(0, 40)} ... </span>  <Dial
                                            img={item.img}
                                            name={item.name}
                                            desc={item.desc}
                                            price={item.price}
                                            brand={item.brand}
                                            size={item.size}
                                            color={item.color}
                                        />

                                    </dd>
                                    <div className='Button'><Button variant="outlined">Order Now</Button></div>
                                </div>
                            ))}
                        </dl>

      </div>
     
    
    )
}

export default Home;








