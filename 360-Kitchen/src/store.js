import {configureStore} from '@reduxjs/toolkit';
import cartsystem from './redux/cartsystem';

const store=configureStore({
    reducer:{
    cart:cartsystem
    }
})
export default store;