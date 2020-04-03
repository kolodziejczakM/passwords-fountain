import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { PasswordEntity } from './passwordEntity.component';

describe('PasswordEntity', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<PasswordEntity />);

        expect(asFragment()).toMatchSnapshot();
    });
});
