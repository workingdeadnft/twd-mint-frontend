import { MerkleTree } from "merkletreejs";
import { useState } from "react";
import ConnectModal from "../components/ConnectModal";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
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
<<<<<<< Updated upstream
  sproutListAddresses
=======
  twdListAddresses,
>>>>>>> Stashed changes
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
  const walletSelected = (wallet: string) => {
    // setLoggedIn(true); /* Dummy placeholder */
  };

<<<<<<< Updated upstream
=======
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [isNotWhitelisted, setIsNotWhitelisted] = useState(false);

  useEffect(() => {
    document.title = 'The Working Dead';
    if(account != null) {
      checkWhiteList(account);
    }
}, [library, account]);

  const checkWhiteList = (address: string) => {
    setIsWhitelisted(false);
  };

  const formatAddress = (address: string) => {
    const firstPart = address.substring(0, 6);
    const secondPart = address.substring(address.length - 3, address.length);
    return `${firstPart}...${secondPart}`;
  };

>>>>>>> Stashed changes
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
          backgroundColor: "#141D2A",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        id="mainContainer"
        className="w-full md:h-screen min-h-screen  h-auto flex flex-col justify-center items-center gap-16"
      >
<<<<<<< Updated upstream
        <h1
          style={{ fontFamily: "Druk Wide" }}
          className="text-white uppercase text-center md:text-7xl text-4xl md:mt-0 mt-6 "
        >
          <h1 style={{ fontFamily: "Druk Wide", color: "#B0EA65" }}>Sprouts Mint</h1>
        </h1>

        <div className="flex flex-wrap gap-4 px-4">
          {account ? (
            <button
              style={{
                background: "#B0EA65",
                color: "#66863C",
                boxShadow: " 0px 0px 17px 0px rgba(176,234,101,0.75)",
              }}
              className="flex hover:shadow-xl py-4 md:w-48  w-full font-semibold  gap-4  text-xs items-center justify-center "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
=======
        <div className="flex md:p-16 md:mt-0 mt-16 ">
          <div className="md:flex h gap-8 items-center">
          </div>
          <div className="flex lg:ml-auto lg:mx-0 mx-auto md:gap-6 gap-2 items-center">
            <div className="border-2 border-[#fff] md:px-12 px-6 h-16 flex items-center justify-center rounded-xl">
              {account && (
                <p className="text-[#fff] font-medium tracking-widest">
                  {formatAddress(account)}
                </p>
              )}
              {!account && (
                <p className="text-[#fff] font-medium">NOT CONNECTED</p>
              )}
            </div>
            <a href="https://twitter.com/workingdeadnft" target="_blank">
              <div className="border-2 group transition-all border-[#fff] hover:bg-[#fff] flex items-center justify-center rounded-xl px-4 h-16 cursor-pointer">
                <svg
                  width="26"
                  height="21"
                  viewBox="0 0 26 21"
                  className="fill-[#fff] group-hover:fill-[#161B1A]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.1641 5.22019C23.1798 5.44769 23.1798 5.67519 23.1798 5.90479C23.1798 12.9007 17.854 20.9691 8.11556 20.9691V20.9649C5.23879 20.9691 2.42177 20.145 0 18.5913C0.418306 18.6416 0.83871 18.6668 1.26016 18.6679C3.64419 18.67 5.96008 17.87 7.83564 16.397C5.57008 16.3541 3.58339 14.8769 2.88935 12.7204C3.68298 12.8734 4.50073 12.842 5.27968 12.6291C2.80968 12.1301 1.03266 9.95995 1.03266 7.43963V7.37253C1.76863 7.78245 2.59266 8.00995 3.43556 8.03511C1.10919 6.48036 0.392097 3.38552 1.79694 0.96584C4.485 4.2735 8.45105 6.28431 12.7085 6.49713C12.2819 4.65826 12.8648 2.73132 14.2402 1.43866C16.3727 -0.565854 19.7265 -0.463112 21.731 1.66826C22.9167 1.43447 24.0531 0.999388 25.0931 0.382936C24.6979 1.6085 23.8707 2.64955 22.7657 3.31108C23.8152 3.18737 24.8405 2.9064 25.806 2.47761C25.0952 3.54277 24.1999 4.4706 23.1641 5.22019Z" />
                </svg>
              </div>{" "}
            </a>
            <a href="https://discord.gg/jdw93xMYst" target="_blank">
              <div className="border-2 transition-all group border-[#fff] hover:bg-[#fff] flex items-center justify-center rounded-xl px-4 h-16 cursor-pointer">
                <svg
                  width="26"
                  height="21"
                  viewBox="0 0 26 21"
                  className="fill-[#fff] group-hover:fill-[#161B1A]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.8566 1.86255C21.1358 1.07293 19.2904 0.491175 17.3609 0.15798C17.3257 0.151549 17.2906 0.167619 17.2725 0.199761C17.0352 0.621878 16.7723 1.17256 16.5882 1.6054C14.513 1.29471 12.4483 1.29471 10.4156 1.6054C10.2315 1.16294 9.95905 0.621878 9.72065 0.199761C9.70255 0.168692 9.66744 0.152621 9.63231 0.15798C7.7039 0.49011 5.85851 1.07186 4.13655 1.86255C4.12164 1.86897 4.10887 1.8797 4.10039 1.89362C0.600066 7.12302 -0.358819 12.2239 0.111578 17.2615C0.113706 17.2862 0.127541 17.3097 0.146698 17.3247C2.45611 19.0207 4.69317 20.0503 6.88869 20.7328C6.92383 20.7435 6.96106 20.7306 6.98342 20.7017C7.50277 19.9925 7.96572 19.2447 8.36266 18.4582C8.38609 18.4122 8.36372 18.3575 8.31585 18.3393C7.58152 18.0608 6.8823 17.7211 6.2097 17.3354C6.15649 17.3044 6.15224 17.2283 6.20118 17.1919C6.34272 17.0858 6.4843 16.9754 6.61945 16.864C6.6439 16.8437 6.67797 16.8394 6.70672 16.8522C11.1254 18.8697 15.9092 18.8697 20.2758 16.8522C20.3046 16.8383 20.3386 16.8426 20.3642 16.8629C20.4994 16.9744 20.6409 17.0858 20.7835 17.1919C20.8324 17.2283 20.8292 17.3044 20.776 17.3354C20.1034 17.7286 19.4042 18.0608 18.6688 18.3383C18.6209 18.3565 18.5997 18.4122 18.6231 18.4582C19.0285 19.2435 19.4915 19.9914 20.0013 20.7006C20.0226 20.7306 20.0608 20.7435 20.096 20.7328C22.3022 20.0503 24.5392 19.0207 26.8486 17.3247C26.8688 17.3097 26.8816 17.2872 26.8837 17.2626C27.4467 11.4385 25.9408 6.37949 22.8917 1.89468C22.8843 1.8797 22.8715 1.86897 22.8566 1.86255ZM9.02253 14.1941C7.69219 14.1941 6.59602 12.9728 6.59602 11.4728C6.59602 9.97289 7.67093 8.75154 9.02253 8.75154C10.3847 8.75154 11.4703 9.98361 11.449 11.4728C11.449 12.9728 10.3741 14.1941 9.02253 14.1941ZM17.9941 14.1941C16.6638 14.1941 15.5676 12.9728 15.5676 11.4728C15.5676 9.97289 16.6425 8.75154 17.9941 8.75154C19.3563 8.75154 20.4419 9.98361 20.4206 11.4728C20.4206 12.9728 19.3563 14.1941 17.9941 14.1941Z" />
                </svg>
              </div>{" "}
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:mt-26 mt-0">
          <h1 className="flex lg:gap-6 gap-2 lg:text-6xl text-2xl font-bold tracking-wide text-white">
            <span className="text-[#FFF] font-bold">THE WORKING</span> DEAD
          </h1>
          {!isWhitelisted && !isNotWhitelisted && (
            <div className="md:flex-row flex-col flex items-center lg:mt-12 mt-4 3xl:w-2/12 xl:w-5/12 w-8/12 px-12">
              <div className="flex items-center lg:pr-12 lg:text-2xl text-md tracking-widest md:mr-auto gap-1 text-white text-opacity-40">
                PRICE: <span className="text-[#FFF]">FREE</span>
              </div>
              <div className="flex items-center lg:text-2xl lg:pl-12 text-md tracking-widest md:ml-auto gap-3 text-white text-opacity-40">
                SUPPLY: <span className="text-[#FFF]">5000</span>
              </div>
            </div>
          )}{" "}
          {isWhitelisted && account && (
            <div className="md:flex-row flex-col flex justify-center items-center lg:mt-12 mt-4 3xl:w-3/12 xl:w-8/12 w-full px-12 xl:px-0">
              <div className="flex md:flex-row flex-col items-center justify-center lg:text-2xl md:text-md text-sm tracking-widest   text-white text-opacity-40">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_42_174)">
                    <path
                      d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z"
                      fill="#fff"
                      fillOpacity="0.25"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M11.5 16L14.5 19L20.5 13M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16Z"
                      stroke="#fff"
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
                        values="0 0 0 0 0.33333 0 0 0 0 0.925 0 0 0 0 0.158021 0 0 0 0.25 0"
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
                <span className="text-[#fff] ml-2">CONGRATS!</span>
                &nbsp;&nbsp;YOU ARE WHITELISTED!
              </div>
            </div>
          )}
          {isNotWhitelisted && account && (
            <div className="md:flex-row flex-col flex justify-center items-center lg:mt-12 mt-4 3xl:w-3/12 xl:w-8/12 w-full px-12 xl:px-0">
              <div className="flex md:flex-row flex-col items-center justify-center lg:text-2xl md:text-md text-sm tracking-widest   text-white text-opacity-40">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_71_2)">
                    <path
                      d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z"
                      fill="#F23838"
                      fill-opacity="0.25"
                      shape-rendering="crispEdges"
                    />
                    <path
                      d="M19 13L13 19M13 13L19 19M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16Z"
                      stroke="#F23838"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_71_2"
                      x="0"
                      y="0"
                      width="32"
                      height="32"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        values="0 0 0 0 0.94902 0 0 0 0 0.219608 0 0 0 0 0.219608 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_71_2"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_71_2"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <span className="text-[#F23939] ml-2">ERROR!</span>
                &nbsp;&nbsp;NOT ON THE WHITELIST!
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 px-4">
          <div className="xl:w-6/12 w-full flex items-center justify-center">
            {!account && (
              <button
                onClick={() => setOpen(true)}
                style={{ background: "#fff" }}
                className="flex py-6 box-shadow-green text-xl rounded-xl  font-semibold xl:w-6/12 w-full gap-4  text-[#161B1A] items-center justify-center "
>>>>>>> Stashed changes
              >
                <path
                  d="M12 14H2C0.89543 14 0 13.1046 0 12V2C0 0.89543 0.89543 0 2 0H12C13.1046 0 14 0.89543 14 2V12C14 13.1046 13.1046 14 12 14ZM2 2V12H12V2H2ZM6 10.362L3.3 7.715L4.7 6.285L6 7.556L9.3 4.289L10.7 5.711L6 10.361V10.362Z"
                  fill="#66863C"
                />
              </svg>

<<<<<<< Updated upstream
              <p>Wallet Connected</p>
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              style={{ background: "#2A3442" }}
              className="flex  hover:shadow-xl py-4 md:w-48 w-full font-semibold  gap-4  text-xs text-white items-center justify-center "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 14H2C0.89543 14 0 13.1046 0 12V2C0 0.89543 0.89543 0 2 0H12C13.1046 0 14 0.89543 14 2V12C14 13.1046 13.1046 14 12 14ZM2 2V12H12V2H2Z"
                  fill="#4E5969"
                />
              </svg>

              <p> Connect Wallet</p>
            </button>
          )}

          {account ? (
            <button
              style={{ border: "1px solid #B0EA65", boxSizing: "border-box" }}
              className="hover:shadow-xl py-4 md:w-48 w-full font-semibold text-xs flex gap-4 text-white items-center justify-center "
              onClick={async() => {
                  let signer: any = library.getSigner(account) as any;
                  const contract = new ethers.Contract(
                    contract_address,
                    contract_abi,
                    signer
                  );

                const leafNodes = sproutListAddresses.map(address => keccak256(address));
                const tree = new MerkleTree(leafNodes, keccak256, { sortPairs : true });
                const hash = tree.getRoot();

                const buf2hex = x => '0x' + x.toString('hex');

                console.log(hash);

                console.log(buf2hex(hash));

                var isPublicSaleOn = await contract.publicSale();
                var isSproutListSaleOn = await contract.whiteListSale();

                console.log(isPublicSaleOn);

                 if(isPublicSaleOn) {
                    contract.mint()
                    .then((res) => {
                      window.alert(`Mint successful\n${JSON.stringify(res.message)}`);
                    })
                    .catch((err) => {
                      window.alert(`Mint failed\n${JSON.stringify(err.message)}`);
=======
                <p className="tracking-widest">CONNECT WALLET</p>
              </button>
            )}
            {account && !isWhitelisted && !isNotWhitelisted && (
              <div className="flex gap-8 md:flex-row flex-col  w-full">
                <button
                  style={{ background: "#fff" }}
                  className="flex py-6 box-shadow-green text-xl rounded-xl  font-semibold w-full gap-4  text-[#161B1A] items-center justify-center "
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
                  <p className="tracking-widest">PUBLIC MINT</p>
                </button>{" "}
              </div>
            )}{" "}
            {account && isWhitelisted && (
              <div className="flex md:gap-8 gap-4 md:flex-row flex-col  w-4/12">
                <button
                  className="flex py-6 box-shadow-green text-xl rounded-xl  bg-[#fff]   font-semibold w-full gap-4  text-[#161B1A] items-center justify-center "
                  onClick={async () => {
                    let signer: any = library.getSigner(account) as any;
                    const contract = new ethers.Contract(
                      contract_address,
                      contract_abi,
                      signer
                    );

                    const leafNodes = twdListAddresses
                        .map((a) => a.toLowerCase())
                        .map((a) => keccak256(a));
                    const merkleTree = new MerkleTree(leafNodes, keccak256, {
                      sortPairs: true,
>>>>>>> Stashed changes
                    });
                 }
                 else if(isSproutListSaleOn) {

<<<<<<< Updated upstream
const address = await signer.getAddress();
=======
                    var istwdListSaleOn = await contract.whiteListSale();
                    if (istwdListSaleOn) {
                      const address = await signer.getAddress();
>>>>>>> Stashed changes


<<<<<<< Updated upstream
                  const proof = tree.getProof(keccak256(address)).map(x => x.data);
                  console.log(address)
console.log(proof);
                  contract.whitelistMint(proof)
                  .then((res) => {
                    window.alert(`Mint successful\n${JSON.stringify(res.message)}`);
                  })
                  .catch((err) => {
                    window.alert(`Mint failed\n${JSON.stringify(err.message)}`);
                  });
                 }
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4444 14H1.55556C0.696446 14 0 13.3036 0 12.4444V1.55556C0 0.696446 0.696446 0 1.55556 0H12.4444C13.3036 0 14 0.696446 14 1.55556V12.4444C14 13.3036 13.3036 14 12.4444 14ZM1.55556 1.55556V12.4444H12.4444V1.55556H1.55556ZM7.77778 10.8889H6.22222V7.77778H3.11111V6.22222H6.22222V3.11111H7.77778V6.22222H10.8889V7.77778H7.77778V10.8889Z"
                  fill="#B0EA65"
                />
              </svg>
              <p style={{ color: "#B0EA65" }}> Mint</p>
            </button>
          ) : (
            <button
              style={{ border: "1px solid #394556", boxSizing: "border-box" }}
              className="hover:shadow-xl py-4 md:w-48 w-full font-semibold text-xs   flex gap-4 text-white items-center justify-center "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4444 14H1.55556C0.696446 14 0 13.3036 0 12.4444V1.55556C0 0.696446 0.696446 0 1.55556 0H12.4444C13.3036 0 14 0.696446 14 1.55556V12.4444C14 13.3036 13.3036 14 12.4444 14ZM1.55556 1.55556V12.4444H12.4444V1.55556H1.55556ZM7.77778 10.8889H6.22222V7.77778H3.11111V6.22222H6.22222V3.11111H7.77778V6.22222H10.8889V7.77778H7.77778V10.8889Z"
                  fill="#394556"
                />
              </svg>
              <p style={{ color: "#394556" }}> Mint</p>
            </button>
          )}
        </div>
=======
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
            )}{" "}
            {account && isNotWhitelisted && (
              <div className="flex md:gap-8 gap-4 md:flex-row flex-col  w-8/12">
                <button
                  className="flex py-6 box-shadow-green text-xl rounded-xl  bg-[#fff]   font-semibold w-full gap-4  text-[#161B1A] items-center justify-center "
                  onClick={async () => {
                    window.open("https://opensea.io/collection/wlcc", "_blank");
                  }}
                >
                  <p className="tracking-widest font-semibold">
                    <span className="font-bold">GET A WLCC</span>&nbsp;NOW JOIN
                    THE ECOSYSTEM!
                  </p>
                </button>
              </div>
            )}
          </div>
        </div>{" "}
>>>>>>> Stashed changes
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
