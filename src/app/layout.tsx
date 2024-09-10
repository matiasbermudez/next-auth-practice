import "./globals.css";
import { HeaderComponent } from './components/headerComponent'
import SessionAuthProvider from "../../context/SessionAuthProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body>
        <SessionAuthProvider>
          <HeaderComponent />
          {children}
        </SessionAuthProvider>
      </body>
    </html>
  );
}
