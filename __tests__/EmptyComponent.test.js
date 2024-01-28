import React from 'react';
import { render } from '@testing-library/react-native';
import ListEmptyBasket from '../src/components/ListEmptyBasket';

describe('ListEmptyBasket Component', () => {
  it('should render correctly', () => {
    const { getByText, getByTestId } = render(<ListEmptyBasket />);
    const emptyText1 = getByText('Sepetin şuan bomboş');
    const emptyText2 = getByText('niye hiçbir şey almadın :(');
    const animation = getByTestId('animation'); 
    expect(emptyText1).toBeTruthy();
    expect(emptyText2).toBeTruthy();
    expect(animation).toBeTruthy();
  });
});
