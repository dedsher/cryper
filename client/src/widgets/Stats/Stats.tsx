import {
  getSolanaSupply,
  getCurrentEpoch,
  getNetworkStats,
  getTotalStake,
} from "@shared/api/solana/api";
import { useQuery } from "react-query";
import StatsCard from "./StatsCard";

const Stats = () => {
  const {
    data: solanaSupply,
    isLoading: isSolanaSupplyLoading,
    isSuccess: isSupplySuccess,
  } = useQuery("solanaSupply", getSolanaSupply);
  const {
    data: currentEpoch,
    isLoading: isCurrentEpochLoading,
    isSuccess: isEpochSuccess,
  } = useQuery("currentEpoch", getCurrentEpoch);
  const {
    data: networkStats,
    isLoading: isNetworkStatsLoading,
    isSuccess: isStatsSuccess,
  } = useQuery("networkStats", getNetworkStats);
  const {
    data: totalStake,
    isLoading: isTotalStakeLoading,
    isSuccess: isStakeSuccess,
  } = useQuery("totalStake", getTotalStake);

  const isLoading =
    isSolanaSupplyLoading ||
    isCurrentEpochLoading ||
    isNetworkStatsLoading ||
    isTotalStakeLoading;
  const isSuccess =
    isSupplySuccess && isEpochSuccess && isStatsSuccess && isStakeSuccess;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSuccess) {
    return <div>Failed to load data</div>;
  }

  return (
    <div className="py-[20px] grid grid-cols-4 gap-[20px]">
      <StatsCard title="SOL Supply" value={solanaSupply.total}>
        <p>Circulating Supply: {solanaSupply.circulating}</p>
        <p>Non-Circulating Supply: {solanaSupply.nonCirculating}</p>
      </StatsCard>
      <StatsCard title="Current Epoch" value={currentEpoch.epoch}>
        <p>Slot Range: {currentEpoch.slotRange}</p>
        <p>Time Remain: {currentEpoch.timeRemain} seconds</p>
      </StatsCard>
      <StatsCard title="Network (Transactions)" value={networkStats.transactionsCount}>
        <p>Block Height: {networkStats.blockHeight}</p>
        <p>Slot Height: {networkStats.slotHeight}</p>
        <p>TPS: {networkStats.tps}</p>
        <p>True TPS: {networkStats.trueTps}</p>
      </StatsCard>
      <StatsCard title="Total Stake (SOL)" value={totalStake.totalStake}>
        <p>Current Stake: {totalStake.currentStake}</p>
        <p>Delinquent Stake: {totalStake.delinquentStake}</p>
      </StatsCard>
    </div>
  );
};

export default Stats;
