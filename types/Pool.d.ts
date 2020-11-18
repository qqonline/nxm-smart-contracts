/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface PoolContract extends Truffle.Contract<PoolInstance> {
  "new"(
    _assets: string[],
    _minAmounts: (number | BN | string)[],
    _maxAmounts: (number | BN | string)[],
    _master: string,
    _router: string,
    _twapOracle: string,
    _swapController: string,
    meta?: Truffle.TransactionDetails
  ): Promise<PoolInstance>;
}

export interface Swapped {
  name: "Swapped";
  args: {
    fromAsset: string;
    toAsset: string;
    amountIn: BN;
    amountOut: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
  };
}

type AllEvents = Swapped;

export interface PoolInstance extends Truffle.ContractInstance {
  ETH(txDetails?: Truffle.TransactionDetails): Promise<string>;

  MAX_SLIPPAGE(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  MAX_TRADABLE_PAIR_LIQUIDITY(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  addAsset: {
    (
      _asset: string,
      _min: number | BN | string,
      _max: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _asset: string,
      _min: number | BN | string,
      _max: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _asset: string,
      _min: number | BN | string,
      _max: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _asset: string,
      _min: number | BN | string,
      _max: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  assets(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  changeMasterAddress: {
    (masterAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      masterAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      masterAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      masterAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getAssetDetails(
    _asset: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BN, BN, BN, BN]>;

  getAssets(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  getSwapQuote(
    tokenAmountIn: number | BN | string,
    fromToken: string,
    toToken: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  lastSwapTime(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  master(txDetails?: Truffle.TransactionDetails): Promise<string>;

  maxAmount(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  minAmount(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  removeAsset: {
    (_asset: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_asset: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _asset: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _asset: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  router(txDetails?: Truffle.TransactionDetails): Promise<string>;

  sendEther: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  setAssetMinMax: {
    (
      _asset: string,
      _min: number | BN | string,
      _max: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _asset: string,
      _min: number | BN | string,
      _max: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _asset: string,
      _min: number | BN | string,
      _max: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _asset: string,
      _min: number | BN | string,
      _max: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swapAssetForETH: {
    (
      fromTokenAddress: string,
      amountIn: number | BN | string,
      amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      fromTokenAddress: string,
      amountIn: number | BN | string,
      amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      fromTokenAddress: string,
      amountIn: number | BN | string,
      amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      fromTokenAddress: string,
      amountIn: number | BN | string,
      amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swapController(txDetails?: Truffle.TransactionDetails): Promise<string>;

  swapETHForAsset: {
    (
      toTokenAddress: string,
      amountIn: number | BN | string,
      amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      toTokenAddress: string,
      amountIn: number | BN | string,
      amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      toTokenAddress: string,
      amountIn: number | BN | string,
      amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      toTokenAddress: string,
      amountIn: number | BN | string,
      amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferAsset: {
    (
      asset: string,
      amount: number | BN | string,
      destination: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      asset: string,
      amount: number | BN | string,
      destination: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      asset: string,
      amount: number | BN | string,
      destination: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      asset: string,
      amount: number | BN | string,
      destination: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  twapOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

  upgradeCapitalPool: {
    (newPoolAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newPoolAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newPoolAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newPoolAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    ETH(txDetails?: Truffle.TransactionDetails): Promise<string>;

    MAX_SLIPPAGE(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    MAX_TRADABLE_PAIR_LIQUIDITY(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    addAsset: {
      (
        _asset: string,
        _min: number | BN | string,
        _max: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _asset: string,
        _min: number | BN | string,
        _max: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _asset: string,
        _min: number | BN | string,
        _max: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _asset: string,
        _min: number | BN | string,
        _max: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    assets(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    changeMasterAddress: {
      (masterAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        masterAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        masterAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        masterAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getAssetDetails(
      _asset: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<[BN, BN, BN, BN]>;

    getAssets(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

    getSwapQuote(
      tokenAmountIn: number | BN | string,
      fromToken: string,
      toToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    lastSwapTime(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    master(txDetails?: Truffle.TransactionDetails): Promise<string>;

    maxAmount(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    minAmount(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    removeAsset: {
      (_asset: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _asset: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _asset: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _asset: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    router(txDetails?: Truffle.TransactionDetails): Promise<string>;

    sendEther: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    setAssetMinMax: {
      (
        _asset: string,
        _min: number | BN | string,
        _max: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _asset: string,
        _min: number | BN | string,
        _max: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _asset: string,
        _min: number | BN | string,
        _max: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _asset: string,
        _min: number | BN | string,
        _max: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swapAssetForETH: {
      (
        fromTokenAddress: string,
        amountIn: number | BN | string,
        amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        fromTokenAddress: string,
        amountIn: number | BN | string,
        amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        fromTokenAddress: string,
        amountIn: number | BN | string,
        amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        fromTokenAddress: string,
        amountIn: number | BN | string,
        amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swapController(txDetails?: Truffle.TransactionDetails): Promise<string>;

    swapETHForAsset: {
      (
        toTokenAddress: string,
        amountIn: number | BN | string,
        amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        toTokenAddress: string,
        amountIn: number | BN | string,
        amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        toTokenAddress: string,
        amountIn: number | BN | string,
        amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        toTokenAddress: string,
        amountIn: number | BN | string,
        amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    transferAsset: {
      (
        asset: string,
        amount: number | BN | string,
        destination: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        asset: string,
        amount: number | BN | string,
        destination: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        asset: string,
        amount: number | BN | string,
        destination: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        asset: string,
        amount: number | BN | string,
        destination: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    twapOracle(txDetails?: Truffle.TransactionDetails): Promise<string>;

    upgradeCapitalPool: {
      (newPoolAddress: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newPoolAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newPoolAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newPoolAddress: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
