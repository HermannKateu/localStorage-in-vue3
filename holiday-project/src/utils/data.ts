export const holidayOptions = [
    {
        key: "Annual",
        value: "ANNUAL"
    },
    {
        key: "Martenite",
        value: "MARTENITE"
    },
    {
        key: "Adventure",
        value: "ADVENTURE"
    },
    {
        key: "Cycling",
        value: "CYCLING"
    },
    {
        key: "Family",
        value: "FAMILY"
    },
    {
        key: "City-Breaks",
        value: "CITY BREAKS"
    }
];

type Route = {
    path: string;
    name: string;
    label: string;
}
export const routeCrumb: Route[] = [
    {
        path: "/holiday-list",
        name: "holiday-list",
        label: "List",
    },
    {
        path: "",
        name: "holiday-details",
        label: "Details",
    },
]
