import { Connection, PublicKey } from "@solana/web3.js";

const SOLANA_RPC_URL =
  "https://mainnet.helius-rpc.com/?api-key=3743c2ce-5876-43f9-81f6-d97c22ad15e2";

const connection = new Connection(SOLANA_RPC_URL);

export const getSolanaSupply = async () => {
  const supply = await connection.getSupply();
  return {
    total: supply.value.total,
    circulating: supply.value.circulating,
    nonCirculating: supply.value.nonCirculating,
  };
};

export const getCurrentEpoch = async () => {
  const epochInfo = await connection.getEpochInfo();
  const { epoch, slotIndex, slotsInEpoch } = epochInfo;
  const remainingSlots = slotsInEpoch - slotIndex;
  const timeRemain = remainingSlots * 0.4; // Примерное время в секундах (0.4 секунды на слот)
  return {
    epoch,
    slotRange: `${slotIndex} - ${slotsInEpoch}`,
    timeRemain,
  };
};

export const getNetworkStats = async () => {
  const samples = await connection.getRecentPerformanceSamples(1);
  const { numTransactions, samplePeriodSecs } = samples[0];
  const tps = numTransactions / samplePeriodSecs;

  const blockHeight = await connection.getBlockHeight();
  const slotHeight = await connection.getSlot();

  return {
    transactionsCount: numTransactions,
    blockHeight,
    slotHeight,
    tps,
    trueTps: tps, // Используем tps как trueTps для упрощения
  };
};

export const getTotalStake = async () => {
  const voteAccounts = await connection.getVoteAccounts();
  const totalStake = voteAccounts.current
    .concat(voteAccounts.delinquent)
    .reduce((acc, account) => acc + account.activatedStake, 0);
  return {
    totalStake,
    currentStake: voteAccounts.current.reduce(
      (acc, account) => acc + account.activatedStake,
      0
    ),
    delinquentStake: voteAccounts.delinquent.reduce(
      (acc, account) => acc + account.activatedStake,
      0
    ),
  };
};

export const getAssetsByOwner = async () => {
  return;
};
