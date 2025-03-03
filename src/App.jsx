import { useRoutes } from "react-router-dom";
import HomePage from "./pages/client/home/HomePage";
import ShopPage from "./pages/client/shop/ShopPage";
import ContactPage from "./pages/client/contact/ContactPage";
import ServicesPage from "./pages/client/services/ServicesPage";
import AboutPage from "./pages/client/about/AboutPage";
import CheckoutPage from "./pages/client/checkout/CheckoutPage";
import BackofficePage from "./pages/backoffice/BackofficePage";
import Login from "./components/commonComponents/Header/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth";
import BackofficeProductsPage from "./pages/backoffice/backofficePages/BackofficeProductsPage";
import BoProductsForm from "./components/backoffice/Products/outlet/BoProductsForm";
import Header from "./components/commonComponents/Header/Header";
import BackofficeEmployeesPage from "./pages/backoffice/backofficePages/BackofficeEmployeesPage";
import BoEmployeesForm from "./components/backoffice/Employees/outlet/BoEmployeesForm";
import BoArticlesForm from "./components/backoffice/Articles/outlet/BoArticlesForm";
import BackofficeArticlesPage from "./pages/backoffice/backofficePages/BackofficeArticlesPage";

function App() {
  const { signedIn } = useAuth();

  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/shop",
      element: <ShopPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/services",
      element: <ServicesPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "*",
      element: <div>NOT 404 FOUND</div>,
    },
    {
      path: "/backoffice",
      element: (
        <ProtectedRoute isAllowed={signedIn}>
          <BackofficePage />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/backoffice/products",
          element: <BackofficeProductsPage />,
          children: [
            {
              path: "/backoffice/products/add",
              element: <BoProductsForm />,
            },
            {
              path: "/backoffice/products/edit/:id",
              element: <BoProductsForm />,
            },
          ],
        },
        {
          path: "/backoffice/employees",
          element: <BackofficeEmployeesPage />,
          children: [
            {
              path: "/backoffice/employees/add",
              element: <BoEmployeesForm />,
            },
            {
              path: "/backoffice/employees/edit/:id",
              element: <BoEmployeesForm />,
            },
          ],
        },
        {
          path: "/backoffice/articles",
          element: <BackofficeArticlesPage />,
          children: [
            {
              path: "/backoffice/articles/add",
              element: <BoArticlesForm />,
            },
            {
              path: "/backoffice/articles/edit/:id",
              element: <BoArticlesForm />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <Header />
        <div className="globale-page-wrapper">{routes}</div>
      </div>
    </>
  );
}

export default App;
