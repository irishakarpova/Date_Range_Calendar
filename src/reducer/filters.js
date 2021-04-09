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
        case "RESET": {
            return {
                ...filters,
                dateRange: { ...filters.dateRange, from: null, to: null }
            };
        }
        default:
            return filters;
    }
}
