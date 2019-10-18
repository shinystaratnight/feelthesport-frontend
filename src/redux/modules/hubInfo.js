/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-destructuring */
import { push } from "connected-react-router";
import queryString from "query-string";
import makeDebounce from "redux-debounce-thunk";
import * as api from "../../api";
import { apiLoading, apiSuccess, apiError } from "./apiInfo";
import filtersSetter from "../../helpers/filtersSetter";
import { setGeneralSiteInfo } from "./siteInfo";

const SET_HUB_CARDS = "hubInfo/SET_HUB_CARDS";
const SET_HUB_FILTERS = "hubInfo/SET_HUB_FILTERS";
const SET_ACTIVE_SPORT_TAB = "hubInfo/SET_ACTIVE_SPORT_TAB";
const INIT_HUB = "hubInfo/INIT_HUB";
const SET_CARDS_LOADING = "hubInfo/SET_CARDS_LOADING";

const initialState = {
  type: null,
  activeSportTab: null,
  filters: null,
  cards: null,
  trainers: null,
  cardsLoading: false,
  trainersLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_HUB:
      return { ...state, ...payload };

    case SET_HUB_CARDS:
      return { ...state, ...payload };

    case SET_CARDS_LOADING:
      return { ...state, cardsLoading: true };

    case SET_ACTIVE_SPORT_TAB: {
      return { ...state, activeSportTab: payload.tab };
    }

    case SET_HUB_FILTERS: {
      const newFilters = filtersSetter(
        state.filters,
        payload.filtersKey,
        payload.filtersVal
      );

      return {
        ...state,
        filters: newFilters
      };
    }

    default:
      return state;
  }
};

export const setCards = () => {
  return async (dispatch, getState) => {
    const search = [];
    Object.entries(getState().hubState.filters).forEach(
      ([filtersKey, filtersValue]) => {
        if (filtersValue.selected) {
          if (filtersKey === "price") {
            search.push(`${filtersKey}=${filtersValue.selected.join(",")}`);
          } else if (filtersKey === "rating") {
            search.push(`${filtersKey}=${filtersValue.selected}`);
          } else if (filtersKey === "sortBy") {
            search.push(
              `${filtersKey}=${filtersValue.selected.replace(/ /g, "+")}`
            );
          } else {
            search.push(
              `${filtersKey}=${filtersValue.selected
                .map(x => x.replace(/ /g, "+"))
                .join(",")}`
            );
          }
        }
      }
    );

    dispatch(push(`/${getState().hubState.type}/?${search.join("&")}`));

    const filters = {
      ...Object.fromEntries(
        Object.entries(getState().hubState.filters)
          .filter(
            ([_, filterValue]) =>
              filterValue.selected && filterValue.selected !== 0
          )
          .map(([filterKey, filterValue]) => [filterKey, filterValue.selected])
      )
    };
    if (filters.price) {
      [filters.minPrice, filters.maxPrice] = filters.price;
      delete filters.price;
    }
    const city = getState().siteState.selected_city;
    const sport = getState().siteState.selected_sport;
    if (city) filters.city = city;
    if (sport) filters.sport = sport;

    try {
      dispatch({ type: SET_CARDS_LOADING });
      let response;

      if (getState().hubState.type === "booknplay") {
        response = await api.getBooknplayCards(filters);
      } else if (getState().hubState.type === "clubs") {
        response = await api.getClubsCards(filters);
      } else if (getState().hubState.type === "learnasport") {
        response = await api.getAcademiesCards({
          ...filters,
          trainer: getState().hubState.activeSportTab === "trainer"
        });
      } else if (getState().hubState.type === "events") {
        response = await api.getEventsCards(filters);
      } else {
        throw new Error("Page of unknown type");
      }

      console.log("RES SET", response);

      dispatch({
        type: SET_HUB_CARDS,
        payload: {
          cards: response.data,
          cardsLoading: false
        }
      });
    } catch (error) {
      // dispatch(cardsError());
    }
  };
};

const debouncedSetCards = makeDebounce(setCards, 500);

const undebouncedSetFilters = (filtersKey, filtersVal) => {
  return async dispatch => {
    dispatch({
      type: SET_HUB_FILTERS,
      payload: {
        filtersKey,
        filtersVal
      }
    });
    dispatch(debouncedSetCards());
  };
};

export const setFilters = makeDebounce(undebouncedSetFilters, 50);

export const initHub = type => {
  return async (dispatch, getState) => {
    try {
      dispatch(apiLoading);
      dispatch(setGeneralSiteInfo());
      const city = getState().siteState.selected_city;
      const sport = getState().siteState.selected_sport;
      let response;
      if (type === "booknplay") {
        response = await api.initBooknplay(city, sport);
      } else if (type === "clubs") {
        response = await api.initClubs();
      } else if (type === "learnasport") {
        response = await api.initAcademies();
      } else if (type === "events") {
        response = await api.initEvents();
      } else {
        throw new Error("Page of unknown type");
      }
      console.log(response.data)
      const search = queryString.parse(getState().router.location.search, {
        arrayFormat: "comma"
      });

      const filters = response.data.filters;

      dispatch({
        type: INIT_HUB,
        payload: {
          type,
          ...(type === "learnasport" && { activeSportTab: "academy" }),
          filters: {
            ...(filters.areas && {
              areas: {
                options: filters.areas,
                selected: search.areas
                  ? Array.isArray(search.areas)
                    ? [...search.areas.filter(s => filters.areas.includes(s))]
                    : filters.areas.includes(search.areas)
                    ? [search.areas]
                    : null
                  : null
              }
            }),
            ...((type === "booknplay" || type === "learnasport") && {
              ...(filters.courtTypes && {
                courtTypes: {
                  options: filters.courtTypes,
                  selected: search.courtTypes
                    ? Array.isArray(search.courtTypes)
                      ? [
                          ...search.courtTypes.filter(s =>
                            filters.courtTypes.includes(s)
                          )
                        ]
                      : filters.courtTypes.includes(search.courtTypes)
                      ? [search.courtTypes]
                      : null
                    : null
                }
              }),
              price: {
                selected: null
              },
              rating: {
                selected: 0
              },
              offers: {
                options: ["Yes"],
                selected: null
              }
            }),
            ...(type === "events" && {
              ...(filters.organizers && {
                organizers: {
                  options: filters.organizers,
                  selected: search.organizers
                    ? Array.isArray(search.organizers)
                      ? [
                          ...search.organizers.filter(s =>
                            filters.organizers.includes(s)
                          )
                        ]
                      : filters.organizers.includes(search.organizers)
                      ? [search.organizers]
                      : null
                    : null
                }
              }),
              gender: {
                options: ["Male", "Female"],
                selected: null
              }
            }),
            sortBy: {
              options:
                type === "booknplay" || type === "learnasport"
                  ? [
                      "Most Popular",
                      "Lowest Price",
                      "Highest Rating",
                      "Nearest By",
                      "Most Recent",
                      "Highest Discount"
                    ]
                  : type === "clubs" || type === "events"
                  ? ["Most Popular", "Nearest By", "Most Recent"]
                  : [],
              selected: "Most Popular"
            }
          },
          cards: response.data.cards,
          ...(response.data.trainers && { trainers: response.data.trainers })
        }
      });
      // HERE?

      dispatch(apiSuccess());
    } catch (error) {
      console.log(error);
      dispatch(apiError());
    }
  };
};

export const setActiveSportTab = tab => ({
  type: SET_ACTIVE_SPORT_TAB,
  payload: {
    tab
  }
});
