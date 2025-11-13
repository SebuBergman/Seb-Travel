import { useAppDispatch, useAppSelector } from "@store/index";
import { AppRoutes } from "@app/config/routes";
import { useNavigate } from "react-router-dom";

import FilesForm from "../../../components/Files/FilesForm";
import type { TripFile } from "../../../types";
import {
  resetWizard,
  selectWizardTrip,
  setPhotos,
} from "../../store/tripWizardSlice";
import Pagination from "../Navigation/Pagination";
import { useAddTripMutation } from "@features/trip/store/tripsApi";

export default function Photos() {
  const { photos, onSubmit, onFileStorageRemoval, isLoading, tripId } =
    usePhotosForm();

  return (
    <FilesForm
      tripId={tripId}
      defaultFiles={photos}
      onSubmit={onSubmit}
      SubmitComponent={<Pagination isLoading={isLoading} />}
      onFileStorageRemoval={onFileStorageRemoval}
      type="photo"
    />
  );
}

function usePhotosForm() {
  const [addTrip, { isLoading }] = useAddTripMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const trip = useAppSelector(selectWizardTrip);

  const onSubmit = async (data: TripFile[]) => {
    if (isLoading) {
      return;
    }

    dispatch(setPhotos(data));
    const result = await addTrip({ ...trip, photos: data });

    if (!("error" in result)) {
      navigate(AppRoutes.trips);
      dispatch(resetWizard());
    }
  };

  const onFileStorageRemoval = (data: TripFile[]) => {
    dispatch(setPhotos(data));
  };

  return {
    onSubmit,
    photos: trip.photos,
    onFileStorageRemoval,
    isLoading,
    tripId: trip.id,
  };
}
