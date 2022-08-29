import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/dist/client/router";

const Layout = ({ children }) => {
  const router = useRouter();

  let bgColor;

  if (router.pathname === "/" || router.pathname === "/blog") {
    bgColor = "#DFDFE0";
  }

  if (router.pathname.includes("/projects")) {
    bgColor = "#2F3331";
  }

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
