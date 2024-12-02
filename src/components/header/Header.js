import './Header.css';
import { NavLink } from "react-router-dom";
import cartIcon from '../../assets/images/cart-icon1.png'


function Header(props) {

    function onSearchChange($e) {
        props.onSearchChange($e.target.value)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid mx-4">
                    <div className="mx-3">
                    <NavLink to='/'>
                            <img src="https://s3.ap-south-1.amazonaws.com/upcode-bucket-01/organization/1729661939483.jpeg" width={200}></img>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </NavLink>

                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item fw-medium">
                                <NavLink to='/' className='nav-link' >Home</NavLink>
                            </li>
                            <li className="nav-item fw-medium">
                                <NavLink to='/products' className='nav-link' >Products</NavLink>
                            </li>
                            <li className="nav-item fw-medium">
                                <NavLink to='/about us' className='nav-link' >About Us</NavLink>
                            </li>
                            <li className="nav-item fw-medium">
                                <NavLink to='/contact us' className='nav-link' >Contact Us</NavLink>
                            </li>
                        </ul>
                        <div className="my-2">
                            <form role="search">
                                <input className="form-control my-2" type="search" onChange={onSearchChange} placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                        <div className="ms-auto fs-5">
                            <NavLink to='/cart' className='nav-link btn btn-warning' ><img src={cartIcon} height={25} />Cart</NavLink>
                        </div>
                    </div>
                </div>
            </nav>



        </>
    );
}

export default Header;