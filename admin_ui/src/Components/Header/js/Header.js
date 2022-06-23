import "../../../GeneralCSS/generalCSS.css";
import HeaderStyles from "../css/Header.module.css";
import { AccountCircle, NotificationsNone } from "@mui/icons-material";
import SearchBar from "../../UI/js/SeacrhBar";

const Header = () => {
  return (
    <nav className={`${HeaderStyles.navigationBar}`}>
      <div className={`flexRowContainer ${HeaderStyles.header}`}>
        <div className={`flexRowContainer  ${HeaderStyles.centerAlign}`}>
          <p className={HeaderStyles.alignSelf}>Admin UI</p>
          <SearchBar></SearchBar>
        </div>
        <div
          className={`flexRowContainer ${HeaderStyles.headerLastItem}  ${HeaderStyles.centerAlign}`}
        >
          <div className={`flexRowContainer ${HeaderStyles.centerAlign}`}>
            <p>
              <AccountCircle />
            </p>
            <p className={`${HeaderStyles.name}`}>Name</p>
          </div>
          <p>
            <NotificationsNone className={`${HeaderStyles.marginLeft}`} />
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
