import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>Free shipping over 300.000d & Free returns</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href="tel:19008198">1900.8198</a></p>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h1 className='mb-0'>
                                <Link to="/" className='text-white'>Digitic.</Link>
                            </h1>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className='form-control py-2'
                                    placeholder='Search Products Here...'
                                    aria-label='Search Products Here...'
                                    aria-describedby='basic-addon2'
                                />
                                <span className="input-group-text py-2" id="basic-addon2">
                                    <BsSearch />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-link d-flex align-items-center justify-content-between">
                                <div>
                                    <Link to="/compare" className='d-flex align-items-center gap-10 text-white'>
                                        <img src="/images/compare.svg" alt="compare" />
                                        <p className='mb-0'>Compare <br /> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
                                        <img src="/images/wishlist.svg" alt="wishlist" />
                                        <p className='mb-0'>Favorite <br /> Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
                                        <img src="/images/user.svg" alt="user" />
                                        <p className='mb-0'>Login <br /> My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                                        <img src="/images/cart.svg" alt="cart" className='d-block' />
                                        <div className='d-flex flex-column align-items-center justify-content-center'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>500.000đ</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="/images/menu.svg" alt='category' />
                                            <span className='me-5 d-inline-block'>
                                                Shop Categories
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu w-100">
                                            <li><Link className="dropdown-item text-white" to="/action">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/another-action">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/something-else">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/store">Our Store</NavLink>
                                        <NavLink to="/blog">Blog</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
