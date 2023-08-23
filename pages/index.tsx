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
  loadingAddresses,
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
    document.title = 'Its loading';
    if(account != null) {
      checkWhiteList(account);
    }
}, [library, account]);

  const checkWhiteList = (address: string) => {
    var isWhitelisted = loadingAddresses.includes(address);

    setIsWhitelisted(isWhitelisted);
  };

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
            <a href="https://twitter.com/itsloading_nft" target="_blank">
              <div className="border-2 group transition-all border-[#FFFFFF] hover:bg-[#FFFFFF] flex items-center justify-center px-4 h-16 cursor-pointer">
                <svg
                  width="26"
                  height="21"
                  viewBox="0 0 26 21"
                  className="fill-[#ffffff] group-hover:fill-[#000000]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.1641 5.22019C23.1798 5.44769 23.1798 5.67519 23.1798 5.90479C23.1798 12.9007 17.854 20.9691 8.11556 20.9691V20.9649C5.23879 20.9691 2.42177 20.145 0 18.5913C0.418306 18.6416 0.83871 18.6668 1.26016 18.6679C3.64419 18.67 5.96008 17.87 7.83564 16.397C5.57008 16.3541 3.58339 14.8769 2.88935 12.7204C3.68298 12.8734 4.50073 12.842 5.27968 12.6291C2.80968 12.1301 1.03266 9.95995 1.03266 7.43963V7.37253C1.76863 7.78245 2.59266 8.00995 3.43556 8.03511C1.10919 6.48036 0.392097 3.38552 1.79694 0.96584C4.485 4.2735 8.45105 6.28431 12.7085 6.49713C12.2819 4.65826 12.8648 2.73132 14.2402 1.43866C16.3727 -0.565854 19.7265 -0.463112 21.731 1.66826C22.9167 1.43447 24.0531 0.999388 25.0931 0.382936C24.6979 1.6085 23.8707 2.64955 22.7657 3.31108C23.8152 3.18737 24.8405 2.9064 25.806 2.47761C25.0952 3.54277 24.1999 4.4706 23.1641 5.22019Z" />
                </svg>
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:mt-26 mt-0">
          <h1 className="flex lg:gap-6 gap-2 lg:text-6xl text-2xl font-bold tracking-wide text-white">
            <span className="text-[#FFFFF] font-bold">It's</span> loading
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
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  className="mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.7715 4.25537L18.9658 12.2809L20.9641 7.54596L29.7715 4.25537Z"
                    fill="#E2761B"
                    stroke="#E2761B"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.82145 4.25537L15.5403 12.3569L13.6398 7.54596L4.82145 4.25537ZM25.879 22.8586L23.0011 27.2677L29.1587 28.9619L30.9289 22.9563L25.879 22.8586ZM3.68115 22.9563L5.44047 28.9619L11.5981 27.2677L8.7202 22.8586L3.68115 22.9563Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.254 15.4084L9.53809 18.004L15.6523 18.2755L15.4351 11.7052L11.254 15.4084ZM23.3412 15.4084L19.1058 11.6292L18.9646 18.2755L25.0679 18.004L23.3412 15.4084ZM11.6015 27.2676L15.2722 25.4757L12.101 22.9996L11.6015 27.2676ZM19.323 25.4757L23.0045 27.2676L22.4941 22.9996L19.323 25.4757Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.9958 27.2678L19.3142 25.4759L19.6075 27.8759L19.5749 28.8859L22.9958 27.2678ZM11.5928 27.2678L15.0137 28.8859L14.992 27.8759L15.2635 25.4759L11.5928 27.2678Z"
                    fill="#D7C1B3"
                    stroke="#D7C1B3"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.0781 21.4142L12.0156 20.5129L14.1768 19.5246L15.0781 21.4142ZM19.5199 21.4142L20.4213 19.5246L22.5933 20.5129L19.5199 21.4142Z"
                    fill="#233447"
                    stroke="#233447"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6025 27.2677L12.1238 22.8585L8.72461 22.9563L11.6025 27.2677ZM22.4842 22.8585L23.0055 27.2677L25.8834 22.9563L22.4842 22.8585ZM25.0689 18.0041L18.9656 18.2756L19.5303 21.4141L20.4317 19.5245L22.6037 20.5128L25.0689 18.0041ZM12.0152 20.5128L14.1872 19.5245L15.0777 21.4141L15.6533 18.2756L9.53911 18.0041L12.0152 20.5128Z"
                    fill="#CD6116"
                    stroke="#CD6116"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.53809 18.0041L12.101 22.9997L12.0142 20.5128L9.53809 18.0041ZM22.6027 20.5128L22.4941 22.9997L25.0679 18.0041L22.6027 20.5128ZM15.6523 18.2756L15.0767 21.4141L15.7935 25.1174L15.9564 20.2413L15.6523 18.2756ZM18.9646 18.2756L18.6714 20.2304L18.8017 25.1174L19.5293 21.4141L18.9646 18.2756Z"
                    fill="#E4751F"
                    stroke="#E4751F"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5308 21.4142L18.8031 25.1175L19.3244 25.4758L22.4955 22.9998L22.6041 20.5128L19.5308 21.4142ZM12.0156 20.5128L12.1025 22.9998L15.2736 25.4758L15.7949 25.1175L15.0781 21.4142L12.0156 20.5128Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5749 28.8858L19.6075 27.8758L19.336 27.6369H15.2417L14.992 27.8758L15.0137 28.8858L11.5928 27.2676L12.7874 28.245L15.2092 29.9283H19.3685L21.8012 28.245L22.9958 27.2676L19.5749 28.8858Z"
                    fill="#C0AD9E"
                    stroke="#C0AD9E"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.3213 25.4758L18.8 25.1175H15.7918L15.2705 25.4758L14.999 27.8759L15.2488 27.637H19.343L19.6145 27.8759L19.3213 25.4758Z"
                    fill="#161616"
                    stroke="#161616"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.226 12.8022L31.1491 8.37132L29.7699 4.25537L19.3225 12.0094L23.3407 15.4086L29.0205 17.0702L30.2803 15.6041L29.7373 15.2131L30.6061 14.4203L29.9328 13.8991L30.8016 13.2366L30.226 12.8022ZM3.45605 8.37132L4.37916 12.8022L3.79272 13.2366L4.66152 13.8991L3.99906 14.4203L4.86786 15.2131L4.32486 15.6041L5.57376 17.0702L11.2535 15.4086L15.2718 12.0094L4.82442 4.25537L3.45605 8.37132Z"
                    fill="#763D16"
                    stroke="#763D16"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.0176 17.07L23.3378 15.4084L25.0645 18.004L22.4907 22.9996L25.879 22.9561H30.9289L29.0176 17.07ZM11.2506 15.4084L5.57079 17.07L3.68115 22.9561H8.7202L12.0977 22.9996L9.5347 18.004L11.2506 15.4084ZM18.9612 18.2755L19.3196 12.0092L20.9703 7.54578H13.6398L15.2688 12.0092L15.6489 18.2755L15.7792 20.252L15.7901 25.1173H18.7983L18.82 20.252L18.9612 18.2755Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    strokeWidth="0.1086"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

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

                    const leafNodes = loadingAddresses.map((address) =>
                      keccak256(address)
                    );

                    const tree = new MerkleTree(leafNodes, keccak256, {
                      sortPairs: true,
                    });
                    const hash = tree.getRoot();

                    const buf2hex = (x) => "0x" + x.toString("hex");

                    console.log(buf2hex(hash));
                    var isSproutListSaleOn = await contract.whiteListSale();

                    if (isSproutListSaleOn) {
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
