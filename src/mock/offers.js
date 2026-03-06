import { getRandomBoolean } from '../utils.js';

const OFFERS_BY_TYPE = [
  {
    "type": "taxi",
    "offers": [
      {
        "id": "b36a1776-e89d-4190-8bdc-e145b9f85c44",
        "title": "Upgrade to a business class",
        "price": 130
      },
      {
        "id": "3b312abb-f9f0-4099-b883-bf41bcf53f0d",
        "title": "Choose the radio station",
        "price": 147
      },
      {
        "id": "727a9657-6f03-40e6-a0dc-ce11b37a88fd",
        "title": "Choose temperature",
        "price": 151
      },
      {
        "id": "556bfd68-c9bc-4dfa-b987-e028dd600b69",
        "title": "Drive quickly, I'm in a hurry",
        "price": 63
      },
      {
        "id": "8c13e756-a036-45e1-a538-10a9eaf6ed81",
        "title": "Drive slowly",
        "price": 189
      }
    ]
  },
  {
    "type": "bus",
    "offers": [
      {
        "id": "007ec490-3a2d-467d-a668-57465b2698b9",
        "title": "Infotainment system",
        "price": 147
      },
      {
        "id": "177100b9-2f09-4e02-9dba-419ec7a447bd",
        "title": "Order meal",
        "price": 62
      },
      {
        "id": "52b3a7b9-3745-4efc-aea5-e5451a2faa43",
        "title": "Choose seats",
        "price": 52
      }
    ]
  },
  {
    "type": "train",
    "offers": [
      {
        "id": "fcf0b4a5-b93f-40f6-95ed-f2c6e644a48c",
        "title": "Book a taxi at the arrival point",
        "price": 83
      },
      {
        "id": "bca1274f-1feb-41a7-beb4-ff1a5119c8fe",
        "title": "Order a breakfast",
        "price": 47
      },
      {
        "id": "2781bb24-1665-42e2-9240-9bd41475ba01",
        "title": "Wake up at a certain time",
        "price": 184
      }
    ]
  },
  {
    "type": "flight",
    "offers": [
      {
        "id": "55f50d08-7e87-4bfb-a85d-2e80ac17589b",
        "title": "Choose meal",
        "price": 39
      },
      {
        "id": "e91171b9-21e4-4e96-a491-9fbdc8da15ac",
        "title": "Choose seats",
        "price": 156
      },
      {
        "id": "01fd8b59-24c1-4abc-aee9-2612bd4bd9bc",
        "title": "Upgrade to comfort class",
        "price": 95
      },
      {
        "id": "3b9bfe37-7f2d-4dc5-99a2-5ee7dfecb73b",
        "title": "Upgrade to business class",
        "price": 174
      },
      {
        "id": "8f9ea6bb-ddad-49d9-ae86-68f0cd5cd4c4",
        "title": "Add luggage",
        "price": 93
      },
      {
        "id": "7e163dbf-214f-445d-bc2f-c5b166c96a87",
        "title": "Business lounge",
        "price": 77
      }
    ]
  },
  {
    "type": "check-in",
    "offers": [
      {
        "id": "4bacc1b7-5178-4b10-bdb7-701508f34b74",
        "title": "Choose the time of check-in",
        "price": 56
      },
      {
        "id": "00efaa64-9153-49b4-900f-a5f7c6b96a03",
        "title": "Choose the time of check-out",
        "price": 165
      },
      {
        "id": "15c183f0-02ff-4093-86df-f3526d67294f",
        "title": "Add breakfast",
        "price": 35
      },
      {
        "id": "964e1438-6d60-459c-9f60-ed16a5131065",
        "title": "Laundry",
        "price": 91
      },
      {
        "id": "33ce4907-2b4e-434d-a849-98c4a6570105",
        "title": "Order a meal from the restaurant",
        "price": 167
      }
    ]
  },
  {
    "type": "sightseeing",
    "offers": []
  },
  {
    "type": "ship",
    "offers": [
      {
        "id": "0c61e8ae-0ba4-4940-a495-1dacc32237b2",
        "title": "Choose meal",
        "price": 99
      },
      {
        "id": "3c717e85-41fd-4b93-8ed5-df1bf5a11b4e",
        "title": "Choose seats",
        "price": 73
      },
      {
        "id": "93a87e8c-5230-4291-88d9-e18e1000fedd",
        "title": "Upgrade to comfort class",
        "price": 153
      },
      {
        "id": "bee6f6e2-ef38-477d-a54e-3404ceaf7589",
        "title": "Upgrade to business class",
        "price": 186
      },
      {
        "id": "f49ffe2d-3d1f-4de8-89ac-59b8048a1c1f",
        "title": "Add luggage",
        "price": 110
      },
      {
        "id": "a542e7dc-ad97-41a1-b47a-b1bf4aa11995",
        "title": "Business lounge",
        "price": 125
      }
    ]
  },
  {
    "type": "drive",
    "offers": [
      {
        "id": "be0e3062-4c79-4d46-b589-d1418bc89554",
        "title": "With automatic transmission",
        "price": 84
      },
      {
        "id": "20ee2571-9b41-44a7-ba3b-a326f907d4bd",
        "title": "With air conditioning",
        "price": 105
      }
    ]
  },
  {
    "type": "restaurant",
    "offers": [
      {
        "id": "06b88f18-b02f-4459-a467-d00e1f8da18a",
        "title": "Choose live music",
        "price": 96
      },
      {
        "id": "8e54d032-5951-4cb6-9542-d7bbb125a218",
        "title": "Choose VIP area",
        "price": 163
      }
    ]
  }
];

const getOffersByType = (type) => {
  const offerGroup = OFFERS_BY_TYPE.find((group) => group.type === type);
  return offerGroup ? offerGroup.offers : [];
};

const generateSelectedOffers = (type) => {
  const availableOffers = getOffersByType(type);
  const selectedOffers = [];

  for (const offer of availableOffers) {
    if (getRandomBoolean()) {
      selectedOffers.push(offer.id);
    }
  }

  return selectedOffers;
};

export {generateSelectedOffers, OFFERS_BY_TYPE};
