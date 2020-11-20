/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {EventData, PastEventOptions} from "web3-eth-contract";

export interface SolcCheckerContract
  extends Truffle.Contract<SolcCheckerInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<SolcCheckerInstance>;
}

type AllEvents = never;

export interface SolcCheckerInstance extends Truffle.ContractInstance {
  f: {
    (x: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(x: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      x: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      x: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    f: {
      (x: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(x: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        x: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        x: string,
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
