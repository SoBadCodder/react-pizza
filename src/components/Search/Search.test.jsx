import { render, screen } from '@testing-library/react';
import Search from './index';
import * as reduxHooks from 'react-redux'
import userEvent from '@testing-library/user-event';
//import * as actions from '../../redux/Slices/PizzaSlice'

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

describe('Search component', () => {
  it('Search renders', () => {
    mockedDispatch.mockResolvedValue()
    render(<Search />)

    const searchElement = screen.getByPlaceholderText('Поиск пиццы ...')
    expect(searchElement).toBeInTheDocument()
  });

  it('Void search dont show clear button', () => {
    mockedDispatch.mockResolvedValue()
    render(<Search />)

    const searchElement = screen.queryByTestId('button')
    expect(searchElement).toBeNull()
  });

  it('Search clear button visible', () => {
    mockedDispatch.mockResolvedValue()
    render(<Search />)

    const inputElement = screen.getByRole('textbox')
    userEvent.type(inputElement, 'Pizza Mario')

    const searchElement = screen.queryByTestId('button')
    expect(searchElement).toBeInTheDocument()
  });

  it('Search user input works', () => {
    mockedDispatch.mockResolvedValue()
    render(<Search />)

    const inputElement = screen.getByRole('textbox')
    userEvent.type(inputElement, 'Pizza Mario')
    expect(screen.getByDisplayValue(/Pizza Mario/)).toBeInTheDocument()
  });
})