import { useRouter } from "next/router";
import propTypes from 'prop-types';

const NavItem = ({item}) => {
    const router = useRouter();
    return <>{router.pathname === "/" ? item : false}</>;
}

NavItem.propTypes = {
    item: propTypes.string,
};

export default NavItem;
