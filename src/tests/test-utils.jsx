import React from 'react'
import { render } from '@testing-library/react'
import { CartContext } from '../RouteSwitch';
import { BrowserRouter } from 'react-router-dom';

const customRender = (ui, cart, setCart) =>
    render(<CartContext.Provider value={[cart, setCart]}>{ui}</CartContext.Provider>, {
        wrapper: BrowserRouter
    });

// re-export everything
export * from '@testing-library/react';

export { customRender };