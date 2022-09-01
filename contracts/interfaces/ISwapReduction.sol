pragma solidity =0.6.6;


interface ISwapReduction {
    function swap(address account, address input, address output, uint256 amount) external returns (bool);
}