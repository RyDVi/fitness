import { EstimatedStepsBucket, FitnessResponse } from "./types";
import { useGoogleAxiosRequest } from "../hooks";
import { FITNESS_BASE_PATH } from "./constants";

export function useEstimatedSteps(from: Date, to: Date) {
  return useGoogleAxiosRequest<any, FitnessResponse<EstimatedStepsBucket>>({
    initial: null,
    config: () => {
      return {
        url: `${FITNESS_BASE_PATH}/users/me/dataset:aggregate`,
        method: "POST",
        data: {
          aggregateBy: [
            {
              dataSourceId:
                "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
            },
          ],
          startTimeMillis: from.getTime(),
          endTimeMillis: to.getTime(),
        },
      };
    },
  });
}
