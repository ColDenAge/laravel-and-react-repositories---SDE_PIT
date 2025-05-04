import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// No account pages
import Homepage from "./pages/NoAccount/homepage/Homepage";
import Features from "./pages/NoAccount/Features";
import Faq from "./pages/NoAccount/Faq";
import Contacts from "./pages/NoAccount/contacts/Contacts";
import AboutUs from "./pages/NoAccount/AboutUs";

// Login and Signup
import SignUp from "./pages/LoginAndSignUp/SignUp";
import Login from "./pages/LoginAndSignUp/Login";
import ForgotPassword from "./pages/LoginAndSignUp/ForgotPassword";
import ChangePassword from "./pages/LoginAndSignUp/ChangePassword";
import Choice from "./pages/LoginAndSignUp/Choice";

// With account pages
import HomepageAccount from "./pages/WithAccount/homepage_acc/HomepageAccount";
import FeaturesAccount from "./pages/WithAccount/FeaturesAccount";
import FaqAccount from "./pages/WithAccount/FaqAccount";
import ContactsAccount from "./pages/WithAccount/contacts_acc/ContactsAccount";
import AboutUsAccount from "./pages/WithAccount/AboutUsAccount";

// Customer pages
import CustomerDashboard from "./pages/Customer/customer_dashboard/CustomerDashboard";
import CustomerGymManage from "./pages/Customer/customer_gymmanage/CustomerGymManage";
import CustomerGymSearch from "./pages/Customer/customer_gymsearch/CustomerGymSearch";
import CustomerGymSearchInfo from "./pages/Customer/customer_gymsearch_info/CustomerGymSearchInfo";
import CustomerGymSearchPlans from "./pages/Customer/customer_gymmanage/CustomerGymSearchPlans";
import CustomerGymManageChangePlan from "./pages/Customer/customer_gymmanage_changeplan/CustomerGymManageChangePlan";
import CustomerGymBillings from "./pages/Customer/customer_billings/CustomerBillings";
import CustomerGymBillingsAddMethod from "./pages/Customer/customer_billings/CustomerGymBillingsAddMethod";
import CustomerAccountSettings from "./pages/Customer/customer_acc_settings/CustomerAccountSettings";
import CustomerAccountEdit from "./pages/Customer/customer_acc_edit/CustomerAccountEdit";
import CustomerHelp from "./pages/Customer/CustomerHelp";

// Manager pages
import ManagerDashboard from "./pages/Manager/manager_dashboard/ManagerDashboard";
import ManagerGymEdit from "./pages/Manager/manager_gymedit/ManagerGymEdit";
import ManagerGymAddAmenity from "./pages/Manager/manager_gym_addamenity/ManagerGymAddAmenity";
import ManagerGymEditAmenity from "./pages/Manager/manager_gym_editamenity/ManagerGymEditAmenity";
import ManagerGymNewClass from "./pages/Manager/manager_gym_newclass/ManagerGymNewClass";
import ManagerGymEditClass from "./pages/Manager/manager_gymedit_class/ManagerGymEditClass";
import ManagerGymNewPlan from "./pages/Manager/manager_gym_newplan/ManagerGymNewPlan";
import ManagerGymEditPlan from "./pages/Manager/manager_gym_editplan/ManagerGymEditPlan";
import ManagerMembers from "./pages/Manager/manager_members/ManagerMembers";
import ManagerMembersKick from "./pages/Manager/manager_members_kick/ManagerMembersKick";
import ManagerAccountSettings from "./pages/Manager/manager_dashboard/ManagerAccountSettings";
import ManagerAccountEdit from "./pages/Manager/manager_acc_edit/ManagerAccountEdit";
import ManagerHelp from "./pages/Manager/ManagerHelp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage/homepage" element={<Homepage />} />
        <Route path="/homepage/homepage_acc" element={<HomepageAccount />} />
        <Route path="/features/features" element={<Features />} />
        <Route path="/features/features_acc" element={<FeaturesAccount />} />
        <Route path="/faq/faq" element={<Faq />} />
        <Route path="/faq/faq_acc" element={<FaqAccount />} />
        <Route path="/contacts/contacts" element={<Contacts />} />
        <Route path="/contacts/contacts_acc" element={<ContactsAccount />} />
        <Route path="/about_us/about" element={<AboutUs />} />
        <Route path="/about_us/about_acc" element={<AboutUsAccount />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpw" element={<ForgotPassword />} />
        <Route path="/changepw" element={<ChangePassword />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/customer/customer_gym" element={<CustomerGymManage />} />
        <Route path="/customer/customer_gym" element={<CustomerGymManageChangePlan />} />
        <Route path="/customer/customer_gym" element={<CustomerGymSearch />} />
        <Route path="/customer/customer_gym" element={<CustomerGymSearchInfo />} />
        <Route path="/customer/customer_gym" element={<CustomerGymSearchPlans />} />
        <Route path="/customer/customer_billings" element={<CustomerBillings />} />
        <Route path="/customer/customer_billings" element={<CustomerGymBillingsAddMethod />} />
        <Route path="/customer/customer_acc" element={<CustomerAccountSettings />} />
        <Route path="/customer/customer_acc" element={<CustomerAccountEdit />} />
        <Route path="/customer" element={<CustomerHelp />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/manager/manager_gym" element={<ManagerGym />} />
        <Route path="/manager/manager_gym" element={<ManagerGymEdit />} />
        <Route path="/manager/manager_gym" element={<ManagerGymAddAmenity />} />
        <Route path="/manager/manager_gym" element={<ManagerGymEditAmenity />} />
        <Route path="/manager/manager_gym" element={<ManagerGymNewClass />} />
        <Route path="/manager/manager_gym" element={<ManagerGymEditClass />} />
        <Route path="/manager/manager_gym" element={<ManagerGymNewPlan />} />
        <Route path="/manager/manager_gym" element={<ManagerGymEditPlan />} />
        <Route path="/manager/manager_members" element={<ManagerMembers />} />
        <Route path="/manager/manager_members" element={<ManagerMembersKick />} />
        <Route path="/manager/manager_acc" element={<ManagerAccountSettings />} />
        <Route path="/manager/manager_acc" element={<ManagerAccountEdit />} />
        <Route path="/manager" element={<ManagerHelp />} />
      </Routes>
    </Router>
  );
}

export default App;