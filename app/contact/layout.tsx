import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us Page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
          <div className="container mx-auto">
               {children}
          </div>
   );
}
