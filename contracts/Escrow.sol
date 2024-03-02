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

mapping (uint256 => bool) public isListed;

constructor(address _nftAddress, address payable _seller, address _inspector, address _lender){
  nftAddress = _nftAddress;
  seller = _seller;
  lender= _lender;
  inspector = _inspector;
}
function list(uint256 _nftID) public{
  //Transfer NFT from the seller to the contract
   IERC721(nftAddress).transferFrom(msg.sender, address(this), _nftID);

}
}
 