import axios from 'axios';

import {Race} from '../models/Race';

const nedsApi = {
  fetchRaces: async (): Promise<Race[]> => {
    const baseUrl = 'https://api.neds.com.au/rest/v1/racing/';
    const method = 'nextraces';
    const count = 10;

    try {
      const response = await axios.get(
        `${baseUrl}?method=${method}&count=${count}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const raceIds = response.data.data.next_to_go_ids;
      const raceSummaries = response.data.data.race_summaries;

      return raceIds.map((raceId: string) => raceSummaries[raceId]);
    } catch (error) {
      console.error('Error fetching races from Neds API:', error);
      throw error;
    }
  },
};

export default nedsApi;
