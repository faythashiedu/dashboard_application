import { Home,Timeline, TrendingUp, Person,AttachMoney,BarChart, LocalMall, Email, Whatshot,DynamicFeed, Error,Work } from "@material-ui/icons";

export const SidebarList = [
    {
        title: "Home",
        icon: <Home />,
    },
    {
        title: "Analytics",
        icon: <Timeline />,
    },
    {
        title: "Sales",
        icon: <TrendingUp />
    }
]

export const QuickMenu = [
    {
        title: "Products",
        icon: <LocalMall />,
    },
    {
        title: "Users",
        icon: <Person />,
    },
    {
        title: "Transactions",
        icon: <AttachMoney />,
    },
    {
        title: "Reports",
        icon: <BarChart />,
    }
]

export const Notifications = [
    {
        title: "Mail",
        icon: <Email />,
    },
    {
        title: "Feedback",
        icon: <DynamicFeed />,
    },
    {
        title: "Latest News",
        icon: <Whatshot />
    },
]

export const Users = [
    {
        title: "Manage",
        icon: <Work />
    },
    {
        title: "Reports",
        icon: <Error />
    }
]