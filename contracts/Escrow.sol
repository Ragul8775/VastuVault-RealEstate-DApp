//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}

contract Escrow {
address public lender;
address public inspector;
address payable public seller;
address public nftAddress;

modifier onlySeller(){
  require(msg.sender == seller);
  _;
}
modifier onlyBuyer(uint _nftID){
  require(msg.sender == buyer[_nftID],"Only buyer can call this method");
  _;
}
modifier onlyInspector() {
  require(msg.sender == inspector , "Only inspector can call this method");
  _;
}

mapping (uint256 => bool) public isListed;
mapping (uint256 => uint256)public purchasePrice;
mapping (uint256 => uint256) public escrowAmount;
mapping(uint256 => address) public buyer;
mapping(uint256 => bool) public inspectionPassed;

constructor(address _nftAddress, address payable _seller, address _inspector, address _lender){
  nftAddress = _nftAddress;
  seller = _seller;
  lender= _lender;
  inspector = _inspector;
}
function list(
  uint256 _nftID, 
  address _buyer,
  uint256 _purchasePrice, 
  uint256 _escrowamount)
   public payable onlySeller{
  //Transfer NFT from the seller to the contract
   IERC721(nftAddress).transferFrom(msg.sender, address(this), _nftID);
  isListed[_nftID] = true;
  purchasePrice[_nftID]=_purchasePrice;
  escrowAmount[_nftID]= _escrowamount;
  buyer[_nftID]= _buyer;

}

function depositEarnest(uint _nftID) public payable onlyBuyer(_nftID){
  require(msg.value >= escrowAmount[_nftID]);
}
//Update the inspector status  (only inspector)
function updateInspectionStatus(uint256 _nftID, bool _passed) public onlyInspector{
  inspectionPassed[_nftID] =_passed;
}
receive() external payable {}

function getBalance() public view returns(uint256){
  return address(this).balance;
}

}