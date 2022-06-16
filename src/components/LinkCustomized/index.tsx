import { Link } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  to: string;
  color?: string;
}

const LinkCustomized = ({ children, to, color }: IProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: color ? color : '#2d2d2d' }}>
      {children}
    </Link>
  )
}

export default LinkCustomized;