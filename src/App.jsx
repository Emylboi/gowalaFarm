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
import Footer from "./components/commonComponents/Footer/Footer";
import BackofficeMessagesPage from "./pages/backoffice/backofficePages/BackofficeMessagesPage";
import BackofficeOrdersPage from "./pages/backoffice/backofficePages/BackofficeOrdersPage";
import BoOrdersForm from "./components/backoffice/Orders/outlet/BoOrdersForm";
import BackofficeUsersPage from "./pages/backoffice/backofficePages/BackofficeUsersPage";
import BoUsersForm from "./components/backoffice/Users/outlet/BoUsersForm";
import BackofficeSubscriptionsPage from "./pages/backoffice/backofficePages/BackofficeSubscriptionsPage";
import BoSubscriptionsForm from "./components/backoffice/Subscriptions/outlet/BoSubscriptionsForm";

function App() {
  const { signedIn, user } = useAuth();

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
        <ProtectedRoute isAllowed={signedIn} role={user?.role}>
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
        {
          path: "/backoffice/messages",
          element: <BackofficeMessagesPage />,
        },
        {
          path: "/backoffice/orders",
          element: <BackofficeOrdersPage />,
          children: [
            {
              path: "/backoffice/orders/add",
              element: <BoOrdersForm />,
            },
            {
              path: "/backoffice/orders/edit/:id",
              element: <BoOrdersForm />,
            },
          ],
        },
        {
          path: "/backoffice/users",
          element: <BackofficeUsersPage />,
          children: [
            {
              path: "/backoffice/users/add",
              element: <BoUsersForm />,
            },
            {
              path: "/backoffice/users/edit/:id",
              element: <BoUsersForm />,
            },
          ],
        },
        {
          path: "/backoffice/subscriptions",
          element: <BackofficeSubscriptionsPage />,
          children: [
            {
              path: "/backoffice/subscriptions/add",
              element: <BoSubscriptionsForm />,
            },
            {
              path: "/backoffice/subscriptions/edit/:id",
              element: <BoSubscriptionsForm />,
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
        <Footer/>
      </div>
    </>
  );
}

export default App;
