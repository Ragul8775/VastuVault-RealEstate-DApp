const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  let buyer, seller, inspector, lender;
  let realEstate, escrow;
  beforeEach(async () => {
    [buyer, seller, inspector, lender] = await ethers.getSigners();

    //Deploy RealEstate
    const RealEstate = await ethers.getContractFactory("RealEstate");
    realEstate = await RealEstate.deploy();
    await realEstate.deployed();

    //Mint
    let transaction = await realEstate
      .connect(seller)
      .mint(
        "https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/1.json"
      );
    await transaction.wait();
    const Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(
      realEstate.address,
      seller.address,
      inspector.address,
      lender.address
    );
  });
  describe("Deployment", () => {
    it("Returns Nst Address", async () => {
      const result = await escrow.nftAddress();
      expect(result).to.equal(realEstate.address);
    });
    it("Returns Seller", async () => {
      const result = await escrow.seller();
      expect(result).to.equal(seller.address);
    });
    it("Returns Inspector", async () => {
      const result = await escrow.inspector();
      expect(result).to.equal(inspector.address);
    });
    it("Returns Lender", async () => {
      const result = await escrow.lender();
      expect(result).to.equal(lender.address);
    });
  });
});
