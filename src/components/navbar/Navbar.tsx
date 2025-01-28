import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
            			   bg-black text-orange-400 font-bold border-orange-400 border-b-2"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="hover:text-[#5D4037]">
            <div className="flex gap-4 items-center hover:text-[#5D4037]">
              <img
                src="https://files.oaiusercontent.com/file-Hr8fa69sCxnBnn9TtEVngj?se=2025-01-28T17%3A54%3A45Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db939d99c-dfdd-4c0b-a641-b5d7ddc56b87.webp&sig=li5rwq%2BzHJIi0R7/Pu6md9FFmVpMTg%2B3R4h5F0nffS4%3D"
                alt=""
                width={50}
              />
              GenFit
            </div>
          </Link>
          <div className="flex gap-4 items-center">
            <p>
              <Link to="/home" className="hover:text-[#5D4037]">
                Home
              </Link>
            </p>
            <p>
              <Link to="/series" className="hover:text-[#5D4037]">
                Série
              </Link>
            </p>
            <p>
              <Link to="/sobre" className="hover:text-[#5D4037]">
                Sobre nós
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
