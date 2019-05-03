/**
 * Import Link from next/link which is already baked into Next.js.
 * It operates in much the same way that Link from react-router-dom would.
 *  --> Wrap the <a href> in the Link component
 */
import Link from "next/link";

const navLinkListStyle = {
  display: "flex",
  alignItems: "center",
  listStyleType: "none"
};
const navLinkItemStyle = {
  marginRight: 15
};
const navLinkStyle = {
  padding: "15 25",
  backgroundColor: "#0000ff",
  color: "#fff"
};

export default () => {
  return (
    <ul style={navLinkListStyle}>
      <li style={navLinkItemStyle}>
        <Link href="/">
          <a href="/" title="Home">
            Home
          </a>
        </Link>
      </li>
      <li style={navLinkItemStyle}>
        <Link href="/nous-rejoindre">
          <a href="/nous-rejoindre" title="Nous rejoindre" style={navLinkStyle}>
            Nous rejoindre
          </a>
        </Link>
      </li>
    </ul>
  );
};
