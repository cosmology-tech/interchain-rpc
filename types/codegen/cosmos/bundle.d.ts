import * as _4 from "./bank/v1beta1/query";
import * as _17 from "./distribution/v1beta1/query";
import * as _20 from "./gov/v1/gov";
import * as _21 from "./gov/v1/query";
import * as _24 from "./gov/v1beta1/gov";
import * as _25 from "./gov/v1beta1/query";
import * as _29 from "./mint/v1beta1/query";
import * as _30 from "./staking/v1beta1/authz";
import * as _32 from "./staking/v1beta1/query";
import * as _33 from "./staking/v1beta1/staking";
import * as _35 from "./tx/signing/v1beta1/signing";
import * as _36 from "./tx/v1beta1/service";
import * as _55 from "./bank/v1beta1/query.rpc.query";
import * as _56 from "./distribution/v1beta1/query.rpc.query";
import * as _57 from "./gov/v1/query.rpc.query";
import * as _58 from "./gov/v1beta1/query.rpc.query";
import * as _59 from "./mint/v1beta1/query.rpc.query";
import * as _60 from "./staking/v1beta1/query.rpc.query";
import * as _61 from "./tx/v1beta1/service.rpc.svc";
import * as _62 from "./bank/v1beta1/tx.rpc.msg";
import * as _63 from "./distribution/v1beta1/tx.rpc.msg";
import * as _64 from "./gov/v1/tx.rpc.msg";
import * as _65 from "./gov/v1beta1/tx.rpc.msg";
import * as _66 from "./staking/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _62.MsgClientImpl;
            QueryClientImpl: typeof _55.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _4.QueryBalanceRequest): Promise<_4.QueryBalanceResponse>;
                allBalances(request: _4.QueryAllBalancesRequest): Promise<_4.QueryAllBalancesResponse>;
                spendableBalances(request: _4.QuerySpendableBalancesRequest): Promise<_4.QuerySpendableBalancesResponse>;
                totalSupply(request?: _4.QueryTotalSupplyRequest): Promise<_4.QueryTotalSupplyResponse>;
                supplyOf(request: _4.QuerySupplyOfRequest): Promise<_4.QuerySupplyOfResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                denomMetadata(request: _4.QueryDenomMetadataRequest): Promise<_4.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _4.QueryDenomsMetadataRequest): Promise<_4.QueryDenomsMetadataResponse>;
                denomOwners(request: _4.QueryDenomOwnersRequest): Promise<_4.QueryDenomOwnersResponse>;
            };
        };
    }
    namespace base {
        namespace query {
            const v1beta1: {};
        }
        namespace reflection {
            const v2alpha1: {};
        }
        const v1beta1: {};
    }
    namespace crypto {
        const ed25519: {};
        namespace hd {
            const v1: {};
        }
        namespace keyring {
            const v1: {};
        }
        const multisig: {};
        const secp256k1: {};
        const secp256r1: {};
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _63.MsgClientImpl;
            QueryClientImpl: typeof _56.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                validatorOutstandingRewards(request: _17.QueryValidatorOutstandingRewardsRequest): Promise<_17.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _17.QueryValidatorCommissionRequest): Promise<_17.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _17.QueryValidatorSlashesRequest): Promise<_17.QueryValidatorSlashesResponse>;
                delegationRewards(request: _17.QueryDelegationRewardsRequest): Promise<_17.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _17.QueryDelegationTotalRewardsRequest): Promise<_17.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _17.QueryDelegatorValidatorsRequest): Promise<_17.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _17.QueryDelegatorWithdrawAddressRequest): Promise<_17.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _17.QueryCommunityPoolRequest): Promise<_17.QueryCommunityPoolResponse>;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _64.MsgClientImpl;
            QueryClientImpl: typeof _57.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _21.QueryProposalRequest): Promise<_21.QueryProposalResponse>;
                proposals(request: _21.QueryProposalsRequest): Promise<_21.QueryProposalsResponse>;
                vote(request: _21.QueryVoteRequest): Promise<_21.QueryVoteResponse>;
                votes(request: _21.QueryVotesRequest): Promise<_21.QueryVotesResponse>;
                params(request: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                deposit(request: _21.QueryDepositRequest): Promise<_21.QueryDepositResponse>;
                deposits(request: _21.QueryDepositsRequest): Promise<_21.QueryDepositsResponse>;
                tallyResult(request: _21.QueryTallyResultRequest): Promise<_21.QueryTallyResultResponse>;
            };
            voteOptionFromJSON(object: any): _20.VoteOption;
            voteOptionToJSON(object: _20.VoteOption): string;
            proposalStatusFromJSON(object: any): _20.ProposalStatus;
            proposalStatusToJSON(object: _20.ProposalStatus): string;
            VoteOption: typeof _20.VoteOption;
            VoteOptionSDKType: typeof _20.VoteOptionSDKType;
            ProposalStatus: typeof _20.ProposalStatus;
            ProposalStatusSDKType: typeof _20.ProposalStatusSDKType;
        };
        const v1beta1: {
            MsgClientImpl: typeof _65.MsgClientImpl;
            QueryClientImpl: typeof _58.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _25.QueryProposalRequest): Promise<_25.QueryProposalResponse>;
                proposals(request: _25.QueryProposalsRequest): Promise<_25.QueryProposalsResponse>;
                vote(request: _25.QueryVoteRequest): Promise<_25.QueryVoteResponse>;
                votes(request: _25.QueryVotesRequest): Promise<_25.QueryVotesResponse>;
                params(request: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                deposit(request: _25.QueryDepositRequest): Promise<_25.QueryDepositResponse>;
                deposits(request: _25.QueryDepositsRequest): Promise<_25.QueryDepositsResponse>;
                tallyResult(request: _25.QueryTallyResultRequest): Promise<_25.QueryTallyResultResponse>;
            };
            voteOptionFromJSON(object: any): _24.VoteOption;
            voteOptionToJSON(object: _24.VoteOption): string;
            proposalStatusFromJSON(object: any): _24.ProposalStatus;
            proposalStatusToJSON(object: _24.ProposalStatus): string;
            VoteOption: typeof _24.VoteOption;
            VoteOptionSDKType: typeof _24.VoteOptionSDKType;
            ProposalStatus: typeof _24.ProposalStatus;
            ProposalStatusSDKType: typeof _24.ProposalStatusSDKType;
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _59.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                inflation(request?: _29.QueryInflationRequest): Promise<_29.QueryInflationResponse>;
                annualProvisions(request?: _29.QueryAnnualProvisionsRequest): Promise<_29.QueryAnnualProvisionsResponse>;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _66.MsgClientImpl;
            QueryClientImpl: typeof _60.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _32.QueryValidatorsRequest): Promise<_32.QueryValidatorsResponse>;
                validator(request: _32.QueryValidatorRequest): Promise<_32.QueryValidatorResponse>;
                validatorDelegations(request: _32.QueryValidatorDelegationsRequest): Promise<_32.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _32.QueryValidatorUnbondingDelegationsRequest): Promise<_32.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _32.QueryDelegationRequest): Promise<_32.QueryDelegationResponse>;
                unbondingDelegation(request: _32.QueryUnbondingDelegationRequest): Promise<_32.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _32.QueryDelegatorDelegationsRequest): Promise<_32.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _32.QueryDelegatorUnbondingDelegationsRequest): Promise<_32.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _32.QueryRedelegationsRequest): Promise<_32.QueryRedelegationsResponse>;
                delegatorValidators(request: _32.QueryDelegatorValidatorsRequest): Promise<_32.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _32.QueryDelegatorValidatorRequest): Promise<_32.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _32.QueryHistoricalInfoRequest): Promise<_32.QueryHistoricalInfoResponse>;
                pool(request?: _32.QueryPoolRequest): Promise<_32.QueryPoolResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
            };
            bondStatusFromJSON(object: any): _33.BondStatus;
            bondStatusToJSON(object: _33.BondStatus): string;
            BondStatus: typeof _33.BondStatus;
            BondStatusSDKType: typeof _33.BondStatusSDKType;
            authorizationTypeFromJSON(object: any): _30.AuthorizationType;
            authorizationTypeToJSON(object: _30.AuthorizationType): string;
            AuthorizationType: typeof _30.AuthorizationType;
            AuthorizationTypeSDKType: typeof _30.AuthorizationTypeSDKType;
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _35.SignMode;
                signModeToJSON(object: _35.SignMode): string;
                SignMode: typeof _35.SignMode;
                SignModeSDKType: typeof _35.SignModeSDKType;
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _61.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _36.SimulateRequest): Promise<_36.SimulateResponse>;
                getTx(request: _36.GetTxRequest): Promise<_36.GetTxResponse>;
                broadcastTx(request: _36.BroadcastTxRequest): Promise<_36.BroadcastTxResponse>;
                getTxsEvent(request: _36.GetTxsEventRequest): Promise<_36.GetTxsEventResponse>;
                getBlockWithTxs(request: _36.GetBlockWithTxsRequest): Promise<_36.GetBlockWithTxsResponse>;
            };
            orderByFromJSON(object: any): _36.OrderBy;
            orderByToJSON(object: _36.OrderBy): string;
            broadcastModeFromJSON(object: any): _36.BroadcastMode;
            broadcastModeToJSON(object: _36.BroadcastMode): string;
            OrderBy: typeof _36.OrderBy;
            OrderBySDKType: typeof _36.OrderBySDKType;
            BroadcastMode: typeof _36.BroadcastMode;
            BroadcastModeSDKType: typeof _36.BroadcastModeSDKType;
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _62.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _63.MsgClientImpl;
                };
                gov: {
                    v1: _64.MsgClientImpl;
                    v1beta1: _65.MsgClientImpl;
                };
                staking: {
                    v1beta1: _66.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: {
                        balance(request: _4.QueryBalanceRequest): Promise<_4.QueryBalanceResponse>;
                        allBalances(request: _4.QueryAllBalancesRequest): Promise<_4.QueryAllBalancesResponse>;
                        spendableBalances(request: _4.QuerySpendableBalancesRequest): Promise<_4.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _4.QueryTotalSupplyRequest): Promise<_4.QueryTotalSupplyResponse>;
                        supplyOf(request: _4.QuerySupplyOfRequest): Promise<_4.QuerySupplyOfResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                        denomMetadata(request: _4.QueryDenomMetadataRequest): Promise<_4.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _4.QueryDenomsMetadataRequest): Promise<_4.QueryDenomsMetadataResponse>;
                        denomOwners(request: _4.QueryDenomOwnersRequest): Promise<_4.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _17.QueryValidatorOutstandingRewardsRequest): Promise<_17.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _17.QueryValidatorCommissionRequest): Promise<_17.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _17.QueryValidatorSlashesRequest): Promise<_17.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _17.QueryDelegationRewardsRequest): Promise<_17.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _17.QueryDelegationTotalRewardsRequest): Promise<_17.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _17.QueryDelegatorValidatorsRequest): Promise<_17.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _17.QueryDelegatorWithdrawAddressRequest): Promise<_17.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _17.QueryCommunityPoolRequest): Promise<_17.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _21.QueryProposalRequest): Promise<_21.QueryProposalResponse>;
                        proposals(request: _21.QueryProposalsRequest): Promise<_21.QueryProposalsResponse>;
                        vote(request: _21.QueryVoteRequest): Promise<_21.QueryVoteResponse>;
                        votes(request: _21.QueryVotesRequest): Promise<_21.QueryVotesResponse>;
                        params(request: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                        deposit(request: _21.QueryDepositRequest): Promise<_21.QueryDepositResponse>;
                        deposits(request: _21.QueryDepositsRequest): Promise<_21.QueryDepositsResponse>;
                        tallyResult(request: _21.QueryTallyResultRequest): Promise<_21.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _25.QueryProposalRequest): Promise<_25.QueryProposalResponse>;
                        proposals(request: _25.QueryProposalsRequest): Promise<_25.QueryProposalsResponse>;
                        vote(request: _25.QueryVoteRequest): Promise<_25.QueryVoteResponse>;
                        votes(request: _25.QueryVotesRequest): Promise<_25.QueryVotesResponse>;
                        params(request: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                        deposit(request: _25.QueryDepositRequest): Promise<_25.QueryDepositResponse>;
                        deposits(request: _25.QueryDepositsRequest): Promise<_25.QueryDepositsResponse>;
                        tallyResult(request: _25.QueryTallyResultRequest): Promise<_25.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        inflation(request?: _29.QueryInflationRequest): Promise<_29.QueryInflationResponse>;
                        annualProvisions(request?: _29.QueryAnnualProvisionsRequest): Promise<_29.QueryAnnualProvisionsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _32.QueryValidatorsRequest): Promise<_32.QueryValidatorsResponse>;
                        validator(request: _32.QueryValidatorRequest): Promise<_32.QueryValidatorResponse>;
                        validatorDelegations(request: _32.QueryValidatorDelegationsRequest): Promise<_32.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _32.QueryValidatorUnbondingDelegationsRequest): Promise<_32.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _32.QueryDelegationRequest): Promise<_32.QueryDelegationResponse>;
                        unbondingDelegation(request: _32.QueryUnbondingDelegationRequest): Promise<_32.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _32.QueryDelegatorDelegationsRequest): Promise<_32.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _32.QueryDelegatorUnbondingDelegationsRequest): Promise<_32.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _32.QueryRedelegationsRequest): Promise<_32.QueryRedelegationsResponse>;
                        delegatorValidators(request: _32.QueryDelegatorValidatorsRequest): Promise<_32.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _32.QueryDelegatorValidatorRequest): Promise<_32.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _32.QueryHistoricalInfoRequest): Promise<_32.QueryHistoricalInfoResponse>;
                        pool(request?: _32.QueryPoolRequest): Promise<_32.QueryPoolResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _36.SimulateRequest): Promise<_36.SimulateResponse>;
                        getTx(request: _36.GetTxRequest): Promise<_36.GetTxResponse>;
                        broadcastTx(request: _36.BroadcastTxRequest): Promise<_36.BroadcastTxResponse>;
                        getTxsEvent(request: _36.GetTxsEventRequest): Promise<_36.GetTxsEventResponse>;
                        getBlockWithTxs(request: _36.GetBlockWithTxsRequest): Promise<_36.GetBlockWithTxsResponse>;
                    };
                };
            };
        }>;
    };
}
