import { MerkleTree } from "merkletreejs";
import { useEffect, useState } from "react";
import ConnectModal from "../components/ConnectModal";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig: ToastOptions = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
import { ethers } from "ethers";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { keccak256 } from "@ethersproject/keccak256";
import {
  contract_abi,
  contract_address,
  twdAddresses,
} from "../web3/constants";

function App() {
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
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  useEffect(() => {
    document.title = 'The Working Dead';
    if(account != null) {
      checkWhiteList(account);
    }
}, [library, account]);

  const checkWhiteList = (address: string) => {
    var userAddress = address;
    var isWhitelisted = twdAddresses.includes(userAddress);
    if(isWhitelisted) {
      setIsWhitelisted(isWhitelisted);
    }

    var addressToLower = userAddress.toLowerCase();
    var isWhitelisted = twdAddresses.includes(addressToLower);
    if(isWhitelisted) {
      setIsWhitelisted(isWhitelisted);
    }
  };

  console.log(isWhitelisted);

  const walletSelected = (wallet: string) => {
    // setLoggedIn(true); /* Dummy placeholder */
  };

  const formatAddress = (address: string) => {
    const firstPart = address.substring(0, 6);
    const secondPart = address.substring(address.length - 3, address.length);

    return `${firstPart}...${secondPart}`;
  };
  
  return (
    <>
      <ToastContainer
        theme="dark"
        style={{ width: "400px" }}
        toastClassName="font-bold  border-[1px] bg-[#1F2A39] border-[#23263D] rounded-[10px] w-2xl"
      />
      {open ? (
        <ConnectModal setOpen={setOpen} walletSelected={walletSelected} />
      ) : (
        ""
      )}
      <div
        style={{
          backgroundColor: "#000000",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        id="mainContainer"
        className=" md:h-screen min-h-screen w-full  h-auto flex flex-col  gap-16"
      >
        <div className="flex md:p-16 md:mt-0 mt-16 ">
          <div className="flex lg:ml-auto lg:mx-0 mx-auto md:gap-6 gap-2 items-center">
            <div className="border-2 border-[#FFFFF] md:px-12 px-6 h-16 flex items-center justify-center">
              {account && (
                <p className="text-[#FFFFFF] font-medium tracking-widest">
                  {formatAddress(account)}
                </p>
              )}
              {!account && (
                <p className="text-[#FFFFFF] font-medium">NOT CONNECTED</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:mt-26 mt-0">
          <h1 className="flex lg:gap-6 gap-2 lg:text-6xl text-2xl font-bold tracking-wide text-white">
            <span className="text-[#FFFFF] font-bold">THE WORKING</span> DEAD
          </h1>
          {!isWhitelisted && (
            <div className="md:flex-row flex-col flex items-center lg:mt-12 mt-4 3xl:w-3/12 xl:w-6/12 w-full px-12 xl:px-0">
            </div>
          )}{" "}
          {isWhitelisted && (
            <div className="md:flex-row flex-col flex justify-center items-center lg:mt-12 mt-4 3xl:w-3/12 xl:w-8/12 w-full px-12 xl:px-0">
              <div className="flex md:flex-row flex-col items-center justify-center lg:text-2xl md:text-md text-sm tracking-widest   text-white text-opacity-40">
                <svg
                  width="32"
                  height="32"
                  className="mt-1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_42_174)">
                    <path
                      d="M11.5 16L14.5 19L20.5 13M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16Z"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_42_174"
                      x="0"
                      y="0"
                      width="32"
                      height="32"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.33333 0 0 0 0 0.925 0 0 0 0 0.158021 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_42_174"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_42_174"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <span className="text-[#FFFFFF] ml-2">CONGRATULATIONS!</span>
                &nbsp;&nbsp;YOU ARE WHITELISTED!
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 px-4">
          <div className="xl:w-6/12 w-full flex items-center justify-center">
            {!account && (
              <button
                onClick={() => setOpen(true)}
                style={{ background: "#FFFFFF" }}
                className="flex py-6 box-shadow-green text-xl font-semibold w-full gap-4  text-[#161B1A] items-center justify-center "
              >
                <p className="tracking-widest">CONNECT WALLET</p>
              </button>
            )}
            {account && !isWhitelisted && (
              <div className="flex gap-8 md:flex-row flex-col  w-full">
                <button
                  style={{ background: "#FFFFFF" }}
                  className="flex py-6 box-shadow-green text-xl font-semibold w-full gap-4  text-[#161B1A] items-center justify-center "
                   onClick={async () => {
                    let signer: any = library.getSigner(account) as any;
                    const contract = new ethers.Contract(
                      contract_address,
                      contract_abi,
                      signer
                    );

                    var isPublicSaleOn = await contract.publicSale();
                    if(!isPublicSaleOn) {
                      window.alert(
                        `Public sale is not activated yet!`
                      );
                    }
                    else {
                      contract
                        .mint()
                        .then((res) => {
                          window.alert(
                            `Mint successful`
                          );
                        })
                        .catch((err) => {
                          window.alert(
                            `Mint failed\n${JSON.stringify(err.message)}`
                          );
                        });
                    } 
                  }} 
                >
                  <p className="tracking-widest disabled">MINT</p>
                </button>{" "}
              </div>
            )}{" "}
            {account && isWhitelisted && (
              <div className="flex md:gap-8 gap-4 md:flex-row flex-col  w-6/12">
                <button
                  className="flex py-6 text-xl bg-[#FFFFFF] font-semibold w-full gap-4  text-[#161B1A] items-center justify-center "
                  onClick={async () => {
                    let signer: any = library.getSigner(account) as any;
                    const contract = new ethers.Contract(
                      contract_address,
                      contract_abi,
                      signer
                    );

                    const leafNodes = twdAddresses.map(x => keccak256(x));

                    const tree = new MerkleTree(leafNodes, keccak256, {
                      sortPairs: true,
                    });
                    const hash = tree.getRoot();

                    const buf2hex = (x) => "0x" + x.toString("hex");

                    console.log(buf2hex(hash));
                    var whitelistSaleOpen = await contract.whiteListSale();

                    if (whitelistSaleOpen) {
                      const address = await signer.getAddress();

                      const proof = tree.getProof(keccak256(address)).map((x) => x.data);

                      contract
                        .whitelistMint(proof)
                        .then((res) => {
                          window.alert(
                            `Mint successful`
                          );
                        })
                        .catch((err) => {
                          window.alert(
                            `Mint failed\n${JSON.stringify(err.message)}`
                          );
                        });
                    }
                    else {
                      window.alert(
                        `Whitelist sale is not activated yet!`
                      );
                    }
                  }}
                >
                  <p className="tracking-widest">MINT</p>
                </button>
              </div>
            )}
          </div>
        </div>
  {" "}
      </div>
    </>
  );
}

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default function Named() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  );
}
