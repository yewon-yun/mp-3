import { createGlobalStyle } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";

const router = createBrowserRouter([
    {
        path: "*",
        Component: Root
    }
]);

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  
  #root {
    width: 100%; //for some reason, the root was super teeny so i had to reference it separately
  }
`;



export default function App() {
  return (
    <>
      <GlobalStyles/>
      <RouterProvider router={router} />
    </>
  )
}
