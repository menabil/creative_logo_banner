import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <Container className={"py-5"}>
        <Flex className={"justify-between"}>
          <Link to={"/"}>
            <Images imgSrc={logo} className={"w-fit"} />
          </Link>
          <ul className="flex items-center gap-x-10 font-bold font-openSans">
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
