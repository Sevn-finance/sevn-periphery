// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

interface ISevnCallee {
    function sevnCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
