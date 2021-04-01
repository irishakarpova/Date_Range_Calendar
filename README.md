<h1>Adding a date picker with scope select a range of days</h1>

<p>To allow to use filter range in any component in App, I need to move it to global state.</p>

<p>Reducer function from Redux developed read and calculate new state. Here, I keep filters` state.</p>

```javaScript
const defaultFilters = {
    dateRange: {
        from: null,
        to: null
    }
};

export default function ArticlesFilters(filters = defaultFilters, action) {
    switch (action.type) {
        case "CHANGE_DATE_RANGE": {
            return {
                ...filters,
                dateRange: { ...filters.dateRange, ...action.payload.dateRange }
            };
        }
        default:
            return filters;
    }
}


```
