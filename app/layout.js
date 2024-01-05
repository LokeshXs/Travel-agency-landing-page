import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Travel",
  description: "Travel with me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
