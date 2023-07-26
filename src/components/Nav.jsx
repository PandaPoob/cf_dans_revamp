import styles from "@/sass/pages/home.module.scss";

function Nav() {
  //state for mobile nav

  return (
    <header>
      <nav id="nav">
        <div>
          <a href="/">logo here</a>
        </div>
        <ul id="nav_items">
          <li className="nav_item">
            <a href="">Tilmelding</a>
          </li>
          <li className="nav_item">
            <a href="">Dansetimer</a>
          </li>
          <li className="nav_item">
            <a href="">Book til events</a>
          </li>
          <li className="nav_item">
            <a href="/om-cf">Om CF Dans</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
