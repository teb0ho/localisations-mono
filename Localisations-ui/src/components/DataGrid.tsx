import { useRef, useState } from "react";
import { Localisation } from "../models/localisation-model";
import { deleteLocalisation } from "../services/localisation-service";
import ConfirmationModal from "./ConfirmationModal";

const DataGrid = ({
  localisations,
  refreshData,
  editLocalisation,
}: {
  localisations: Localisation[];
  refreshData: VoidFunction;
  editLocalisation: (localisation: Localisation) => void;
}) => {
  const [open, setOpen] = useState(false);
  let localisationId = useRef(0);

  const handleModalClose = async (commited: boolean) => {
    if (commited) {
      await deleteLocalisation(localisationId.current);
      refreshData();
    }

    setOpen(false);
  };

  return (
    <div className="overflow-x-auto block">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="text-left">
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Id
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Content
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Date Created
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {localisations.map((local) => (
            <tr key={local.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {local.id}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {local.content}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {new Date(local.created).toLocaleDateString("en-GB")}
              </td>
              <td>
                <a
                  className="cursor-pointer text-blue-700 underline mr-2"
                  onClick={() => editLocalisation(local)}
                >
                  edit
                </a>
                <a
                  className="cursor-pointer text-red-400 underline"
                  onClick={async () => {
                    localisationId.current = local.id;
                    await setOpen(true);
                  }}
                >
                  delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmationModal open={open} onClose={handleModalClose} />
    </div>
  );
};

export default DataGrid;
