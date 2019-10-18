import _ from "lodash";

export default (filters, filtersKey, filtersVal) => {
  const newFilters = _.cloneDeep(filters);

  if (!newFilters[filtersKey]) {
    return newFilters;
  }
  if (
    filtersKey === "sortBy" ||
    filtersKey === "price" ||
    filtersKey === "rating"
  ) {
    newFilters[filtersKey].selected = filtersVal;
  } else if (!newFilters[filtersKey].selected) {
    newFilters[filtersKey].selected = [filtersVal];
  } else if (newFilters[filtersKey].selected.includes(filtersVal)) {
    newFilters[filtersKey].selected = newFilters[filtersKey].selected.filter(
      val => val !== filtersVal
    );
    if (newFilters[filtersKey].selected.length === 0) {
      newFilters[filtersKey].selected = null;
    }
  } else {
    newFilters[filtersKey].selected.push(filtersVal);
  }

  return newFilters;
};
