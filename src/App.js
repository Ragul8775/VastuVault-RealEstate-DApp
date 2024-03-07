import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Compone
import Search from "./components/Search";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
// ABIs
import RealEstate from "./abis/RealEstate.json";
import Escrow from "./abis/Escrow.json";

// Config
import config from "./config.json";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [escrow, setEscrow] = useState(null);

  const loadBlockChainData = async () => {
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(web3Provider);

    const network = await web3Provider.getNetwork();

    const realEstate = new ethers.Contract(
      config[network.chainId].realEstate.address,
      RealEstate,
      provider
    );
    const totalSupply = await realEstate.totalSupply();

    const escrow = new ethers.Contract(
      config[network.chainId].escrow.address,
      Escrow,
      provider
    );
    setEscrow(escrow);

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]); // Corrected variable name here
      setAccount(account);
    });
  };

  useEffect(() => {
    loadBlockChainData();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <Search />
      <div className="cards__section">
        <div class="line-container">
          <div className="line"></div>
          <div className="text">Homes For You</div>
          <div className="line"></div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card__image">
              <img alt="Home" src="" />
            </div>
            <div className="card__info">
              <h4>1 ETH</h4>
              <p>
                <strong>1</strong>bds 1<strong>2</strong>ba 1<strong>3</strong>
                sqft
              </p>
              <p>1234 Elmes St</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
