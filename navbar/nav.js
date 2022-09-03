import "./style.css";

const headerContent = document.querySelector("#header");
const logo = "https://img.icons8.com/color/12x/valorant.png";

const getNavBarTemplate = () => `
    <header>
        <nav>
            <ul>
		    <li><a href="https://agents-valorant.vercel.app">Agents</a></li>
                <li><a href="https://maps-valorant.vercel.app">Maps</a></li>
                <li><a href="https://weapons-valorant.vercel.app">Weapons</a></li>
                <li><a href="https://ranks-valorant.vercel.app">Rank</a></li>
            </ul>
        </nav>
        <div class="logo-container"><img src="${logo}" alt="valorant"></div>
    </header>

`;

headerContent.innerHTML += getNavBarTemplate();
