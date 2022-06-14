import { Link } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  to: string;
}

const LinkCustomized = ({ children, to }: IProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: '#2d2d2d' }}>
      {children}
    </Link>
  )
}

export default LinkCustomized;