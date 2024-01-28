import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainCard from '../src/components/MainCard';

describe('MainCard Component', () => {
  it('should render correctly', () => {
    const mockTitle = 'Sample Title';
    const mockImageSource = 'https://example.com/sample-image.jpg';
    const mockDescription = 'Sample Description';
    const mockId = 1;
    const mockAddFav = jest.fn();
    const mockIsFavorite = true;
    const mockOnPress = jest.fn();
    const mockAddToBasket = jest.fn();

    const { getByText, getByTestId } = render(
      <MainCard
        title={mockTitle}
        imageSource={mockImageSource}
        description={mockDescription}
        id={mockId}
        addFav={mockAddFav}
        isFavorite={mockIsFavorite}
        onPress={mockOnPress}
        addToBasket={mockAddToBasket}
      />
    );
    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(mockDescription)).toBeTruthy();

    // Simulate button press actions if needed
    fireEvent.press(getByTestId('favoriteButton'));
    fireEvent.press(getByTestId('addToBasketButton'));
  });
});
