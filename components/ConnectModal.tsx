import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injected, walletlink } from "../web3/connectors";

export default function ConnectModal({ setOpen, walletSelected }) {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
              className="inline-block align-bottom bg-[#1F2A39] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-sm sm:w-full"
              style={{
                border: "1.26536px solid #23263D",
              }}
            >
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={() => setOpen(false)}
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

                <div className="flex-col flex justify-center items-center">
                  <p className="text-white font-medium text-2xl">
                    Connect your wallet
                  </p>

                  <button
                    className="bg-transparent transition-colors border-[1px] border-[#3F5169]   hover:border-[#2A3749] hover:bg-[#2A3749] hover:shadow-xl rounded-[9px] h-[60px] w-9/12 mt-4  flex items-center"
                    onClick={() => {
                      activate(injected);
                      walletSelected(account);
                      setOpen(false);
                    }}
                  >
                    <svg
                      className="ml-5 h-10 w-10"
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        y="0.232422"
                        width="25.9856"
                        height="24.5347"
                        fill="url(#pattern0)"
                      />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_82:1083"
                            transform="translate(-0.0659898 -0.0698925) scale(0.00507614 0.00537634)"
                          />
                        </pattern>
                        <image
                          id="image0_82:1083"
                          width="225"
                          height="225"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>

                    <p className="text-white font-normal ml-5 ">Metamask</p>
                  </button>
                  <button
                    className="bg-transparent transition-colors border-[1px] border-[#3F5169]   hover:border-[#2A3749] hover:bg-[#2A3749] hover:shadow-xl rounded-[9px] h-[60px] w-9/12 mt-4  flex items-center"
                    onClick={() => {
                      activate(walletlink);
                      walletSelected(account);
                      setOpen(false);
                    }}
                  >
                    <svg
                      width="48"
                      className="ml-4"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="31.9249"
                        cy="32.0755"
                        r="31.6341"
                        fill="#0A59FF"
                      />
                      <circle
                        cx="31.9248"
                        cy="32.0754"
                        r="20.2458"
                        fill="white"
                      />
                      <rect
                        x="25.5491"
                        y="25.6997"
                        width="12.7515"
                        height="12.7515"
                        rx="1.26536"
                        fill="#0A59FF"
                      />
                    </svg>
                    <p className="text-white font-normal ml-5 ">Coinbase</p>
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
