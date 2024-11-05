body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo img {
    height: 70px;
}

.header-info {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.search {
    --padding: 14px;
    display: flex;
    align-items: center;
    padding: var(--padding);
    border-radius: 28px;
    background: #f6f6f6;
    transition: box-shadow 0.25s;
}

.search:focus-within {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.75);
}

.search-icon {
    color: rgba(0, 0, 0, 0.5);
    font-size: 24px;
    margin-right: 8px;
}

.search-input {
    font-size: 16px;
    font-family: 'Lexend', sans-serif;
    color: #333333;
    outline: none;
    border: none;
    background: transparent;
    margin-right: 15px;
}

.navigation {
    display: flex;
    gap: 20px;
}

.navigation a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

.dropdown {
    position: relative;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    border: 1px solid #ddd;
    min-width: 120px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    list-style: none;
}

.dropdown-item {
    position: relative;
    padding: 8px 16px;
    border-bottom: 1px solid #ddd;
}

.dropdown-item:last-child {
    border-bottom: none;
}

.dropdown-item:hover {
    background-color: #e6f7ff;
    border-right: 3px solid red;
}

.dropdown-item a {
    text-decoration: none;
    color: #555;
}

.dropdown:hover .dropdown-menu,
.dropdown-menu:hover {
    display: block;
}

.sub-menu {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    list-style-type: none;
    margin-left: 10px;
}

.sub-menu li a:hover {
    background-color: #e6f7ff;
    border-right: 3px solid red;
}

.carousel {
    position: relative;
    max-width: 100%;
    overflow: hidden;
    margin: auto;
}

.carousel-slide {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 300%;
}

.carousel-slide img {
    width: 100%;
    height: auto;
}

.carousel-prev, .carousel-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
}

.carousel-prev {
    left: 10px;
}

.carousel-next {
    right: 10px;
}

@media (max-width: 768px) {
    .carousel-slide img {
        width: 100vw;
    }
}

footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    text-align: left;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
}

.footer-section {
    flex: 1;
}

.footer-section h4 {
    margin-bottom: 10px;
    font-size: 1.1em;
    color: #f0f0f0;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
}

.footer-section a:hover {
    color: #fff;
}

.footer-icon {
    width: 20px;
    height: 20px;
}
