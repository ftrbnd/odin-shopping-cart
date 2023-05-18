import React from 'react'
import { render } from '@testing-library/react'
import { CartContext } from '../context/CartContext'
import { BrowserRouter } from 'react-router-dom';

const cartRender = (ui, cart) =>
    render(<CartContext.Provider value={cart}>{ui}</CartContext.Provider>, {
        wrapper: BrowserRouter
    });

// re-export everything
export * from '@testing-library/react'

// override render method
export { cartRender }