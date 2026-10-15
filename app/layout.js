import "./globals.css";
import Header from "./components/Global/Header/Header";
import Footer from "./components/Global/Footer";
import { defaultMetaDisc, defaultMetaTitle } from "./scripts/helpers";

export const metadata = {
  title: defaultMetaTitle,
  description: defaultMetaDisc,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main role="main" tabIndex="-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
