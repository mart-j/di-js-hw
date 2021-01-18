import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { ChartData } from '../../types/types';
import NanStabilityAnalysis from '../nanStabilityAnalysis/NanStabilityAnalysis';
import StabilityAnalysis from '../stabilityAnalysis/StabilityAnalysis';
import styles from './ValueDistribution.module.scss';

interface Props {
  selectedPosition: ChartData;
  closeChartHandler: () => void;
}

const ValueDistribution: FC<Props> = ({ selectedPosition, closeChartHandler }) => {

  const [toggleChart, setToggleChart] = useState(false);

  return (
    <div className={styles.chartWrapper}>
      <div>
        <div className={styles.buttonWrapper}>
          <div></div>
          <div>

            <div className={styles.navigator}>
              <div
              onClick={() => setToggleChart(false)}
                className={classNames({
                  [styles.stability]: true,
                  [styles.active]: !toggleChart,
                })}
              >
                Stability
              </div>
               <div
               onClick={() => setToggleChart(true)}
                className={classNames({
                  [styles.stability]: true,
                  [styles.active]: toggleChart,
                })}
              >
                Nan Stability
              </div>
            </div>
          </div>
          <div>
            <button onClick={closeChartHandler} className={styles.closeButton}>
              X
            </button>
          </div>
        </div>
      </div>

      {toggleChart ? (
        <NanStabilityAnalysis selectedPosition={selectedPosition} />
      ) : (
          <StabilityAnalysis selectedPosition={selectedPosition} />
      )}
      <div className={styles.positionName}>{selectedPosition.name}</div>
    </div>
  );
};
export default ValueDistribution;
