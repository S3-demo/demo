import MapToSource from '../Components/MapToSource/MapToSource'
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import PageNotFoundComponent from '../Components/PageNotFoundComponent/PageNotFoundComponent';
import Dashboard from '../Components/Dashboard/Dashboard';
import Default from '../Components/Default/Default';
import Execution from '../Components/Execution/Execution';
// import RuleSet from '../Components/RuleSet/RuleSet';
import RulesWrapper from '../Components/RulesWrapper/RulesWrapper'
import DataQuality from '../Components/DataQuality/DataQuality';
import ReviewMatches from '../Components/ReviewMatches/ReviewMatchesWrapper';
import DataQualityReport from '../Components/DataQuality/DataQualityReport';
import ShowcaseLayout from '../Components/Reports/Reportdnd';
import CutomerView from '../Components/Reports/Customer';
import CutomerGraphView from '../Components/Reports/CustomerGraph';

export const RouteNames = {
    LANDING_PAGE: "LANDING_PAGE",
    DASHBOARD: "DASHBOARD",
    MAP_TO_SOURCE: "MAP_TO_SOURCE",
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",
    RULES_ADD: "RULESET_ADD",
    EXECUTION: "EXECUTION",
    RULES_VIEW: "RULESET_VIEW",
    DATA_QUALITY: "DATA_QUALITY",
    DATA_QUALITY_REPORT: "DATA_QUALITY_REPORT",
    CUSTOMER_REPORT: "CUSTOMER_REPORT",
    CUSTOMER_VIEW: "CUSTOMER_VIEW",
    CUSTOMER_GRAPH_VIEW: "CUSTOMER_GRAPH_VIEW"
}


export const RouteUrls = {
    LANDING_PAGE: "/",
    DASHBOARD: "/dashboard",
    MAP_TO_SOURCE: "/MapToSource",
    SIGN_IN: "/signin",
    SIGN_UP: "/signup",
    RULES_ADD: "/rules/add",
    EXECUTION: "/execution",
    RULES_VIEW: "/rules/*",
    DATA_QUALITY: "/dq",
    REVIEW_MATCHES: "/reviewMatches",
    DATA_QUALITY_REPORT: "/dqreport",
    CUSTOMER_REPORT: "/customerreport",
    CUSTOMER_VIEW: "/customer",
    CUSTOMER_GRAPH_VIEW: "/customergraph"
}

export const routes = [
    {
        name: RouteNames.LANDING_PAGE,
        path: RouteUrls.LANDING_PAGE,
        dashboardcomponent: Dashboard,
        RenderComponent: Default
    },
    {
        name: RouteNames.DASHBOARD,
        path: RouteUrls.DASHBOARD,
        dashboardcomponent: Dashboard,
        RenderComponent: Default
    },
    {
        name: RouteNames.MAP_TO_SOURCE,
        path: RouteUrls.MAP_TO_SOURCE,
        dashboardcomponent: Dashboard,
        RenderComponent: MapToSource
    },
    {
        name: RouteNames.EXECUTION,
        path: RouteUrls.EXECUTION,
        dashboardcomponent: Dashboard,
        RenderComponent: Execution
    },
    {   
        name: RouteNames.SIGN_IN,
        path: RouteUrls.SIGN_IN,
        component: SignIn
    },
    {
        name: RouteNames.SIGN_UP,
        path: RouteUrls.SIGN_UP,
        component: SignUp
    },
    {
        name: RouteNames.RULES_VIEW,
        path: RouteUrls.RULES_VIEW,
        dashboardcomponent: Dashboard,
        RenderComponent: RulesWrapper
    },
    {
        name: RouteNames.RULES_ADD,
        path: RouteUrls.RULES_ADD,
        dashboardcomponent: Dashboard,
        RenderComponent: RulesWrapper
    },
    {
        name: RouteNames.DATA_QUALITY,
        path: RouteUrls.DATA_QUALITY,
        dashboardcomponent: Dashboard,
        RenderComponent: DataQuality
    },{
        name: RouteNames.REVIEW_MATCHES,
        path: RouteUrls.REVIEW_MATCHES,
        dashboardcomponent: Dashboard,
        RenderComponent: ReviewMatches
    }
    ,
    {
        name: RouteNames.DATA_QUALITY_REPORT,
        path: RouteUrls.DATA_QUALITY_REPORT,
        dashboardcomponent: Dashboard,
        RenderComponent: DataQualityReport
    },
    {
        name: RouteNames.CUSTOMER_REPORT,
        path: RouteUrls.CUSTOMER_REPORT,
        dashboardcomponent: Dashboard,
        RenderComponent: ShowcaseLayout
    },
    {
        name: RouteNames.CUSTOMER_VIEW,
        path: RouteUrls.CUSTOMER_VIEW,
        dashboardcomponent: Dashboard,
        RenderComponent: CutomerView
    },
    {
        name: RouteNames.CUSTOMER_GRAPH_VIEW,
        path: RouteUrls.CUSTOMER_GRAPH_VIEW,
        dashboardcomponent: Dashboard,
        RenderComponent: CutomerGraphView
    },
    {
        path: "/*",
        dashboardcomponent: PageNotFoundComponent
    }
]