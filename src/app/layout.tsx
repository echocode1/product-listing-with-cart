import type { Metadata } from "next";
import { CartProvider } from "@/ui";
import theme from "../ui/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product list with cart",
  description: "Cart list that adds, removes, and makes orders as desired",
  icons: {
    icon: "/assets/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            <CartProvider>
              {children}
            </CartProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
