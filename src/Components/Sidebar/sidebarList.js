import { Home,Timeline, TrendingUp, Person,AttachMoney,BarChart, LocalMall, Email, Whatshot,DynamicFeed, Error,Work, Group } from "@material-ui/icons";
import { routes } from "../../Utilities/route";

export const SidebarList = [
    {
        title: "Home",
        icon: <Home />,
        route: routes.home,
    },
    {
        title: "Analytics",
        icon: <Timeline />,
        route: routes.home,
    },
    {
        title: "Sales",
        icon: <TrendingUp />,
        route: routes.home,
    }
]

export const QuickMenu = [
    {
        title: "Products",
        icon: <LocalMall />,
        route: routes.product,
    },
    {
        title: "Users",
        icon: <Person />,
        route: routes.users,
    },
    {
        title: "Transactions",
        icon: <AttachMoney />,
        route: routes.home,
    },
    {
        title: "Reports",
        icon: <BarChart />,
        route: routes.home,
    }
]

export const Notifications = [
    {
        title: "Mail",
        icon: <Email />,
        route: routes.home,
    },
    {
        title: "Latest News",
        icon: <Whatshot />,
        route: routes.home,
    },
]

export const User = [
    {
        title: "Staffs",
        icon: <Group />,
        route: routes.staff,
    },
    {
        title: "Manage",
        icon: <Work />,
        route: routes.home,
    },
    {
        title: "Reports",
        icon: <Error />,
        route: routes.home,
    }
]