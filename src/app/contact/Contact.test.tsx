import React from 'react';
import {render, screen} from '@testing-library/react';
import Contact from './Contact';

test('renders learn react link', () => {
	render(<Contact />);
	const contact = screen.getByText(/contact!/i);
	expect(contact).toBeInTheDocument();
});
