import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import Button from "../Button";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Header = () => {
  return (
    <>
      {/* Top header  */}
      <header className="bg-red-500">
        <Container>
          <Flex className={"justify-between py-2"}>
            <Flex className={"text-white gap-x-3 items-end"}>
              <p className="font-semibold  mr-10">Admission Going On</p>
              <FaPhoneAlt className="text-lg" />
              <p className="font-semibold cursor-pointer">01791655368</p>
              <MdMail className="text-xl" />
              <p className="lg:font-semibold font-medium cursor-pointer">
                mr.nabil.dev@gmail.com
              </p>
            </Flex>

            <div className="">
              <button className="cursor-pointer bg-white text-red-500 py-1 px-1.5 rounded-[6px] flex items-center lg:font-bold text-[10px]">
                BN
                <p className="bg-red-500 text-white py-px px-1 rounded-sm ml-3">
                  EN
                </p>
              </button>
            </div>
          </Flex>
        </Container>
      </header>
      {/* Top header  */}
      <Container className={"py-5"}>
        <Flex className={"justify-between"}>
          <Link to={"/"}>
            <Images imgSrc={logo} className={"w-fit"} />
          </Link>
          <ul className="flex items-center gap-x-10 font-semibold font-openSans uppercase">
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              <Link to={"/"}> About us</Link>
            </li>
            <li>
              <Link to={"/"}> Success story</Link>
            </li>
            <li>
              <Link to={"/"}> Diploma</Link>
            </li>
            <li>
              <Link to={"/"}> Contact</Link>
            </li>
            <Button btnText={"Browse Course"} />
          </ul>
        </Flex>
      </Container>
    </>
  );
};

export default Header;
