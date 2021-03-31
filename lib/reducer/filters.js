const defaultFilters = {
  dateRange: {
    from: null,
    to: null,
    enteredTo: null
  }
};
export default function ArticlesFilters(filters = defaultFilters, action) {
  switch (action.type) {
    case "CHANGE_DATE_RANGE":
      {
        return { ...filters,
          dateRange: { ...filters.dateRange,
            ...action.payload.dateRange
          }
        };
      }

    default:
      return filters;
  }
}