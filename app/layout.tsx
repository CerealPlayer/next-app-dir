import "../styles/globals.css";
import { CommonProps } from "../types/commons";

export default function Layout({ children }: CommonProps) {
  return (
    <html>
      <body>
        <h1 className="text-center">Hi</h1>
        {children}
      </body>
    </html>
  );
}
