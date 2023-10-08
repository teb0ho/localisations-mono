import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import LoadingButton from "./LoadingButton";
import {
  createLocalisation,
  updateLocalisation,
} from "../services/localisation-service";
import { Localisation } from "../models/localisation-model";

const AddLocalisationForm = ({
  open,
  onClose,
  localisation,
}: {
  open: boolean;
  onClose: VoidFunction;
  localisation?: Localisation;
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [stringContent, setStringContent] = useState("");

  useEffect(() => {
    setSuccess("");
    if (localisation) setStringContent(localisation?.content);
    else setStringContent("");
  }, [localisation]);

  const addLocalisation = async () => {
    setSuccess("");
    await setLoading(true);
    await createLocalisation(stringContent);

    await setLoading(false);
    setSuccess("Your string was succesfully added 🎉");
    setStringContent("");
  };

  const editLocalisation = async () => {
    if (localisation) {
      await updateLocalisation(localisation.id, stringContent);
      setSuccess("Your string was succesfully updated 🥳");
      setStringContent("");
    }
  };

  const updateOrAdd = async () => {
    if (localisation) await editLocalisation();
    else await addLocalisation();
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" open={open} onClose={onClose}>
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {!localisation ? "Add" : "Update"} String
                </Dialog.Title>
                <div>
                  <input
                    type="text"
                    id="content"
                    placeholder="random string"
                    className="my-4 w-full rounded-md border-gray-200 shadow-sm sm:text-sm peer"
                    value={stringContent}
                    onChange={(e) => {
                      setSuccess("");
                      setStringContent(e.target.value);
                    }}
                    required
                  />
                  {loading ? (
                    <LoadingButton />
                  ) : (
                    <Button
                      primary
                      onClick={async () => {
                        await updateOrAdd();
                      }}
                    >
                      {localisation ? "Update String" : "Save String"}
                    </Button>
                  )}
                  {success !== "" && <p className="mt-4">{success}</p>}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddLocalisationForm;
