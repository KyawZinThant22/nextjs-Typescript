import Link from "next/link";

const navlinks = [
  {
    url: "/",
    text: "Blog",
  },
  {
    url: "/aboutme",
    text: "About me",
  },
];

const Header: React.FC = () => {
  return (
    <div className="border-y mt-[1px] border-solid">
      <div className=" p-4  container mx-auto flex justify-between items-center    ">
        <Link href="/">
          <a className="text-white text-2xl font-bold">
            Kyaw Zin Thant <span className="text-green-500 text-2xl">.dev</span>
          </a>
        </Link>
        <div className="flex gap-4">
          {navlinks.map((link) => (
            <li key={link.url} className="list-none" >
              <Link href={link.url}>
                <a className="text-green-500 text-xl hover:text-white">{link.text}</a>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
