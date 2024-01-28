import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../src/components/Header';

describe('Header Component', () => {
  it('should render correctly', () => {
    const { getByText, queryByTestId } = render(
      <NavigationContainer>
        <Header title="Test Title" goBackActive={true} />
      </NavigationContainer>
    );

    // Geri git düğmesini kontrol edin
    const backButton = queryByTestId('back-button');
    expect(backButton).toBeDefined();
  });

  it('should not render back button when goBackActive is false', () => {
    const { queryByTestId } = render(
      <NavigationContainer>
        <Header title="Test Title" goBackActive={false} />
      </NavigationContainer>
    );

    // Geri git düğmesinin olmadığını kontrol edin
    const backButton = queryByTestId('back-button');
    expect(backButton).toBeNull();
  });

  it('should call navigation.goBack() when back button is pressed', () => {
    const navigationMock = { goBack: jest.fn() };
    const { getByTestId } = render(
      <NavigationContainer>
        <Header title="Test Title" goBackActive={true} navigation={navigationMock} />
      </NavigationContainer>
    );

    // Geri git düğmesini bulun ve üzerine tıklayın
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);

    // navigation.goBack() fonksiyonunun çağrıldığını kontrol edin
    expect(navigationMock.goBack).toHaveBeenCalledTimes(1);
  });
});
