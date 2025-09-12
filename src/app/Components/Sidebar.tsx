let links = ["home", "about", "stack", "contact"];

export default function SideBar() {
  return (
    <div>
      <ul>
        {links.map((link, index) => <li key={index}><a href={`#${link}`}>{link}</a></li>)}
      </ul>
    </div>
  );
}