import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./header.css";
const Header = () => {
  return (
    <main className="header">
      <header className="logo">
        <h2 className="whatsapp">WhatsApp</h2>
        <section className="headerIcons">
          <article className="search">
            <SearchIcon />
          </article>
          <article className="more">
            <MoreVertIcon />
          </article>
        </section>
      </header>

      <footer className="topics">
        <h4 className="chat">CHAT</h4>
        <h4 className="call">CALL</h4>
        <h4 className="status">STATUS</h4>
      </footer>
    </main>
  );
};
export default Header;
