export default (
  data,
  setArenaBoxData = null,
  setPriceTimeData = null,
  setAboutData = null,
  setNewsData = null,
  setPlayersData = null,
  setReviewsData = null
) => {
  if (setArenaBoxData)
    setArenaBoxData({
      id: data.id,
      name: data.arena.name,
      address: data.arena.address,
      sport: data.arena.sport,
      courtType: data.arena.courtType,
      otherSports: data.arena.otherSports,
      rating: data.arena.rating,
      images: data.arena.images,
      socialMedia: data.arena.socialMedia
    });

  if (setPriceTimeData)
    setPriceTimeData({
      price: data.price,
      openingTime: data.openingTime,
      closingTime: data.closingTime,
      availableDays: data.availableDays
    });

  if (setAboutData)
    setAboutData({
      facilities: data.about.facilities,
      location: data.about.location,
      service: {
        membership: data.about.service.membership,
        coaching: data.about.service.coaching,
        bookASlot: data.about.service.bookASlot,
        bookingCount: data.about.bookingCount,
        membershipCount: data.about.membershipCount,
        eventCount: data.about.eventCount
      },
      boardMembers: data.about.boardMembers,
      coaches: data.about.coaches,
      offers: data.about.offers,
      partners: data.about.partners,
      termsAndConditions: data.about.termsAndConditions
    });

  if (setNewsData)
    setNewsData({
      achievements: data.news.achievements,
      news: data.news.news,
      socialMedia: data.news.socialMedia
    });

  if (setPlayersData)
    setPlayersData({
      players: data.players
    });

  if (setReviewsData)
    setReviewsData({
      ...data.reviews
    });
};
