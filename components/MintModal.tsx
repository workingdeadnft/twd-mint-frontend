import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function MintModal({ setMintPending }) {
  const cancelButtonRef = useRef(null);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(true);

  setTimeout(() => {
    setPending(false);
    setSuccess(true);
  }, 5000);

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setMintPending}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#04050E] bg-opacity-80 transition-opacity backdrop-blur-[3px]" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block w-full align-bottom bg-[#1F2A39] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-sm sm:w-full"
              style={{
                border: "1.26536px solid #23263D",
              }}
            >
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={() => setMintPending(false)}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41L8.59 0Z"
                      fill="#4F627D"
                    />
                  </svg>
                </div>

                <div className="flex justify-center items-center">
                  {pending ? (
                    <div className="flex flex-col justify-center items-center gap-2 mb-2">
                      <img className="h-16 w-16" src="/images/loading.gif" />
                      <p className="text-white">Minting in progress</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {success ? (
                    <div className="flex flex-col justify-center items-center gap-2 mb-2">
                      <p className="text-white flex items-center gap-1">
                        View your transaction{" "}
                        <a
                          style={{ color: "#B0EA65" }}
                          className="flex items-center"
                          href=""
                        >
                          here{" "}
                          <svg
                            width="20"
                            className="ml-1"
                            height="10"
                            viewBox="0 0 20 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.17 6L13.59 8.59L15 10L20 5L15 0L13.59 1.41L16.17 4H0V6H16.17Z"
                              fill="#B0EA65"
                            />
                          </svg>
                        </a>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {fail ? (
                    <div className="flex flex-col justify-center items-center gap-2 mb-2">
                      <svg
                        width="59"
                        height="58"
                        viewBox="0 0 59 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.9983 58C21.3054 58.0069 13.9255 54.954 8.48577 49.5142C3.04603 44.0745 -0.00690949 36.6946 1.17425e-05 29.0017V28.4217C0.237183 16.7998 7.3882 6.44145 18.1714 2.10013C28.9546 -2.24118 41.288 0.272758 49.5117 8.48829C57.8123 16.782 60.2966 29.2607 55.8053 40.1012C51.314 50.9416 40.7323 58.0069 28.9983 58ZM28.9983 33.0904L36.5089 40.601L40.5976 36.5122L33.0871 29.0017L40.5976 21.4911L36.5089 17.4024L28.9983 24.9129L21.4878 17.4024L17.399 21.4911L24.9096 29.0017L17.399 36.5122L21.4878 40.601L28.9983 33.0933V33.0904Z"
                          fill="#ED3D52"
                        />
                      </svg>

                      <p className="text-white">Minting failed</p>
                      <p
                        onClick={() => {
                          setFail(false);
                          setPending(true);
                        }}
                        className="text-[#4E5E73] cursor-pointer flex items-center justify-center"
                      >
                        Try again
                        <svg
                          width="20"
                          height="10"
                          className="ml-2"
                          viewBox="0 0 20 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.17 6L13.59 8.59L15 10L20 5L15 0L13.59 1.41L16.17 4H0V6H16.17Z"
                            fill="#4E5E73"
                          />
                        </svg>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
