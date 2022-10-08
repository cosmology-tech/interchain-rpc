import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
/** GenesisState defines the bank module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** balances is an array containing the balances of all the accounts. */
    balances: Balance[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: Coin[];
    /** denom_metadata defines the metadata of the differents coins. */
    denomMetadata: Metadata[];
}
/** GenesisState defines the bank module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the paramaters of the module. */
    params: ParamsSDKType;
    /** balances is an array containing the balances of all the accounts. */
    balances: BalanceSDKType[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: CoinSDKType[];
    /** denom_metadata defines the metadata of the differents coins. */
    denom_metadata: MetadataSDKType[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface Balance {
    /** address is the address of the balance holder. */
    address: string;
    /** coins defines the different coins this balance holds. */
    coins: Coin[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface BalanceSDKType {
    /** address is the address of the balance holder. */
    address: string;
    /** coins defines the different coins this balance holds. */
    coins: CoinSDKType[];
}