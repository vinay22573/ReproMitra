import React from "react";
import Layout from "./Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeHero from "./section/HomeHero";
import Chatbot from "./section/Chatbot";
import AboutRepromitra from "./section/About";
import Pcos from "./components/Pcos";
import MaleInfertility from "./components/infertility";
import ErectileDysfunction from "./components/erectile";
import LowTestosterone from "./components/low_test";
import MenstrualDisorders from "./components/Menstr_dis";
import Endometriosis from "./components/Endometriosis";
import MaleReproductiveDiseases from "./components/men_health";
import WomenReproductiveDiseases from "./components/wom_health";
import AyushmannCard from "./components/Ayushmanncard";
import Doctors from "./components/Doctors";
import HealthIssues from "./components/HealthIssues";
import DoctorConsultation from "./components/DoctorConsultation";
//import { About } from "./section/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeHero />,
        },
        {
          path: "/chat",
          element: <Chatbot />,
        },
        {
          path: "/about",
          element: <AboutRepromitra  />,
        
        }, {path:'/pcos',element: <Pcos/>},
        {
          path:'/Doctors',element: <Doctors/>
        },
        {
          path:'/health-issues',element: <HealthIssues/>
        },
        {
          path:'/doctor/:id',element: <DoctorConsultation/>
        }
        ,{path:'/maleinfertility',element: <MaleInfertility/>}
        ,{path:'/erectiledysfunction',element: <ErectileDysfunction/>}
        ,{path:'/lowtestosterone',element: <LowTestosterone/>}
        ,{path:'/menstrualdisorders',element: <MenstrualDisorders/>}
        ,{path:'/endometriosis',element: <Endometriosis/>}
        ,{path:'/womens-health',element: <WomenReproductiveDiseases/>}
        ,{path:'/mens-health',element: <MaleReproductiveDiseases/>}
        ,{path:'/ayushmann-card',element: <AyushmannCard/>}
      ],
    },
  ]);
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;