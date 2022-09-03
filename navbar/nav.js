import "./style.css";

const headerContent = document.querySelector("#header");
const logo = "https://img.icons8.com/color/12x/valorant.png";

const getNavBarTemplate = () => `
    <header>
        <nav>
            <ul>
                <li><a href="#">Agents</a></li>
                <li><a href="#">Maps</a></li>
                <li><a href="#">Weapons</a></li>
                <li><a href="#">Rank</a></li>
            </ul>
        </nav>
        <div class="logo-container"><img src="${logo}" alt="valorant"></div>
    </header>

`;

headerContent.innerHTML += getNavBarTemplate();
