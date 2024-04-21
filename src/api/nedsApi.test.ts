import axios from 'axios';
import nedsApi from './nedsApi';
import {mockRaceData} from '../testUtils/mockRaceData';

jest.mock('axios');

describe('nedsApi', () => {
  it('fetches races and returns them on success', async () => {
    const data = [mockRaceData];
    axios.get.mockResolvedValue({
      data: {
        data: {
          next_to_go_ids: ['1', '2'],
          race_summaries: {'1': data[0], '2': data[1]},
        },
      },
    });
    const result = await nedsApi.fetchRaces();
    expect(result).toEqual(data);
  });
});
