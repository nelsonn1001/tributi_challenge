import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import PageHome from '@/src/app/presentation/pages/page_home/page'
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn().mockReturnValue('/'),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
}));
 
describe('PageHome', () => {
  it('case for PageHome', () => {
      const mockPush = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      
    });
    render(<PageHome />)
 
    const result = screen.getByText('continue');
    expect(result).toBeInTheDocument();

  })
})