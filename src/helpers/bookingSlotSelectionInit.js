export default (bookingDates, timeSlots, unavailableSlots, inProcessSlots) => {
  const slotSelection = {};

  bookingDates.forEach(date => {
    slotSelection[date] = {};

    Object.entries(timeSlots).forEach(([courtId, slots]) => {
      slotSelection[date][courtId] = {};

      slots.forEach(slot => {
        const slotStr = JSON.stringify(slot);
        let slotStatus = "available";

        if (
          unavailableSlots &&
          unavailableSlots[date] &&
          unavailableSlots[date][courtId]
        ) {
          const slotFound = unavailableSlots[date][courtId].find(
            s => JSON.stringify(s) === slotStr
          );

          if (slotFound) slotStatus = "unavailable";
        }

        if (
          inProcessSlots &&
          inProcessSlots[date] &&
          inProcessSlots[date][courtId]
        ) {
          const slotFound = inProcessSlots[date][courtId].find(
            s => JSON.stringify(s) === slotStr
          );

          if (slotFound) slotStatus = "in process";
        }

        slotSelection[date][courtId][slotStr] = slotStatus;
      });
    });
  });

  return slotSelection;
};
