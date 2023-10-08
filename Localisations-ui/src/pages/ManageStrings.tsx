import { useEffect, useState } from "react";
import {
  getLocalisations,
  searchLocalisation,
} from "../services/localisation-service";
import { Localisation } from "../models/localisation-model";
import Button from "../components/Button";
import DataGrid from "../components/DataGrid";
import AddLocalisationForm from "../components/AddLocalisationForm";
import Search from "../components/Search";
import EmptyState from "../components/EmptyState";

const ManageStrings = () => {
  const [localisationsList, setLocalisations] = useState<Localisation[]>([]);
  const [localisation, setLocalisation] = useState<Localisation | undefined>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const localisations = await getLocalisations();

        setLocalisations(localisations);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const queryData = async (query: string) => {
    if (query === "") {
      await getDataAndSetData();
    } else {
      const results = await searchLocalisation(query);
      await setLocalisations(results);
    }
  };

  const getDataAndSetData = async () => {
    const allData = await getLocalisations();
    await setLocalisations(allData);
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-center font-bold text-2xl">Manage Strings</h1>
      </div>
      <div className="flex justify-between">
        <Search onSearch={queryData} />
        <Button
          primary
          className="mb-6 p-2 w-52"
          onClick={async () => {
            await setLocalisation(undefined);
            await setOpen(true);
          }}
        >
          Add New String
        </Button>
        <AddLocalisationForm
          open={open}
          onClose={async () => {
            setOpen(false);
            await getDataAndSetData();
          }}
          localisation={localisation}
        />
      </div>
      {localisationsList.length ? (
        <DataGrid
          localisations={localisationsList}
          refreshData={getDataAndSetData}
          editLocalisation={(localisation) => {
            setLocalisation(localisation);
            setOpen(true);
          }}
        />
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default ManageStrings;
