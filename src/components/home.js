import React from 'react';

const Home = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="600px" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="" height="400px" className="d-block w-100" alt="Kori Rotti" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0a/5a/99/5f/king-fish-masala-fry.jpg" height="400px" className="d-block w-100" alt="Angal tawa fry" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <footer>
                <div className="footer-content">
                    <p>&copy; 2023 Your Mangalore Smart Bites.
                         All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
