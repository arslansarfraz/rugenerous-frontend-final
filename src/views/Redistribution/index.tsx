/* eslint-disable prettier/prettier */
import { useState, useCallback, SetStateAction } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, InputAdornment, OutlinedInput, Zoom } from "@material-ui/core";
import "./redistribution.scss";
import { useWeb3Context } from "../../hooks";


function Redistribution() {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const { provider, address, connect, chainID, checkWrongNetwork } = useWeb3Context();
  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="redistribution-view">
      <div className="redistribution-card">
        <Grid className="redistribution-card-grid" container direction="column" spacing={2}>
          <Grid item>
            <div className="redistribution-card-header-main">
              <p className="redistribution-card-header-main-title">Final Redistribution</p>
              <div>
                <p className="redistribution-card-desc-text">
                  Great products convert unconscious, inchoate problems into conscious, realized opportunities. This is what motivated us to start Snowbank: building an amazing product for DeFi and the Avalanche ecosystem. We were fortunate enough to build an amazing community, with shared values, and a common goal. Unfortunately, we have to come to the conclusion that our product isn’t meeting its audience. Interest in rebasing projects is at an all-time low. Despite our exciting v2 plans, we still believe the opportunity could be better captured by a fresh new project.Therefore, it is now time for everyone to move on.<br /><br />

                  Swap your SB for a fixed USDC value equal to the SB risk-free value (RFV) as of Feb 17th. There is no deadline for the redistribution, you can always swap your SB for a fixed USDC value.<br /><br />

                  Liquidity pools will be progressively removed to increase the treasury funds available for redeeming. Do not sell your SB tokens on Trader Joe or other decentralized exchanges as low liquidity will negatively impact your selling price.
                </p>
                <a href="https://docs.snowbank.finance/events/final-redistribution" className="redistribution-link">Learn more about Snowbank's Final Redistribution event and details here.</a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <Zoom in={true}>
        <div className="redistribution-card">
          <Grid className="redistribution-card-grid" container direction="column" spacing={2}>
            <Grid item>
              <div className="redistribution-card-header">
                <p className="redistribution-card-header-title">Redeem</p>
              </div>
            </Grid>

            <Grid item>
              <div className="redistribution-card-metrics">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="redistribution-card-apy">
                      <p className="redistribution-card-metrics-title">Risk-Free Value</p>
                      <p className="redistribution-card-metrics-value">
                        1.50 USDC
                      </p>
                    </div>
                  </Grid>

                  <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className="redistribution-card-index">
                      <p className="redistribution-card-metrics-title">Total SB Deposited</p>
                      <p className="redistribution-card-metrics-value">
                        79,555.88 SB
                      </p>
                    </div>
                  </Grid>

                  <Grid item xs={6} sm={4} md={4} lg={4}>
                    <div className="redistribution-card-index">
                      <p className="redistribution-card-metrics-title">Total Treasury Redeemed</p>
                      <p className="redistribution-card-metrics-value">
                        $17,919,961
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <div className="redistribution-card-area">
              <div className="redistribution-card-wallet-notification">
                <div className="redistribution-card-wallet-connect-btn" onClick={connect}>
                  <p>Connect Wallet</p>
                </div>
                <p className="redistribution-card-wallet-desc-text">Connect your wallet to redeem USDC tokens!</p>
              </div>
            </div>
          </Grid>
        </div>
      </Zoom>
    </div>
  );
}

export default Redistribution;
