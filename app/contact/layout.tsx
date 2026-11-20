import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us Page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
          <div className="container mx-auto">
               {children}
          </div>
     </body>
    </html>
  );
}
