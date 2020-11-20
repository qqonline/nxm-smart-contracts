/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {EventData, PastEventOptions} from "web3-eth-contract";

export interface OraclizeAddrResolverIContract
  extends Truffle.Contract<OraclizeAddrResolverIInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<OraclizeAddrResolverIInstance>;
}

type AllEvents = never;

export interface OraclizeAddrResolverIInstance
  extends Truffle.ContractInstance {
  getAddress: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<string>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  methods: {
    getAddress: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<string>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
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
