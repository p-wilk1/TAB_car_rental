/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import api from "../api/axiosConfig";

const ReservationsContext = createContext();

const initialState = {
  reservations: [],
  isLoading: false,
  currentReservation: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "reservations/loaded":
      return { ...state, isLoading: false, reservations: action.payload };
    case "reservation/loaded":
      return {
        ...state,
        isLoading: false,
        currentReservation: action.payload,
      };
    case "reservation/created":
      return {
        ...state,
        isLoading: false,
        currentReservation: action.payload,
        reservations: [...state.reservations, action.payload],
      };
    case "reservation/deleted":
      return {
        ...state,
        isLoading: false,
        currentReservation: {},
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload
        ),
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};

const ReservationsProvider = ({ children }) => {
  const [{ reservations, isLoading, currentReservation, error }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    const fetchReservations = async () => {
      dispatch({ type: "loading" });
      try {
        const res = await api.get("api/res");
        const data = res.data;
        console.log(data);
        dispatch({ type: "reservations/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading reservations",
        });
      }
    };
    fetchReservations();
  }, []);

  const createReservation = async (newReservation) => {
    dispatch({ type: "loading" });
    try {
      const res = await api.post("api/res", JSON.stringify(newReservation), {
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.data();
      dispatch({ type: "reservation/created", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading cars",
      });
    }
  };

  const deleteReservation = async (id) => {
    dispatch({ type: "loading" });
    try {
      await api.delete(`api/res/${id}`);
      dispatch({ type: "reservation/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading cars",
      });
    }
  };

  return (
    <ReservationsContext.Provider
      value={{
        reservations,
        isLoading,
        currentReservation,
        error,
        createReservation,
        deleteReservation,
      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
};

const useReservations = () => {
  const context = useContext(ReservationsContext);
  if (context === undefined)
    throw new Error(
      "Reservations context was used outside the ReservationsProvider"
    );
  return context;
};

export { ReservationsProvider, useReservations };
