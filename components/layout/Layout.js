import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/dist/client/router";

const Layout = ({ children }) => {
  const router = useRouter();

  let bgColor;

  if (
    router.pathname === "/" ||
    router.pathname === "/blog" ||
    router.pathname === "/privacy-policy"
  ) {
    bgColor = "#DFDFE0";
  }

  if (router.pathname.includes("/projects") || router.pathname === "/contact") {
    bgColor = "#2F3331";
  }

  let errorPage = router.route === "/404";

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Header />
      <main>{children}</main>
      {!errorPage && <Footer />}
    </div>
  );
};

export default Layout;
